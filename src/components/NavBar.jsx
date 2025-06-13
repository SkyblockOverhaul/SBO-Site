import React from "react";
import cn from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", path: "#home" },
	{ name: "About", path: "#about" },
	{ name: "Projects", path: "#projects" },
	{ name: "Contact", path: "#contact" },
];

const NavBar = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.screenY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled
					? "py-4 bg-background/90 backdrop-blur-md shadow-lg"
					: "py-6"
			)}
		>
			<div className="container flex items-center justify-between px-6">
				<a className="text-2xl font-bold text-primary flex items-center">
					<span className="relative z-10 select-none">
						Sykblock Overhaul
					</span>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-10 mr-10 select-none">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.path}
							className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg"
						>
							{item.name}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden p-2 text-foreground mr-4 z-50"
					arial-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				<div
					className={cn(
						"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col",
						"items-center justify-center transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}
				>
					<div className="flex flex-col space-y-10 text-2xl">
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.path}
								className="text-foreground/80 hover:text-primary transition-colors duration-300"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
