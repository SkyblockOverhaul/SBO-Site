import React from "react";
import cn from "@/lib/utils";
import { Code, Globe, GraduationCap, ExternalLink } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";
import DiscordIcon from "@/assets/DiscordIcon";
import GithubIcon from "@/assets/GithubIcon";
import PatreonIcon from "@/assets/PatreonIcon";

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

						<div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 justify-center">
							<a
								href="https://discord.gg/QvM6b9jsJD"
								target="_blank"
								rel="noopener noreferrer"
								className="cosmic-button flex items-center gap-2 text-sm md:text-base py-1.5 md:py-2 px-3 md:px-4 whitespace-nowrap"
							>
								<DiscordIcon />
								Discord
								<ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
							</a>
							<a
								href="https://github.com/SkyblockOverhaul"
								target="_blank"
								rel="noopener noreferrer"
								className="cosmic-button flex items-center gap-2 text-sm md:text-base py-1.5 md:py-2 px-3 md:px-4 whitespace-nowrap"
							>
								<GithubIcon />
								Github
								<ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
							</a>
							<a
								href="https://www.patreon.com/Skyblock_Overhaul"
								target="_blank"
								rel="noopener noreferrer"
								className="cosmic-button flex items-center gap-2 text-sm md:text-base py-1.5 md:py-2 px-3 md:px-4 whitespace-nowrap"
							>
								<PatreonIcon />
								Patreon
								<ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
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
