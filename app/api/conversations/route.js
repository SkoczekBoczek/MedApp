import { MongoClient, ObjectId } from "mongodb";

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
		const doctorId = searchParams.get("doctorId");

		const conversation = await db
			.collection("conversations")
			.findOne({ userToken, doctorId });

		if (!conversation) {
			return new Response(
				JSON.stringify({
					error: "Conversation not found",
					searchParams: { userToken, doctorId },
				}),
				{
					status: 404,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		return new Response(
			JSON.stringify({
				messages: conversation.messages,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
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
		const { db } = await connectToDatabase();
		const { token, doctorId, message } = await req.json();

		if (!token || !doctorId || !message) {
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
				{ doctorId: doctorId, userToken: token },
				{ $push: { messages: newMessage } }
			);
		return new Response(
			JSON.stringify({ message: "Message added successfully" }),
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
