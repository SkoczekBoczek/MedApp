import { MongoClient } from "mongodb";

const client = await MongoClient.connect(process.env.MONGODB_URI);

export async function GET() {
	try {
		const db = client.db("clinicDB");
		const drugs = await db.collection("drugs").find().limit(20).toArray();

		return new Response(JSON.stringify(drugs), {
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
