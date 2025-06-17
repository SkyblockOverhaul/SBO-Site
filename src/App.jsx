import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import MfCalc from "@/pages/MfCalc";
import ScrollToHash from "@/components/global/ScrollToHash";
import { ThemeProvider } from "@/context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<ScrollToHash />
				<Routes>
					{/* Define your routes here */}
					{/* Example: <Route path="/" element={<Home />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/mfcalc" element={<MfCalc />} />
					{/* Add more routes as needed */}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
