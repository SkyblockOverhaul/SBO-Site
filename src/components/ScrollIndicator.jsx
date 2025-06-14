import React from "react";
import cn from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
	return (
		<div
			className={cn(
				"absolute bottom-12 left-1/2 transform -translate-x-1/2",
				"flex flex-col items-center animate-bounce w-full"
			)}
		>
			<span className="text-sm mb-2 select-none">Scroll</span>
			<ArrowDown className="h-5 w-5 text-primary" />
		</div>
	);
};

export default ScrollIndicator;
