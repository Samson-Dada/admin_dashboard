// src/layouts/MainLayout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-grow bg-gray-50 p-4">
				<Outlet /> {/* This renders the nested route components */}
			</div>
		</div>
	);
};

export default MainLayout;
