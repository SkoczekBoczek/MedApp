import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request) {
	try {
		const body = await request.json();
		const { email, password } = body || {};

		if (!email || !password) {
			return new Response(
				JSON.stringify({ error: "Login and password are required" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const { db } = await connectToDatabase();
		const user = await db.collection("users").findOne({ email });

		if (!user) {
			return new Response(
				JSON.stringify({ error: "Incorrect email or password" }),
				{
					status: 401,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		if (user.password !== password) {
			return new Response(
				JSON.stringify({ error: "Incorrect email or password" }),
				{
					status: 401,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const safeUser = {
			_id: user._id.toString(),
			role: user.role || null,
			name: user.name || null,
		};

		return new Response(JSON.stringify({ user: safeUser }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
