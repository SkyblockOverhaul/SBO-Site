import React from "react";
import { useTheme } from "@/context/ThemeContext";

const StarBackground = () => {
	const [stars, setStars] = React.useState([]);
	const { theme } = useTheme();

	React.useEffect(() => {
		generateStars();

		const handleResize = () => {
			generateStars();
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const generateStars = () => {
		const starCount = Math.floor(
			(window.innerWidth * window.innerHeight) / 10000
		);

		const newStars = Array.from({ length: starCount }, (_, i) => ({
			id: i,
			size: Math.random() * 3 + 1,
			x: Math.random() * 100,
			y: Math.random() * 100,
			opacity: Math.random() * 0.5 + 0.5,
			animationDuration: Math.random() * 4 + 2,
		}));

		setStars(newStars);
	};

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			{stars.map((star) => (
				<div
					key={star.id}
					className="star animate-pulse-subtle"
					style={{
						width: `${star.size}px`,
						height: `${star.size}px`,
						left: `${star.x}%`,
						top: `${star.y}%`,
						opacity: star.opacity,
						animationDuration: `${star.animationDuration}s`,
						backgroundColor: theme === "dark" ? "white" : "black",
						boxShadow:
							theme === "dark"
								? "0 0 10px rgba(255, 255, 255, 0.4)"
								: "0 0 10px rgba(0, 0, 0, 0.4)",
					}}
				/>
			))}
		</div>
	);
};

export default StarBackground;
