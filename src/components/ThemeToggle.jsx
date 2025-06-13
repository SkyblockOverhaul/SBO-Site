import { Moon, Sun } from "lucide-react";
import React from "react";
import cn from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className={cn(
				"fixed max-sm:hidden top-4 right-4 z-50 p-2",
				"rounded-full transition-colors duration-300",
				"hover:bg-background/80"
			)}
		>
			{theme === "dark" ? (
				<Sun className="size-6 text-white" />
			) : (
				<Moon className="size-6 text-black" />
			)}
		</button>
	);
};

export default ThemeToggle;
