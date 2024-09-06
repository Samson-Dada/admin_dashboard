import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllUsers, deleteUser } from "../Services/userServices";

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchAllUsers();

				// Extract the users array from the response object
				if (
					response &&
					response.filteredRole &&
					Array.isArray(response.filteredRole)
				) {
					setUsers(response.filteredRole);
				} else {
					console.error("FilteredRole is not an array or missing");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []); // Empty dependency array means this runs only on mount

	const handleDelete = async (userId) => {
		if (window.confirm("Are you sure you want to delete this user?")) {
			try {
				const response = await deleteUser(userId);
				console.log("response", response);
				const updatedUsers = users.filter((user) => user._id !== userId);
				setUsers(updatedUsers);
				alert("User deleted successfully.");
			} catch (error) {
				console.error("Error deleting user:", error);
				alert("Failed to delete user. Please try again.");
			}
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 p-5">
			<div className="bg-white p-6 rounded-md shadow-md">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold">Manage Users</h2>
					<Link
						to="/admin/users/create"
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
					>
						Create User
					</Link>
				</div>

				<table className="w-full bg-white rounded shadow-md">
					<thead>
						<tr className="bg-gray-200 text-left">
							<th className="py-2 px-4">Name</th>
							<th className="py-2 px-4">Email</th>
							<th className="py-2 px-4">Role</th>
							<th className="py-2 px-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.length > 0 ? (
							users.map((user) => (
								<tr key={user._id} className="border-t">
									<td className="py-2 px-4">{user.fullName}</td>
									<td className="py-2 px-4">{user.email}</td>
									<td className="py-2 px-4">{user.role}</td>
									<td className="py-2 px-4 flex space-x-2">
										<Link
											to={`/admin/users/edit/${user._id}`}
											className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition duration-200"
										>
											Edit
										</Link>
										<button
											onClick={() => handleDelete(user._id)}
											className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200"
										>
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="4" className="py-2 px-4 text-center">
									No users available
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { fetchAllUsers, deleteUser } from "../Services/userServices";

// const UserList = () => {
// 	const [users, setUsers] = useState([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetchAllUsers();

// 				// Extract the users array from the response object
// 				if (
// 					response &&
// 					response.filteredRole &&
// 					Array.isArray(response.filteredRole)
// 				) {
// 					setUsers(response.filteredRole);
// 				} else {
// 					console.error("FilteredRole is not an array or missing");
// 				}
// 			} catch (error) {
// 				console.error("Error fetching data:", error);
// 			}
// 		};

// 		fetchData();
// 	}, []); // Empty dependency array means this runs only on mount

// 	const handleDelete = async (userId) => {
// 		if (window.confirm("Are you sure you want to delete this user?")) {
// 			try {
// 				// Call the delete API using fetch
// 				await deleteUser(userId);

// 				// Remove the user from the local state after successful deletion
// 				const updatedUsers = users.filter((user) => user._id !== userId);
// 				setUsers(updatedUsers);
// 			} catch (error) {
// 				console.error("Error deleting user:", error);
// 				alert("Failed to delete user. Please try again.");
// 			}
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen bg-gray-100 p-5">
// 			<div className="bg-white p-6 rounded-md shadow-md">
// 				<div className="flex justify-between items-center mb-4">
// 					<h2 className="text-2xl font-bold">Manage Users</h2>
// 					<Link
// 						to="/admin/users/create"
// 						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
// 					>
// 						Create User
// 					</Link>
// 				</div>

// 				<table className="w-full bg-white rounded shadow-md">
// 					<thead>
// 						<tr className="bg-gray-200 text-left">
// 							<th className="py-2 px-4">Name</th>
// 							<th className="py-2 px-4">Email</th>
// 							<th className="py-2 px-4">Role</th>
// 							<th className="py-2 px-4">Actions</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{users.length > 0 ? (
// 							users.map((user) => (
// 								<tr key={user._id} className="border-t">
// 									<td className="py-2 px-4">{user.fullName}</td>
// 									<td className="py-2 px-4">{user.email}</td>
// 									<td className="py-2 px-4">{user.role}</td>
// 									<td className="py-2 px-4 flex space-x-2">
// 										<Link
// 											to={`/admin/users/edit/${user._id}`}
// 											className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition duration-200"
// 										>
// 											Edit
// 										</Link>
// 										<button
// 											onClick={() => handleDelete(user._id)}
// 											className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200"
// 										>
// 											Delete
// 										</button>
// 									</td>
// 								</tr>
// 							))
// 						) : (
// 							<tr>
// 								<td colSpan="4" className="py-2 px-4 text-center">
// 									No users available
// 								</td>
// 							</tr>
// 						)}
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	);
// };

// export default UserList;
