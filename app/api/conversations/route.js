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
		const doctorId = searchParams.get("doctorId");

		const conversation = await db
			.collection("conversations")
			.findOne({ userId, doctorId });

		if (!conversation) {
			return new Response(JSON.stringify({ error: "Conversation not found" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify({ messages: conversation.messages }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
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
		const { doctorId, message } = await req.json();

		if (!doctorId || !message) {
			return new Response(JSON.stringify({ error: "Missing data" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		const newMessage = {
			id: new ObjectId().toString(),
			sender: "patient",
			text: message,
			timestamp: new Date(),
		};

		await db
			.collection("conversations")
			.updateOne(
				{ doctorId: doctorId, userId },
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
