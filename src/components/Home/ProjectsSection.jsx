import React from "react";
import {
	Star,
	GitFork,
	ExternalLink,
	ChevronLeft,
	ChevronRight,
	Code2,
	BookOpen,
} from "lucide-react";

const repos = [
	{ name: "SBO", url: "https://api.github.com/repos/SkyblockOverhaul/SBO" },
	{
		name: "SBOPF",
		url: "https://api.github.com/repos/SkyblockOverhaul/SBOPF",
	},
	{ name: "SBO-Kotlin", url: "https://api.github.com/repos/SkyblockOverhaul/SBO-Kotlin"}
];

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;

const ProjectsSection = () => {
	const [activeProject, setActiveProject] = React.useState("sbo");
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				// Check cache first
				const cachedData = localStorage.getItem("githubData");
				const cacheTimestamp = localStorage.getItem(
					"githubDataTimestamp"
				);

				// If we have valid cached data, use it
				if (cachedData && cacheTimestamp) {
					const timestamp = parseInt(cacheTimestamp);
					if (Date.now() - timestamp < CACHE_DURATION) {
						setData(JSON.parse(cachedData));
						return;
					}
				}

				// If no valid cache, fetch new data
				const results = await Promise.all(
					repos.map(async (repo) => {
						const [repoRes, langRes] = await Promise.all([
							fetch(repo.url).then((res) => res.json()),
							fetch(`${repo.url}/languages`).then((res) =>
								res.json()
							),
						]);

						return {
							name: repo.name,
							stars: repoRes.stargazers_count,
							forks: repoRes.forks_count,
							languages: [
								...Object.keys(langRes),
							],
						};
					})
				);

				const stats = {};
				results.forEach((repo) => {
					stats[repo.name] = {
						stars: repo.stars,
						forks: repo.forks,
						languages: repo.languages,
					};
				});

				// Cache the new data
				localStorage.setItem("githubData", JSON.stringify(stats));
				localStorage.setItem(
					"githubDataTimestamp",
					Date.now().toString()
				);

				setData(stats);
			} catch (err) {
				console.error("Failed to fetch GitHub data:", err);
				// If fetch fails, try to use cached data even if expired
				const cachedData = localStorage.getItem("githubData");
				if (cachedData) {
					setData(JSON.parse(cachedData));
				}
			}
		};

		fetchData();
	}, []);

	const projects = {
		sbo: {
			title: "Skyblock Overhaul (SBO)",
			description:
				"A feature-rich ChatTriggers module for Minecraft 1.8.9 designed primarily for the Diana event.",
			stars: data["SBO"]?.stars || 0,
			forks: data["SBO"]?.forks || 0,
			languages: data["SBO"]?.languages || [],
			features: [
				"Burrow Detection & Guessing for Diana",
				"Diana Stats Tracker (loot, kills, MF)",
				"Party Commands for drops & stats",
				"Kuudra Attribute Value Overlay",
				"Mining Tools (fossil solver, speed alerts)",
				"Bobber & Legion Player Counters",
				"Customizable GUI & HUD Elements",
				"Loot Announcer with Party Integration",
				"Waypoint & Line System for Navigation",
				"Sound & Visual Alert System",
				"Chat Tools & Clipboard Features",
				"Pickup Log & Crown Tracking",
				"Advanced Party Management Tools",
			],

			link: "https://github.com/SkyblockOverhaul/SBO",
		},
		sbopf: {
			title: "SBO Party Finder (SBOPF)",
			description:
				"A sub-module of SBO that adds an in-game party finder for many different aspects of the game.",
			stars: data["SBOPF"]?.stars || 0,
			forks: data["SBOPF"]?.forks || 0,
			languages: data["SBOPF"]?.languages || [],
			features: [
				"In-game Party Finder",
				"Easy Party Management",
				"Seamless SBO Integration",
			],
			link: "https://github.com/SkyblockOverhaul/SBOPF",
		},
		sbokotlin: {
			title: "SBO-Kotlin",
			description:
				"A Kotlin rewrite of the original SBO module, aiming to improve performance, maintainability, and add new features.",
			stars: data["SBO-Kotlin"]?.stars || 0,
			forks: data["SBO-Kotlin"]?.forks || 0,
			languages: data["SBO-Kotlin"]?.languages || [],
			features: [
				"Burrow Detection & Guessing for Diana",
				"Diana Stats Tracker (loot, kills, MF)",
				"Party Commands for drops & stats",
				"Bobber & Legion Player Counters",
				"Customizable GUI & HUD Elements",
				"Loot Announcer with Party Integration",
				"Waypoint & Line System for Navigation",
				"Sound & Visual Alert System",
				"Pickup Log & Crown Tracking",
				"Advanced Party Management Tools",
			],
			link: "https://github.com/SkyblockOverhaul/SBO-Kotlin"
		},
	};

	return (
		<section
			id="projects"
			className="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8"
		>
			<div className="max-w-4xl mx-auto w-full">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 select-none">
					<span className="text-primary">Our</span> Projects
				</h2>

				{/* Navigation Tabs */}
				<div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8 select-none">
					<button
						onClick={() => setActiveProject("sbo")}
						className={`px-4 md:px-6 py-2 rounded-md transition-all duration-300 text-sm md:text-base relative overflow-hidden group ${
							activeProject === "sbo"
								? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
								: "bg-muted hover:bg-muted/80 hover:scale-105 active:scale-95"
						}`}
					>
						<span className="relative z-10">SBO</span>
						{activeProject === "sbo" && (
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse-subtle" />
						)}
					</button>
					<button
						onClick={() => setActiveProject("sbopf")}
						className={`px-4 md:px-6 py-2 rounded-md transition-all duration-300 text-sm md:text-base relative overflow-hidden group ${
							activeProject === "sbopf"
								? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
								: "bg-muted hover:bg-muted/80 hover:scale-105 active:scale-95"
						}`}
					>
						<span className="relative z-10">SBOPF</span>
						{activeProject === "sbopf" && (
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse-subtle" />
						)}
					</button>
					<button
						onClick={() => setActiveProject("sbokotlin")}
						className={`px-4 md:px-6 py-2 rounded-md transition-all duration-300 text-sm md:text-base relative overflow-hidden group ${
							activeProject === "sbokotlin"
								? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
								: "bg-muted hover:bg-muted/80 hover:scale-105 active:scale-95"
						}`}
					>
						<span className="relative z-10">SBO-Kotlin</span>
						{activeProject === "sbokotlin" && (
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse-subtle" />
						)}
					</button>
				</div>

				{/* Project Card */}
				<div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-lg border border-border/50">
					<div className="space-y-4 md:space-y-6">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2 md:gap-3">
								<Code2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
								<h3 className="text-xl md:text-3xl font-semibold select-none">
									{projects[activeProject].title}
								</h3>
							</div>
							<a
								href={projects[activeProject].link}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300"
							>
								<span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors select-none">
									View on GitHub
								</span>
								<ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
							</a>
						</div>

						<div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
							<div className="flex items-center gap-1 bg-muted/50 px-2 md:px-3 py-1 rounded-full select-none">
								<Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
								<span>
									{projects[activeProject].stars} stars
								</span>
							</div>
							<div className="flex items-center gap-1 bg-muted/50 px-2 md:px-3 py-1 rounded-full select-none">
								<GitFork className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
								<span>
									{projects[activeProject].forks} forks
								</span>
							</div>
						</div>

						{/* Language Tags */}
						<div className="flex flex-wrap gap-2">
							{projects[activeProject].languages.map(
								(lang, index) => (
									<span
										key={index}
										className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary select-none"
									>
										{lang}
									</span>
								)
							)}
						</div>

						<div className="bg-muted/30 backdrop-blur-sm rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm border border-border/50">
							<div className="flex items-center gap-2 mb-2 border-b border-border pb-2">
								<div className="flex gap-1.5">
									<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
									<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
									<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
								</div>
								<div className="flex items-center gap-2 ml-2">
									<BookOpen className="h-3 w-3 md:h-4 md:w-4 text-primary" />
									<span className="font-semibold select-none">
										README.md
									</span>
								</div>
							</div>
							<div
								className="max-h-[150px] md:max-h-[200px] overflow-y-auto pr-2 custom-scrollbar overscroll-contain"
								style={{ overscrollBehavior: "contain" }}
							>
								<div className="space-y-4">
									<div>
										<h4 className="font-semibold text-primary mb-2">
											Features:
										</h4>
										<ul className="list-none space-y-1.5">
											{projects[
												activeProject
											].features.map((feature, index) => (
												<li
													key={index}
													className="flex items-center gap-2 text-sm"
												>
													<span className="text-primary">
														•
													</span>
													{feature}
												</li>
											))}
										</ul>
									</div>

									<div>
										<h4 className="font-semibold text-primary mb-2">
											Installation:
										</h4>
										<ol className="list-decimal list-inside space-y-1 text-sm">
											{activeProject === "sbo" ? (
												<>
													<li>
														Install ChatTriggers
													</li>
													<li>
														Run /ct import sbo
														in-game
													</li>
													<li>
														Run /sbo in-game to
														access the settings menu
													</li>
												</>
											) : activeProject === "sbopf" ? (
												<>
													<li>
														Install ChatTriggers
													</li>
													<li>
														Run /ct import sbopf
														in-game or /ct import
														sbo as its included in
														SBO
													</li>

													<li>
														Use /sbopf to access
														party finder
													</li>
												</>
											) : (
												<>
													<li>
														Install Dependencies (Fabric API, Fabric Language Kotlin, Mod Menu)
													</li>
													<li>
														Install SkyblockOverhaul (SBO-Kotlin)
														from Modrinth or git releases
													</li>
													<li>
														launch the game and use /sbo in-game to
														access the settings menu
													</li>
												</>
											)}
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation Arrows */}
					<div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4">
						<button
							onClick={() =>
								setActiveProject(
									activeProject === "sbo" ? "sbopf" : "sbo"
								)
							}
							className="p-1.5 md:p-2 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95 group"
						>
							<ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
						</button>
						<button
							onClick={() =>
								setActiveProject(
									activeProject === "sbo" ? "sbopf" : "sbo"
								)
							}
							className="p-1.5 md:p-2 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95 group"
						>
							<ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
