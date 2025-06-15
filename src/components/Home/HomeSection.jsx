import React from "react";
import cn from "@/lib/utils";
import ScrollIndicator from "@/components/global/ScrollIndicator";

const HomeSection = () => {
	return (
		<section
			id="home"
			className={cn(
				"relative min-h-[calc(100vh-4rem)]",
				"flex flex-col items-center justify-center",
				"px-4 py-8 md:py-0",
				"mt-16 md:mt-0",
				"overflow-y-auto"
			)}
		>
			<div className="container max-w-4xl mx-auto text-center z-10">
				<div className="space-y-6">
					{/* Main Heading */}
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight select-none">
						<span className="opacity-0 animate-fade-in">We</span>
						<span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
							{" "}
							Are
						</span>
						<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
							{" "}
							SBO
						</span>
					</h1>

					{/* Subheading */}
					<p
						className={cn(
							"text-lg md:text-xl max-2-2xl mx-auto select-none",
							"opacity-0 animate-fade-in-delay-3"
						)}
					>
						We are a project dedicated to enhance your experience on
						Hypixel Skyblock.
					</p>

					{/* Buttons */}
					<div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center">
						<a href="#projects" className="cosmic-button">
							View Projects
						</a>
						<a href="#apps" className="cosmic-button">
							View Apps
						</a>
					</div>
				</div>
			</div>
			<ScrollIndicator />
		</section>
	);
};

export default HomeSection;
