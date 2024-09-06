import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import { useState } from "react";

import MainLayout from "./components/MainLayout";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
// import UserForm from "./components/UserForm";

const ProtectedRoute = ({ children }) => {
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
	return userInfo && userInfo.role === "admin" ? (
		children
	) : (
		<Navigate to="/login" />
	);
};

function App() {
	const [users, setUsers] = useState([]);
	return (
		<Router>
			<Routes>
				<Route
					path="/admin"
					element={
						<ProtectedRoute>
							<MainLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Dashboard />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="users" element={<UserList />} />
					{/* <Route path="users/create" element={<UserForm />} /> */}
					{/* <Route path="users/edit/:id" element={<UserForm />} /> */}
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;

// function App() {
// 	const [users, setUsers] = useState([]);
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route
// 					path="/admin"
// 					element={
// 						<ProtectedRoute>
// 							<MainLayout />
// 						</ProtectedRoute>
// 					}
// 				>
// 					<Route index element={<Dashboard />} />
// 					<Route path="dashboard" element={<Dashboard />} />
// 					<Route path="users" element={<UserList />} />
// 					<Route path="users/create" element={<UserForm />} />
// 					<Route path="users/edit/:id" element={<UserForm />} />
// 				</Route>
// 				<Route path="/login" element={<Login />} />
// 				<Route path="/signup" element={<Register />} />
// 			</Routes>
// 		</Router>
// 	);
// }
