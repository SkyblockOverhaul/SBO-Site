import { Moon, Sun } from "lucide-react";
import React from "react";
import cn from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<button
				onClick={toggleTheme}
				className={cn(
					"relative w-14 h-8 rounded-full transition-colors duration-300",
					"flex items-center",
					theme === "dark" ? "bg-primary" : "bg-foreground/50"
				)}
			>
				<div
					className={cn(
						"absolute w-6 h-6 rounded-full transition-transform duration-300",
						"flex items-center justify-center",
						"bg-white shadow-md",
						theme === "dark" ? "translate-x-7" : "translate-x-1"
					)}
				>
					{theme === "dark" ? (
						<Moon className="size-4 text-gray-600" />
					) : (
						<Sun className="size-4 text-blue-600" />
					)}
				</div>
			</button>
		</div>
	);
};

export default ThemeToggle;
