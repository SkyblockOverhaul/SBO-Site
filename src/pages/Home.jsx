import React from "react";
import { Router } from "react-router-dom";
import StarBackground from "@/components/StarBackground";
import MeteorBackground from "@/components/MeteorBackground";
import NavBar from "@/components/NavBar";
import HomeSection from "@/components/Home/HomeSection";
import AboutSection from "@/components/Home/AboutSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import AppsSection from "@/components/Home/AppsSection";
import ContactSection from "@/components/Home/ContactSection";

const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Background Effects */}
			<MeteorBackground />
			<StarBackground />

			{/* Navigation Bar */}
			<NavBar />

			{/* Main Content */}
			<main
				className="h-screen md:snap-y md:snap-mandatory overflow-y-scroll relative z-10 scroll-smooth"
				style={{ scrollBehavior: "smooth" }}
			>
				<div className="min-h-screen md:h-screen md:snap-start">
					<HomeSection />
				</div>
				<div className="min-h-screen md:h-screen md:snap-start">
					<AboutSection />
				</div>
				<div className="min-h-screen md:h-screen md:snap-start">
					<ProjectsSection />
				</div>
				<div className="min-h-screen md:h-screen md:snap-start">
					<AppsSection />
				</div>
				<div className="min-h-screen md:h-screen md:snap-start">
					<ContactSection />
				</div>
			</main>
			{/* Footer */}
		</div>
	);
};

export default Home;
