import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req) {
	try {
		const { db } = await connectToDatabase();
		const { searchParams } = new URL(req.url);
		const userToken = searchParams.get("token");
		const plan = await db.collection("plans").findOne({ userToken });

		if (!plan) {
			return new Response(JSON.stringify({ error: "Plan not found" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify(plan), {
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
		const plan = await req.json();

		await db
			.collection("plans")
			.updateOne(
				{ userToken: plan.userToken },
				{ $set: { weeklyPlan: plan.plan } },
				{ upsert: true },
			);

		return new Response(
			JSON.stringify({ message: "Plan saved successfully" }),
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
