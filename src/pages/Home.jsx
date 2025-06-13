import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import MeteorBackground from "@/components/MeteorBackground";
import NavBar from "@/components/NavBar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";

const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme Toggle Button */}
			<ThemeToggle />

			{/* Background Effects */}
			<MeteorBackground />
			<StarBackground />

			{/* Navigation Bar */}
			<NavBar />

			{/* Main Content */}
			<main>
				<HomeSection />
				<AboutSection />
			</main>
			{/* Footer */}
		</div>
	);
};

export default Home;
