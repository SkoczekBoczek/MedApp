import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, password } = body;

		if (
			!name ||
			name.trim() === "" ||
			!email ||
			!email.includes("@") ||
			!password ||
			password.trim().length < 6
		) {
			return new Response(JSON.stringify({ error: "Invalid input." }), {
				status: 422,
				headers: { "Content-Type": "application/json" },
			});
		}

		const { db } = await connectToDatabase();
		const existingUser = await db.collection("users").findOne({ email });

		if (existingUser) {
			return new Response(JSON.stringify({ error: "User exists already!" }), {
				status: 422,
				headers: { "Content-Type": "application/json" },
			});
		}

		const result = await db.collection("users").insertOne({
			email,
			password,
			role: "patient",
			name,
		});

		return new Response(JSON.stringify({ message: "User created!" }), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
