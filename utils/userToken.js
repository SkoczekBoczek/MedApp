import { v4 as uuidv4 } from "uuid";

export default function userToken() {
	let token = localStorage.getItem("userToken");
	if (!token) {
		token = uuidv4();
		localStorage.setItem("userToken", token);
	}
	return token;
}
