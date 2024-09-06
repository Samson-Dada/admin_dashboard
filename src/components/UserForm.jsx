// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const UserForm = ({ users, setUsers }) => {
// 	const { id } = useParams(); // If id exists, we are in edit mode
// 	const navigate = useNavigate();

// 	const isEditMode = !!id;
// 	const existingUser = users.find((user) => user.id === parseInt(id));

// 	const [name, setName] = useState(isEditMode ? existingUser.name : "");
// 	const [email, setEmail] = useState(isEditMode ? existingUser.email : "");
// 	const [role, setRole] = useState(isEditMode ? existingUser.role : "user");

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (isEditMode) {
// 			// Update existing user
// 			setUsers((prevUsers) =>
// 				prevUsers.map((user) =>
// 					user.id === parseInt(id) ? { ...user, name, email, role } : user
// 				)
// 			);
// 		} else {
// 			// Create new user
// 			const newUser = {
// 				id: users.length + 1,
// 				name,
// 				email,
// 				role,
// 			};
// 			setUsers((prevUsers) => [...prevUsers, newUser]);
// 		}
// 		navigate("/admin/users");
// 	};

// 	return (
// 		<div className="min-h-screen bg-gray-100 p-5 flex items-center justify-center">
// 			<div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
// 				<h2 className="text-2xl font-bold mb-6">
// 					{isEditMode ? "Edit User" : "Create User"}
// 				</h2>
// 				<form onSubmit={handleSubmit}>
// 					<div className="mb-4">
// 						<label htmlFor="name" className="block text-gray-700">
// 							Name
// 						</label>
// 						<input
// 							type="text"
// 							id="name"
// 							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 							required
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label htmlFor="email" className="block text-gray-700">
// 							Email
// 						</label>
// 						<input
// 							type="email"
// 							id="email"
// 							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							required
// 						/>
// 					</div>
// 					<div className="mb-6">
// 						<label htmlFor="role" className="block text-gray-700">
// 							Role
// 						</label>
// 						<select
// 							id="role"
// 							className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// 							value={role}
// 							onChange={(e) => setRole(e.target.value)}
// 							required
// 						>
// 							<option value="user">User</option>
// 							<option value="admin">Admin</option>
// 						</select>
// 					</div>
// 					<button
// 						type="submit"
// 						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
// 					>
// 						{isEditMode ? "Update User" : "Create User"}
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default UserForm;
