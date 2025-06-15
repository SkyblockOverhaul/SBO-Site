import React from "react";
import cn from "@/lib/utils";
import ThemeToggle from "@/components/global/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", path: "/#home" },
	{ name: "About", path: "/#about" },
	{ name: "Projects", path: "/#projects" },
	{ name: "Apps", path: "/#apps" },
	{ name: "Contact", path: "/#contact" },
];

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<nav className="fixed w-full z-40 py-4 bg-card/50 backdrop-blur-md shadow-lg transition-all duration-300">
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
					<ThemeToggle />
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden p-2 text-foreground z-50"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				<div
					className={cn(
						"fixed inset-0 min-h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col",
						"items-center justify-center transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}
				>
					<div className="flex flex-col space-y-10 text-2xl px-6 w-full">
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.path}
								className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center w-full block py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
						<div className="w-full flex justify-center py-2">
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
