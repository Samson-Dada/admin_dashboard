import React, { useState } from "react";
import { register } from "../../Services/authApiService";
import { Link } from "react-router-dom";
import { ROLE_ADMIN } from "../../config";

const Login = () => {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");

	// {
	//      "fullName": "Deo admin",
	//     "email":"admin@dev.com" ,
	//     "phoneNumber": "0987654321",
	//     "username": "admin",
	//     "password": "pass12345",
	//     "role": "admin"
	// }
	const admin = ROLE_ADMIN;
	const handleLogin = async (e) => {
		e.preventDefault();
		const loginData = { email, password };
		try {
			const response = await register(loginData);

			// to check if the user is admin or not

			const role = response.data.user.role ?? "";
			if (role === "admin") {
				console.log("Login successful:", response);

				// Extract and store the token
				const token = response.data.token;
				localStorage.setItem("token", token);

				const userInfo = {
					id: response.data.user._id,
					role: response.data.user.role,
					fullName: response.data.user.fullName,
					email: response.data.user.email,
				};

				localStorage.setItem("userInfo", JSON.stringify(userInfo));

				console.log("User info stored successfully.");
			} else if (role === "") {
				console.error("error you are not authorized to access this page");
			}

			// Redirect to admin dashboard or another protected route
			// window.location.href = "/admin/dashboard";
			<Link></Link>;
		} catch (error) {
			console.error("Login failed:", error);
			// Handle login failure (e.g., show error message) ti user
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold text-center mb-6">Login</h2>
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-700">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
