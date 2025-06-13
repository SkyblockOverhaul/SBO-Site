import React from "react";
import { useTheme } from "@/context/ThemeContext";

const MeteorBackground = () => {
	const [meteors, setMeteors] = React.useState([]);
	const { theme } = useTheme();

	React.useEffect(() => {
		generateMeteors();

		const handleResize = () => {
			generateMeteors();
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const generateMeteors = () => {
		const meteorCount = 8;

		const newMeteors = Array.from({ length: meteorCount }, (_, i) => ({
			id: i,
			size: Math.random() * 2 + 1,
			x: Math.random() * 100,
			y: Math.random() * 40,
			delay: Math.random() * 15,
			animationDuration: Math.random() * 3 + 3,
		}));

		setMeteors(newMeteors);
	};

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			{meteors.map((meteor) => (
				<div
					key={meteor.id}
					className="meteor animate-meteor"
					style={{
						width: `${meteor.size * 15}px`,
						height: `${meteor.size * 3}px`,
						left: `${meteor.x}%`,
						top: `${meteor.y}%`,
						animationDelay: `${meteor.delay}`,
						animationDuration: `${meteor.animationDuration}s`,
						background:
							theme === "dark"
								? "linear-gradient(to right, white, white, transparent)"
								: "linear-gradient(to right, black, black, transparent)",
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

export default MeteorBackground;
