import React, { useState } from "react";
import { register } from "../../Services/authService"; // Assuming this is the registration service
import { Link, useNavigate } from "react-router-dom";
import { ROLE_ADMIN } from "../../config";

const Register = () => {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState(""); // To handle role selection
	const navigate = useNavigate(); // For programmatic navigation

	const handleRegister = async (e) => {
		e.preventDefault();
		const registrationData = {
			email,
			fullName,
			username,
			phoneNumber,
			password,
			role,
		};

		try {
			const response = await register(registrationData);

			const userRole = response.data.user.role ?? "";
			if (userRole === ROLE_ADMIN) {
				console.log("Registration successful:", response);

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

				// Redirect to admin dashboard or another protected route
				navigate("/admin/dashboard");
			} else if (userRole === "") {
				console.error("Error: You are not authorized to access this page");
			}
		} catch (error) {
			console.error("Registration failed:", error);
			// Handle registration failure (e.g., show error message to user)
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold text-center mb-6">Register</h2>
				<form onSubmit={handleRegister}>
					<div className="mb-4">
						<label htmlFor="fullName" className="block text-gray-700">
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your full name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							required
						/>
					</div>
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
					<div className="mb-4">
						<label htmlFor="username" className="block text-gray-700">
							Username
						</label>
						<input
							type="text"
							id="username"
							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="phoneNumber" className="block text-gray-700">
							Phone Number
						</label>
						<input
							type="text"
							id="phoneNumber"
							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
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
					<div className="mb-6">
						<label htmlFor="role" className="block text-gray-700">
							Role
						</label>
						<select
							id="role"
							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							value={role}
							onChange={(e) => setRole(e.target.value)}
							required
						>
							<option value="">Select a role</option>
							<option value={ROLE_ADMIN}>Admin</option>
							<option value="user">User</option>
						</select>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
