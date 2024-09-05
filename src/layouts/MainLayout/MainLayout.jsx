// src/layouts/MainLayout.jsx
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login/Login";

const MainLayout = () => {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-grow bg-gray-50">
				<Login />
				<Dashboard />
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
