import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

import { getUserIdFromRequest } from "@/lib/authMiddleware";

export async function GET(req) {
	try {
		const userId = getUserIdFromRequest(req);
		if (!userId) {
			return new Response(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		const { db } = await connectToDatabase();
		const { searchParams } = new URL(req.url);

		const user = await db
			.collection("users")
			.findOne({ _id: new ObjectId(userId) });
		const doctorProfile = await db.collection("doctors").findOne({
			$or: [{ userId: userId }, { userId: new ObjectId(userId) }],
		});
		const isDoctor = user?.role === "doctor" || !!doctorProfile;

		const specificId = searchParams.get("doctorId") || searchParams.get("id");

		if (specificId) {
			let query;
			if (isDoctor) {
				if (!doctorProfile) {
					return new Response(
						JSON.stringify({
							messages: [],
							isDoctor,
						}),
						{ status: 200, headers: { "Content-Type": "application/json" } },
					);
				}
				query = { doctorId: doctorProfile._id.toString(), userId: specificId };
			} else {
				query = { userId, doctorId: specificId };
			}

			const conversation = await db.collection("conversations").findOne(query);

			return new Response(
				JSON.stringify({
					messages: conversation?.messages || [],
					isDoctor,
				}),
				{
					status: 200,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		if (isDoctor) {
			if (!doctorProfile) {
				return new Response(JSON.stringify({ items: [], isDoctor: true }), {
					status: 200,
				});
			}

			const conversations = await db
				.collection("conversations")
				.find({ doctorId: doctorProfile._id.toString() })
				.toArray();

			const patientIds = [...new Set(conversations.map((c) => c.userId))];
			const patients = await db
				.collection("users")
				.find({ _id: { $in: patientIds.map((id) => new ObjectId(id)) } })
				.toArray();

			return new Response(JSON.stringify({ items: patients, isDoctor: true }), {
				status: 200,
			});
		} else {
			return new Response(JSON.stringify({ isDoctor: false }), { status: 200 });
		}
	} catch (error) {
		console.error("Database error:", error);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

export async function POST(req) {
	try {
		const userId = getUserIdFromRequest(req);
		if (!userId) {
			return new Response(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		const { db } = await connectToDatabase();
		const { doctorId, recipientId, message } = await req.json();

		const user = await db
			.collection("users")
			.findOne({ _id: new ObjectId(userId) });
		const doctorProfile = await db.collection("doctors").findOne({
			$or: [{ userId: userId }, { userId: new ObjectId(userId) }],
		});
		const isDoctor = user?.role === "doctor" || !!doctorProfile;

		const docId = isDoctor
			? doctorProfile?._id.toString()
			: doctorId || recipientId;
		const patId = isDoctor ? recipientId : userId;
		const sender = isDoctor ? "doctor" : "patient";

		if (!docId || !message) {
			return new Response(JSON.stringify({ error: "Missing data" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		const newMessage = {
			id: new ObjectId().toString(),
			sender: sender,
			text: message,
			timestamp: new Date(),
		};

		await db
			.collection("conversations")
			.updateOne(
				{ doctorId: docId, userId: patId },
				{ $push: { messages: newMessage } },
				{ upsert: true },
			);
		return new Response(
			JSON.stringify({ message: "Message added successfully" }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
