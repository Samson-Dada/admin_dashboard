// Fetch all users
export const fetchAllUsers = async () => {
	try {
		const response = await fetch("http://127.0.0.1:8000/api/users");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const users = await response.json();
		console.log(users);
		return users;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
};

export const fetchProducts = async () => {
	try {
		const response = await fetch("http://127.0.0.1:8000/api/products");
		if (!response.ok) {
			throw new Error("Failed to fetch product data");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};
