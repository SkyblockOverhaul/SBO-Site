import React from "react";
import { Check } from "lucide-react";
import cn from "@/lib/utils";

const Checkbox = ({
	checked,
	onChange,
	label,
	className,
	disabled = false,
	name,
}) => {
	const handleChange = (e) => {
		onChange({
			target: {
				name: name,
				type: "checkbox",
				checked: e.target.checked,
			},
		});
	};

	return (
		<label
			className={cn(
				"relative flex items-center gap-2 cursor-pointer select-none",
				className
			)}
		>
			<input
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				disabled={disabled}
				className="sr-only"
				name={name}
			/>
			<div
				className={cn(
					"size-5 rounded border-2",
					"flex items-center justify-center",
					"transition-colors duration-200",
					checked
						? "bg-primary border-primary"
						: "bg-background/80 border-border/80 hover:bg-background/90",
					!disabled &&
						"focus:ring-2 focus:ring-primary/50 focus:outline-none"
				)}
			>
				<Check
					className={cn(
						"size-4 text-primary-foreground",
						"transition-all duration-200",
						checked ? "opacity-100 scale-100" : "opacity-0 scale-0"
					)}
				/>
			</div>
			{label && (
				<span
					className={cn(
						"text-foreground/90",
						"transition-colors duration-200",
						!disabled && "hover:text-foreground"
					)}
				>
					{label}
				</span>
			)}
		</label>
	);
};

export default Checkbox;
