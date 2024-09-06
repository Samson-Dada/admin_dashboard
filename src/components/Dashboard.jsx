import React, { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { fetchAllUsers } from "../Services/userServices.js"; // Importing the services
import { fetchProducts } from "../Services/productServices.js"; // Importing the services

const Dashboard = () => {
	const [userData, setUserData] = useState([]);
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await fetchAllUsers();
				const products = await fetchProducts();

				setUserData([{ name: "Users", value: users.length }]);
				setProductData([{ name: "Products", value: products.length }]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-6">Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 bg-white rounded-lg shadow-lg">
					<h2 className="text-xl font-semibold mb-4">Number of Users</h2>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={userData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="value" fill="#8884d8" />
						</BarChart>
					</ResponsiveContainer>
				</div>
				<div className="p-6 bg-white rounded-lg shadow-lg">
					<h2 className="text-xl font-semibold mb-4">Number of Products</h2>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={productData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="value" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
