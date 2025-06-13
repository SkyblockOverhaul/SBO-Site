import React from "react";

const MeteorBackground = () => {
	const [meteors, setMeteors] = React.useState([]);
	React.useEffect(() => {
		generateMeteors();
	}, []);

	const generateMeteors = () => {
		const meteorCount = 8;

		const newMeteors = Array.from({ length: meteorCount }, (_, i) => ({
			id: i,
			size: Math.random() * 2 + 1,
			x: Math.random() * 100,
			y: Math.random() * 20,
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
					}}
				/>
			))}
		</div>
	);
};

export default MeteorBackground;
