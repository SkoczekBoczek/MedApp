import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
	throw new Error(
		"JWT_SECRET is not defined in environment variables. Authentication will not work.",
	);
}
const EXPIRES_IN = "7d";

export function signToken(payload) {
	return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyToken(token) {
	try {
		return jwt.verify(token, SECRET);
	} catch (err) {
		return null;
	}
}
