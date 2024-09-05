// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="w-64 h-screen bg-gray-100 p-5">
			<div className="flex flex-col space-y-5">
				<Link to="/products" className="flex items-center text-gray-400">
					<i className="icon-products mr-2"></i> Products
				</Link>
				<Link to="/users" className="flex items-center text-gray-400">
					<i className="icon-categories mr-2"></i> Users
				</Link>
				<Link to="/customers" className="flex items-center text-gray-400">
					<i className="icon-customers mr-2"></i> Customers
				</Link>

				<div className="mt-8">
					<p className="text-gray-500 text-sm mb-4">Authentication</p>
					<Link to="/signup" className="flex items-center text-gray-400 mb-4">
						<i className="icon-signup mr-2"></i> Sign Up
					</Link>
					<Link to="/signin" className="flex items-center text-gray-400 mb-4">
						<i className="icon-signin mr-2"></i> Sign In
					</Link>
					<Link
						to="/forgot-password"
						className="flex items-center text-gray-600 mb-4"
					>
						<i className="icon-forgot-password mr-2"></i> Forgot Password
					</Link>
					<Link
						to="/reset-password"
						className="flex items-center text-gray-600 mb-4"
					>
						<i className="icon-reset-password mr-2"></i> Reset Password
					</Link>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
