import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		// Clear localStorage
		localStorage.removeItem("token");
		localStorage.removeItem("userInfo");

		// Redirect to login page
		navigate("/login");
	};

	return (
		<aside className="w-64 h-screen bg-gray-800 p-5 text-white">
			<div>
				<h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
				<ul className="space-y-4">
					<li>
						<Link
							to="/admin/dashboard"
							className="text-white hover:text-gray-300"
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link to="/admin/users" className="text-white hover:text-gray-300">
							Manage Users
						</Link>
					</li>
					<li>
						<Link to="/products" className="text-white hover:text-gray-300">
							Products
						</Link>
					</li>
				</ul>

				<div className="mt-10">
					<p className="text-gray-500 text-xs mb-4">Authentication</p>
					<ul className="space-y-4">
						<li>
							<button
								onClick={handleLogout}
								className="w-20 flex items-center justify-center bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
							>
								<i className="icon-logout mr-2"></i> Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
