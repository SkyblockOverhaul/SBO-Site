import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// Check localStorage first
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) return savedTheme;

		// Check system preference
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}

		return "light";
	});

	useEffect(() => {
		// Update localStorage and document class when theme changes
		localStorage.setItem("theme", theme);
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
