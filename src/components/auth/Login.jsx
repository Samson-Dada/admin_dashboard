import React, { useState } from "react";
import { login } from "../../Services/authService.js";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const loginData = { email, password };

		try {
			const response = await login(loginData);

			const role = response.data.user.role ?? "";
			if (role) {
				console.log("Login successful:", response);

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

				if (role === "admin") {
					navigate("/admin/dashboard");
					navigate("/admin");
				} else {
					navigate("/user/home");
				}
			} else {
				console.error("Unauthorized access.");
			}
		} catch (error) {
			console.error("Login failed:", error);
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
				<div className="mt-4 text-center">
					<span>Register as admin </span>
					<Link to="/register" className="text-blue-500 hover:underline">
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
