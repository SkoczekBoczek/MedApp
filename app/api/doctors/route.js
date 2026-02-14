import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
	try {
		const { db } = await connectToDatabase();
		const doctors = await db.collection("doctors").find().limit(20).toArray();

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
