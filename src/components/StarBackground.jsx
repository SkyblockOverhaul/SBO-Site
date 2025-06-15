import React from "react";
import { useTheme } from "@/context/ThemeContext";

const StarBackground = () => {
	const [stars, setStars] = React.useState([]);
	const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
	const { theme } = useTheme();

	React.useEffect(() => {
		generateStars();

		const handleResize = () => {
			generateStars();
		};

		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 100,
				y: (e.clientY / window.innerHeight) * 100,
			});
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("mousemove", handleMouseMove);
		
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
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

	const getStarStyle = (star) => {
		const distance = Math.sqrt(
			Math.pow(star.x - mousePosition.x, 2) + 
			Math.pow(star.y - mousePosition.y, 2)
		);
		
		const isNearMouse = distance < 15;
		let translateX = 0;
		let translateY = 0;

		if (isNearMouse) {
			// Calculate direction away from mouse
			const angle = Math.atan2(star.y - mousePosition.y, star.x - mousePosition.x);
			const force = (15 - distance) / 15; // Stronger effect when closer
			translateX = Math.cos(angle) * force * 10;
			translateY = Math.sin(angle) * force * 10;
		}

		return {
			position: "absolute",
			left: `${star.x}%`,
			top: `${star.y}%`,
			opacity: star.opacity,
			animationDuration: `${star.animationDuration}s`,
			width: `${star.size}px`,
			height: `${star.size}px`,
			transform: `rotate(45deg) translate(${translateX}px, ${translateY}px)`,
			transition: "transform 0.5s ease-out",
		};
	};

	const getStarPartStyle = () => ({
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: theme === "dark" ? "white" : "black",
		boxShadow: theme === "dark"
			? "0 0 4px rgba(255, 255, 255, 0.6)"
			: "0 0 4px rgba(0, 0, 0, 0.6)",
	});

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			{stars.map((star) => (
				<div
					key={star.id}
					className="animate-pulse-subtle"
					style={getStarStyle(star)}
				>
					<div
						style={{
							...getStarPartStyle(),
							transform: "rotate(45deg)",
						}}
					/>
					<div
						style={{
							...getStarPartStyle(),
							transform: "rotate(90deg)",
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default StarBackground;
