import React, { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { Search, Users, Info } from "lucide-react";
import cn from "@/lib/utils";

const InputSection = () => {
	// State management
	const [username, setUsername] = useState("");
	const [partySize, setPartySize] = useState("");
	const [cookieBuff, setCookieBuff] = useState(true);
	const [necronsLadder, setNecronsLadder] = useState(true);
	const [beacon, setBeacon] = useState("6");
	const [communityShopMf, setCommunityShopMf] = useState("5");
	const [nutcrackerMf, setNutcrackerMf] = useState("5");
	const [showTooltip, setShowTooltip] = useState(false);

	// Dropdown options
	const beaconOptions = [
		{ value: "0", label: "No Beacon" },
		{ value: "1", label: "1 MagicFind" },
		{ value: "2", label: "2 MagicFind" },
		{ value: "3", label: "3 MagicFind" },
		{ value: "4", label: "4 MagicFind" },
		{ value: "5", label: "5 MagicFind" },
		{ value: "6", label: "6 MagicFind" },
	];

	const mfOptions = [
		{ value: "0", label: "0 Magic Find" },
		{ value: "1", label: "1 MagicFind" },
		{ value: "2", label: "2 MagicFind" },
		{ value: "3", label: "3 MagicFind" },
		{ value: "4", label: "4 MagicFind" },
		{ value: "5", label: "5 MagicFind" },
	];

	const nutcrackerMfOptions = [
		{ value: "0", label: "No Nutcracker" },
		{ value: "1", label: "1 MagicFind" },
		{ value: "2", label: "2 MagicFind" },
		{ value: "3", label: "3 MagicFind" },
		{ value: "4", label: "4 MagicFind" },
		{ value: "5", label: "5 MagicFind" },
	];

	const handleSearch = () => {
		// Set party size to 1 if empty
		const finalPartySize = partySize === "" ? "1" : partySize;

		console.log({
			username,
			partySize: finalPartySize,
			cookieBuff,
			necronsLadder,
			beacon,
			communityShopMf,
			nutcrackerMf,
		});
	};

	// Check if all required fields are filled
	const isFormValid =
		username.trim() !== "" && beacon && communityShopMf && nutcrackerMf;

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center px-4 mb-8">
			<h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-center select-none">
				<span className="text-primary">Magic</span> Find{" "}
				<span className="text-primary">Calculator</span>
			</h2>
			<div className="container max-w-4xl mx-auto z-10">
				<div className="space-y-6 bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-border/50 shadow-lg">
					{/* Player Information */}
					<div className="space-y-4  select-none">
						<h3 className="text-xl font-semibold text-foreground/90 mb-4">
							Player Information
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Enter Username"
								icon={<Search className="size-5" />}
								iconPosition="left"
							/>
							<div className="relative">
								<Input
									value={partySize}
									onChange={(e) =>
										setPartySize(e.target.value)
									}
									placeholder="Party Size (1-20)"
									type="number"
									min="1"
									max="20"
									icon={<Users className="size-5" />}
									iconPosition="left"
								/>
								<button
									type="button"
									onClick={() => setShowTooltip(!showTooltip)}
									className="absolute right-3 top-1/2 -translate-y-1/2 group"
								>
									<Info className="size-5 text-foreground/60" />
									<div
										className={cn(
											"absolute right-0 top-full mt-2 w-64 p-2",
											"bg-background/95 backdrop-blur-sm",
											"border border-border/50 rounded-lg shadow-lg",
											"text-sm text-foreground/90",
											"transition-all duration-200 z-50",
											"md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible",
											"md:pointer-events-none",
											"md:group-hover:pointer-events-auto",
											showTooltip
												? "opacity-100 visible"
												: "opacity-0 invisible"
										)}
									>
										Party size affects the Magic Find
										calculation. Each additional player in
										your party increases the Magic Find
										bonus.
									</div>
								</button>
							</div>
						</div>
					</div>

					{/* Buffs and Effects */}
					<div className="space-y-4 select-none">
						<h3 className="text-xl font-semibold text-foreground/90 mb-4">
							Buffs & Effects
						</h3>
						<div className="flex flex-wrap gap-6">
							<Checkbox
								checked={cookieBuff}
								onChange={(e) =>
									setCookieBuff(e.target.checked)
								}
								label="Cookie Buff"
							/>
							<Checkbox
								checked={necronsLadder}
								onChange={(e) =>
									setNecronsLadder(e.target.checked)
								}
								label="Necron's Ladder"
							/>
						</div>
					</div>

					{/* Magic Find Sources */}
					<div className="space-y-4  select-none">
						<h3 className="text-xl font-semibold text-foreground/90 mb-4">
							Magic Find Sources
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<Dropdown
								options={beaconOptions}
								value={beacon}
								onChange={setBeacon}
								placeholder="Beacon"
							/>
							<Dropdown
								options={mfOptions}
								value={communityShopMf}
								onChange={setCommunityShopMf}
								placeholder="Community Shop MF"
							/>
							<Dropdown
								options={nutcrackerMfOptions}
								value={nutcrackerMf}
								onChange={setNutcrackerMf}
								placeholder="Nutcracker MF"
							/>
						</div>
					</div>

					{/* Search Button */}
					<div className="pt-4 flex justify-center  select-none">
						<button
							onClick={handleSearch}
							disabled={!isFormValid}
							className={cn(
								"w-full md:w-auto md:min-w-[200px] px-8 py-3",
								"bg-primary text-primary-foreground",
								"rounded-lg font-medium",
								"transition-all duration-200",
								"hover:bg-primary/90 hover:shadow-lg",
								"active:scale-95",
								"focus:outline-none focus:ring-2 focus:ring-primary/50",
								"flex items-center justify-center gap-2",
								!isFormValid &&
									"opacity-50 cursor-not-allowed hover:bg-primary hover:shadow-none"
							)}
						>
							<Search className="size-5" />
							Calculate Magic Find
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InputSection;
