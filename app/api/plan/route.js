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
		const plan = await db.collection("plans").findOne({ userId });

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
		const userId = getUserIdFromRequest(req);
		if (!userId) {
			return new Response(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		const { db } = await connectToDatabase();
		const plan = await req.json();

		await db
			.collection("plans")
			.updateOne(
				{ userId },
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
