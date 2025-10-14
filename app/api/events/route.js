import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
	if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

	const client = await MongoClient.connect(process.env.MONGODB_URI);
	const db = client.db("clinicDB");

	cachedClient = client;
	cachedDb = db;

	return { client, db };
}

export async function GET(req) {
	try {
		const { db } = await connectToDatabase();

		const { searchParams } = new URL(req.url);

		const userToken = searchParams.get("token");
		const events = await db.collection("events").find({ userToken }).toArray();

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
			}
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
