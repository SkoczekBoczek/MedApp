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
		const events = await db
			.collection("events")
			.find({ userId })
			.limit(20)
			.toArray();

		return new Response(JSON.stringify(events), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
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
		const newEvent = await req.json();

		if (!newEvent) {
			return new Response(JSON.stringify({ error: "Missing data" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		newEvent.userId = userId;
		const result = await db.collection("events").insertOne(newEvent);

		return new Response(
			JSON.stringify({
				message: "Event added successfully",
				_id: result.insertedId,
			}),
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

export async function DELETE(req) {
	try {
		const userId = getUserIdFromRequest(req);
		if (!userId) {
			return new Response(JSON.stringify({ error: "Unauthorized" }), {
				status: 1,
				headers: { "Content-Type": "application/json" },
			});
		}

		const { db } = await connectToDatabase();

		const { searchParams } = new URL(req.url);
		const eventId = searchParams.get("eventId");

		if (!eventId) {
			return new Response(JSON.stringify({ error: "Missing eventId" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		await db
			.collection("events")
			.deleteOne({ _id: new ObjectId(eventId), userId });

		return new Response(
			JSON.stringify({ error: "Event deleted successfully" }),
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
