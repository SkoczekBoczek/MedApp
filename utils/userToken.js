export function getAuthToken() {
	return localStorage.getItem("authToken");
}

export function getUserId() {
	return localStorage.getItem("userToken");
}

export function clearAuth() {
	localStorage.removeItem("authToken");
	localStorage.removeItem("userToken");
	localStorage.removeItem("userName");
}

export default getAuthToken;
