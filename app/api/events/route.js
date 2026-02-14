import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req) {
	try {
		const { db } = await connectToDatabase();

		const { searchParams } = new URL(req.url);

		const userToken = searchParams.get("token");
		const events = await db
			.collection("events")
			.find({ userToken })
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
		const { db } = await connectToDatabase();
		const newEvent = await req.json();

		if (!newEvent) {
			return new Response(JSON.stringify({ error: "Missing data" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		await db.collection("events").insertOne(newEvent);

		return new Response(
			JSON.stringify({ message: "Event added successfully" }),
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
		const { db } = await connectToDatabase();

		const { searchParams } = new URL(req.url);
		const eventId = searchParams.get("eventId");

		if (!eventId) {
			return new Response(JSON.stringify({ error: "Missing eventId" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		await db.collection("events").deleteOne({ _id: new ObjectId(eventId) });

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
