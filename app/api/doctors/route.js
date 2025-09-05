import { MongoClient } from "mongodb";

export async function GET() {
	try {
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db("clinicDB");
		const doctors = await db.collection("doctors").find().toArray();

		return new Response(JSON.stringify(doctors), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Błąd połączenia z bazą" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
