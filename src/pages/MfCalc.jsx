import React from "react";
import MeteorBackground from "@/components/global/MeteorBackground";
import StarBackground from "@/components/global/StarBackground";
import NavBar from "@/components/global/NavBar";
import InputSection from "@/components/MfCalc/InputSection";

const MfCalc = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Background Effects */}
			<MeteorBackground />
			<StarBackground />

			{/* Navigation Bar */}
			<NavBar />

			{/* Main Content */}
			<main className="relative z-10 pt-16 md:pt-0">
				<InputSection />
			</main>
		</div>
	);
};

export default MfCalc;
