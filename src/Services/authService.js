import { config } from "../config.js";

const API_URL = config.DEPLOYED_API_BASE_URL;
export const login = async (loginData) => {
	try {
		const response = await fetch(`${API_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});

		if (!response.ok) {
			throw new Error("Login failed");
		}

		return await response.json();
	} catch (error) {
		console.error("Error during login:", error);
		throw error;
	}
};

export const register = async (loginData) => {
	try {
		const response = await fetch(`${API_URL}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});

		if (!response.ok) {
			throw new Error("Login failed");
		}

		return await response.json();
	} catch (error) {
		console.error("Error during login:", error);
		throw error;
	}
};
