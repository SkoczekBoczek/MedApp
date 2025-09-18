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
		const plan = await db.collection("plans").findOne({ userToken });

		if (!plan) {
			return new Response(JSON.stringify({ error: "Plan not found" }), {
				status: 404,
				headers: { "Content-Type": "aplication/json" },
			});
		}

		return new Response(JSON.stringify(plan), {
			status: 200,
			headers: { "Content-Type": "aplication/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "aplication/json" },
		});
	}
}

export async function POST(req) {
	try {
		const { db } = await connectToDatabase();
		const plan = await req.json();

		const existingPlan = await db
			.collection("plans")
			.findOne({ userToken: plan.userToken });

		if (existingPlan) {
			await db
				.collection("plans")
				.updateOne(
					{ userToken: plan.userToken },
					{ $set: { weeklyPlan: plan.plan } }
				);

			return new Response(
				JSON.stringify({ message: "Plan updated successfully" }),
				{
					status: 200,
					headers: { "Content-Type": "application/json" },
				}
			);
		} else {
			await db.collection("plans").insertOne(plan);
			return new Response(
				JSON.stringify({ message: "Plan created successfully" }),
				{
					status: 201,
					headers: { "Content-Type": "application/json" },
				}
			);
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
