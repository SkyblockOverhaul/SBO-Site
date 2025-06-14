import React from "react";
import cn from "@/lib/utils";
import { Code, Globe, GraduationCap } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";

const DiscordIcon = () => (
	<svg
		className="w-5 h-5"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
	</svg>
);

const GithubIcon = () => (
	<svg
		className="w-5 h-5"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
	</svg>
);

const PatreonIcon = () => (
	<svg
		className="w-5 h-5"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537V.524H5.55v23.013H.003z" />
	</svg>
);

const AboutSection = () => {
	return (
		<section id="about" className="min-h-screen relative flex flex-col">
			<div className="container mx-auto max-w-5xl flex-1 flex flex-col justify-center py-8 md:py-12 pt-20 md:pt-8">
				<h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-center select-none">
					About <span className="text-primary"> Us</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
					<div className="space-y-4 md:space-y-6 bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-border/50 shadow-lg">
						<h3 className="text-xl md:text-2xl font-semibold select-none">
							Passionate Mod & Web App Developers
						</h3>
						<p className="text-foreground/80 text-sm md:text-base select-none">
							We are two students in the IT sector with experience
							in React, Python, JavaScript, and TypeScript. Being
							mostly self-taught, we constantly strive to improve
							our skills and broaden our knowledge.
						</p>

						<p className="text-foreground/80 text-sm md:text-base select-none">
							We're also passionate gamers — especially active in
							Hypixel SkyBlock, where we're developing a mod to
							enhance the gameplay experience. Our love for gaming
							fuels our creativity and inspires us to build tools
							that truly benefit the community.
						</p>

						<p className="text-foreground/80 text-sm md:text-base select-none">
							Our goal is to create high-quality mods and web
							applications that improve the gaming experience.
							We're passionate about what we do and always eager
							to take on new challenges.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center">
							<a
								href="https://discord.gg/QvM6b9jsJD"
								className="cosmic-button flex items-center gap-2 text-sm md:text-base py-1.5 md:py-2"
							>
								<DiscordIcon />
								Discord
							</a>
							<a
								href="https://github.com/SkyblockOverhaul"
								className="cosmic-button flex items-center gap-2 text-sm md:text-base py-1.5 md:py-2"
							>
								<GithubIcon />
								Github
							</a>
							<a
								href="https://www.patreon.com/Skyblock_Overhaul"
								className="cosmic-button flex items-center gap-2 text-sm md:text-base py-1.5 md:py-2"
							>
								<PatreonIcon />
								Patreon
							</a>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 md:gap-6">
						<div className="p-4 md:p-6 card-hover bg-card/30 backdrop-blur-sm border border-border/50 shadow-lg rounded-lg">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="p-2 md:p-3 rounded-full bg-primary/10">
									<Code className="h-5 w-5 md:h-6 md:w-6 text-primary"></Code>
								</div>
								<div className="text-left">
									<h4 className="text-base md:text-lg font-semibold select-none">
										Mod Development
									</h4>
									<p className="text-foreground/80 text-sm md:text-base select-none">
										Creating mods to enhance the Hypixel
										SkyBlock experience.
									</p>
								</div>
							</div>
						</div>
						<div className="p-4 md:p-6 card-hover bg-card/30 backdrop-blur-sm border border-border/50 shadow-lg rounded-lg">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="p-2 md:p-3 rounded-full bg-primary/10">
									<Globe className="h-5 w-5 md:h-6 md:w-6 text-primary"></Globe>
								</div>
								<div className="text-left">
									<h4 className="text-base md:text-lg font-semibold select-none">
										Web Applications
									</h4>
									<p className="text-foreground/80 text-sm md:text-base select-none">
										Building web apps to complement our mods
										and enhance user experience.
									</p>
								</div>
							</div>
						</div>
						<div className="p-4 md:p-6 card-hover bg-card/30 backdrop-blur-sm border border-border/50 shadow-lg rounded-lg">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="p-2 md:p-3 rounded-full bg-primary/10">
									<GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary"></GraduationCap>
								</div>
								<div className="text-left">
									<h4 className="text-base md:text-lg font-semibold select-none">
										Self-Taught Learning
									</h4>
									<p className="text-foreground/80 text-sm md:text-base select-none">
										Constantly improving our skills through
										self-study and practical experience.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
