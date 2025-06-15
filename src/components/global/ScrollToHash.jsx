import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
	const location = useLocation();

	React.useEffect(() => {
		// Check if the location has a hash
		if (location.hash) {
			// Use setTimeout to ensure the scroll happens after the DOM updates
			const id = location.hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}
	});
	return null;
};

export default ScrollToHash;
