import { config } from "../config";

const API_URL = config.DEPLOYED_API_BASE_URL;

export const fetchProducts = async () => {
	try {
		const response = await fetch(`${API_URL}/products`);
		if (!response.ok) {
			throw new Error("Failed to fetch product data");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};
