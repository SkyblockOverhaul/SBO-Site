import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Define your routes here */}
				{/* Example: <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				{/* Add more routes as needed */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
