import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="login" element={<Login />} />
					{/* <Route path="dashboard" element={<Dashboard />} /> */}
					{/* Additional routes can go here */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route path="dashboard" element={<Dashboard />} />
//           {/* Additional routes can go here */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
