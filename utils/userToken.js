export function getAuthToken() {
	return localStorage.getItem("authToken");
}

export function clearAuth() {
	localStorage.removeItem("authToken");
	localStorage.removeItem("userName");
}

export default getAuthToken;
