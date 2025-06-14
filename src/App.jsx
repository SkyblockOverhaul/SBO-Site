import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					{/* Define your routes here */}
					{/* Example: <Route path="/" element={<Home />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					{/* Add more routes as needed */}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
