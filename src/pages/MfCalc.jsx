import React from "react";
import MeteorBackground from "@/components/MeteorBackground";
import StarBackground from "@/components/StarBackground";
import NavBar from "@/components/NavBar";

const MfCalc = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Background Effects */}
			<MeteorBackground />
			<StarBackground />

			{/* Navigation Bar */}
			<NavBar />

			{/* Main Content */}
		</div>
	);
};

export default MfCalc;
