import { config } from "../config";

// Get user from localStorage
const loginUser = JSON.parse(localStorage.getItem("userInfo"));
console.log("role", loginUser);

const API_URL = config.DEPLOYED_API_BASE_URL;
export const fetchAllUsers = async () => {
	try {
		const response = await fetch(`${API_URL}/users`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const users = await response.json();
		//	console.log(users);
		return users;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const updateUser = async (userId, updatedData) => {
	const response = await fetch(`${API_URL}/users/${userId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Role: loginUser.role,
		},
		body: JSON.stringify(updatedData),
	});

	const result = await response.json();
	if (response.ok) {
		console.log("User updated successfully:", result);
	} else {
		console.error("Error updating user:", result);
	}
};

export const deleteUser = async (userId) => {
	const response = await fetch(`${API_URL}/users/${userId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Role: loginUser.role, // Make sure loginUser.role exists
		},
	});

	// Check if the response is OK but has no content (204 No Content)
	if (response.status === 204) {
		return; // Do not attempt to parse as JSON for 204 No Content
	}

	if (!response.ok) {
		throw new Error("Failed to delete user");
	}

	// Parse the response as JSON only if there's a body
	return await response.json();
};

// export const deleteUser = async (userId) => {
// 	const response = await fetch(`${API_URL}/users/${userId}`, {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Role: loginUser.role,
// 		},
// 	});

// 	if (!response.ok) {
// 		throw new Error("Failed to delete user");
// 	}

// 	return await response.json();
// };
