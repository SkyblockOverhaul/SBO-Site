import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import cn from "@/lib/utils";

const Dropdown = ({ options, value, onChange, placeholder }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuPosition, setMenuPosition] = useState("bottom");
	const dropdownRef = useRef(null);
	const buttonRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (isOpen && buttonRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const spaceBelow = window.innerHeight - buttonRect.bottom;
			const spaceAbove = buttonRect.top;
			const menuHeight = 300; // Approximate max height of the menu

			setMenuPosition(spaceBelow < menuHeight && spaceAbove > spaceBelow ? "top" : "bottom");
		}
	}, [isOpen]);

	const selectedOption = options.find((option) => option.value === value);

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				ref={buttonRef}
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"w-full px-4 py-2.5",
					"bg-background/80 backdrop-blur-sm",
					"border border-border/80",
					"rounded-lg",
					"text-left",
					"flex items-center justify-between",
					"transition-colors duration-200",
					"hover:bg-background/90",
					"focus:outline-none focus:ring-2 focus:ring-primary/50",
					"text-foreground/90"
				)}
			>
				<div className="flex items-center gap-2">
					<span className="text-muted-foreground">{placeholder}:</span>
					<span className="font-medium">
						{selectedOption ? selectedOption.value : "0"}
					</span>
				</div>
				<ChevronDown
					className={cn(
						"size-5 transition-transform duration-200",
						isOpen && "transform rotate-180"
					)}
				/>
			</button>

			<div
				className={cn(
					"absolute z-50 w-full",
					menuPosition === "bottom" ? "top-full mt-1" : "bottom-full mb-1",
					"bg-background/95 backdrop-blur-sm",
					"border border-border/80",
					"rounded-lg shadow-lg",
					"max-h-60 overflow-auto",
					"py-1",
					"transition-all duration-200",
					"transform-gpu",
					isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
				)}
			>
				<div className="px-2 py-1.5 text-sm text-muted-foreground border-b border-border/80">
					{placeholder}
				</div>
				{options.map((option) => (
					<button
						key={option.value}
						onClick={() => {
							onChange(option.value);
							setIsOpen(false);
						}}
						className={cn(
							"w-full px-4 py-2",
							"text-left",
							"hover:bg-primary/10",
							"focus:outline-none focus:bg-primary/10",
							"transition-colors duration-200",
							value === option.value &&
								"bg-primary/20 text-primary"
						)}
					>
						{option.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default Dropdown; 