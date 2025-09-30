import { MongoClient } from "mongodb";

const client = await MongoClient.connect(process.env.MONGODB_URI);

export async function GET(req) {
	try {
		const { searchParams } = new URL(req.url);
		const query = searchParams.get("query");
		const limit = parseInt(searchParams.get("limit"));
		const skip = parseInt(searchParams.get("skip"));

		const db = client.db("clinicDB");

		const regex = new RegExp(query, "i");

		const drugs = await db
			.collection("drugs")
			.find({ productName: { $regex: regex } })
			.skip(skip)
			.limit(limit)
			.toArray();

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
