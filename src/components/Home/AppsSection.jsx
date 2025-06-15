import React from "react";
import { useNavigate } from "react-router-dom";

const AppsSection = () => {
	const [activeApp, setActiveApp] = React.useState("mfcalc");
	const navigate = useNavigate();

	const handleOpenApp = (appName) => {
		// Navigate to the app's page
		navigate(`/${appName.toLowerCase()}`);
	};

	const apps = {
		mfcalc: {
			name: "MFCalc",
			title: "Magic Find Calculator",
			description:
				"A powerful tool to discover the optimal equipment for your MF setup and identify the upgrades needed to maximize your Magic Find.",
		},
	};

	return (
		<section
			id="apps"
			className="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8"
		>
			<div className="max-w-4xl mx-auto w-full">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 select-none">
					Our<span className="text-primary"> Apps</span>
				</h2>{" "}
				{/* App Selection Buttons */}
				<div className="flex justify-center space-x-4 mb-8">
					<button
						className={`px-4 md:px-6 py-2 rounded-md transition-all duration-300 text-sm md:text-base relative overflow-hidden group ${
							activeApp === "mfcalc"
								? "bg-primary text-white"
								: "bg-card/50 text-foreground/80 hover:bg-card/60"
						}`}
						onClick={() => setActiveApp("mfcalc")}
					>
						<span className="relative z-10">MFCalc</span>
						{activeApp === "mfcalc" && (
							<span className="absolute inset-0 bg-primary/20 rounded-md transition-all duration-300 group-hover:bg-primary/30 select-none"></span>
						)}
					</button>
				</div>
				{/* App Card */}
				<div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-lg border border-border/50">
					<div className="space-y-4 md:space-y-6">
						<div className="flex items-center justify-center mb-4">
							<h3 className="text-xl md:text-2xl font-semibold">
								{apps[activeApp].title}
							</h3>
						</div>
						<p className="text-foreground/80 text-sm md:text-base">
							{apps[activeApp].description}
						</p>
						<div className="flex justify-center mt-4">
							<button
								className="cosmic-button px-6 py-2 text-sm md:text-base"
								onClick={() =>
									handleOpenApp(apps[activeApp].name)
								}
							>
								Open {apps[activeApp].name}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppsSection;
