import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = "clinicDB";

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local or in your Vercel project settings",
	);
}

let cached = global.mongo;

if (!cached) {
	cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const client = new MongoClient(MONGODB_URI);
		cached.promise = client
			.connect()
			.then((client) => ({ client, db: client.db(DB_NAME) }));
	}

	cached.conn = await cached.promise;
	return cached.conn;
}
