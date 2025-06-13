import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import MeteorBackground from "@/components/MeteorBackground";

const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme Toggle Button */}
			<ThemeToggle />

			{/* Background Effects */}
			<MeteorBackground />
			<StarBackground />

			{/* Navigation Bar */}

			{/* Main Content */}

			{/* Footer */}
		</div>
	);
};

export default Home;
