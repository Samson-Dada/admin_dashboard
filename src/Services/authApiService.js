import config from "../config";

export const login = async (loginData) => {
	try {
		const response = await fetch(`${config.API_BASE_URL}/auth/login`, {
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
		const response = await fetch(`${config.API_BASE_URL}/auth/register`, {
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
