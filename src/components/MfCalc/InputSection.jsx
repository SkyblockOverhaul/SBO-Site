import React, { useState } from "react";
import Dropdown from "@/components/global/Dropdown";
import Checkbox from "@/components/global/Checkbox";
import Input from "@/components/global/Input";
import { Search, Users, Info } from "lucide-react";
import cn from "@/lib/utils";

const InputSection = () => {
	// State management
	const [showTooltip, setShowTooltip] = useState(false);
	const [form, setForm] = useState({
		username: "",
		partySize: "",
		cookieBuff: true,
		necronsLadder: true,
		beacon: "6",
		communityShopMf: "5",
		nutcrackerMf: "5",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		// Validate party size input
		if (name === "partySize") {
			const numValue = parseInt(value);
			setForm((prev) => ({
				...prev,
				[name]: isNaN(numValue)
					? ""
					: String(Math.max(1, Math.min(20, numValue))),
			}));
			return;
		}

		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	// Dropdown options
	const generateMfOptions = (count, zeroLabel) =>
		Array.from({ length: count + 1 }, (_, i) => ({
			value: String(i),
			label: i === 0 ? zeroLabel : `${i} MagicFind`,
		}));

	const beaconOptions = generateMfOptions(6, "No Beacon");
	const mfOptions = generateMfOptions(5, "0 Magic Find");
	const nutcrackerMfOptions = generateMfOptions(5, "No Nutcracker");

	const handleSearch = () => {
		// Set party size to 0 if empty
		const finalPartySize = form.partySize === "" ? "0" : form.partySize;

		console.log({
			...form,
			partySize: finalPartySize,
		});
	};

	// Check if all required fields are filled
	const isFormValid =
		form.username.trim() !== "" &&
		form.beacon &&
		form.communityShopMf &&
		form.nutcrackerMf;

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
								value={form.username}
								onChange={handleChange}
								placeholder="Enter Username"
								icon={<Search className="size-5" />}
								iconPosition="left"
								id="username"
								name="username"
								autoComplete="username"
							/>
							<div className="relative">
								<Input
									value={form.partySize}
									onChange={handleChange}
									placeholder="Party Size (1-20)"
									type="number"
									icon={<Users className="size-5" />}
									iconPosition="left"
									id="partySize"
									name="partySize"
									autoComplete="off"
								/>
								<button
									type="button"
									onClick={() => setShowTooltip(!showTooltip)}
									className="absolute right-3 top-1/2 -translate-y-1/2 group z-[9999]"
								>
									<Info className="size-5 text-foreground/60" />
									<div
										className={cn(
											"fixed right-4 top-1/2 -translate-y-1/2 mt-2 w-64 p-2",
											"bg-background/95 backdrop-blur-sm",
											"border border-border/50 rounded-lg shadow-lg",
											"text-sm text-foreground/90",
											"transition-all duration-200",
											"z-[9999]",
											"md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible",
											"md:pointer-events-none",
											"md:group-hover:pointer-events-auto",
											showTooltip
												? "opacity-100 visible"
												: "opacity-0 invisible"
										)}
									>
										This is the party size to determine
										Legion/Bobbin Time bonuses.
										<br />
										<br />
										• Legion max party size: 20 players
										<br />
										• Bobbin Time max party size: 10 players
										<br />
										<br />
										Note: You are not included in the party
										size count.
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
								checked={form.cookieBuff}
								onChange={handleChange}
								label="Cookie Buff"
								id="cookieBuff"
								name="cookieBuff"
							/>
							<Checkbox
								checked={form.necronsLadder}
								onChange={handleChange}
								label="Necron's Ladder"
								id="necronsLadder"
								name="necronsLadder"
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
								value={form.beacon}
								onChange={handleChange}
								placeholder="Beacon"
								id="beacon"
								name="beacon"
							/>
							<Dropdown
								options={mfOptions}
								value={form.communityShopMf}
								onChange={handleChange}
								placeholder="Community Shop MF"
								id="communityShopMf"
								name="communityShopMf"
							/>
							<Dropdown
								options={nutcrackerMfOptions}
								value={form.nutcrackerMf}
								onChange={handleChange}
								placeholder="Nutcracker MF"
								id="nutcrackerMf"
								name="nutcrackerMf"
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
