import { Point, type Graphics } from 'pixi.js';
import { useState } from 'react';

interface CircleProps {
	center?: Point;
	radius?: number;
	color?: number;
}

export default function GraphicCircle({
	center = new Point(0, 0),
	radius = 20,
	color = 0xff0000,
}: CircleProps) {
	const [isActive, setIsActive] = useState(true);
	const drawCircle = (g: Graphics) => {
		g.circle(center.x, center.y, radius).fill(color);
	};

	const handleClick = () => {
		setIsActive(!isActive);
	};
	return (
		<pixiGraphics
			eventMode='static'
			draw={drawCircle}
			onClick={handleClick}
			scale={isActive ? 1 : 1.5}
			pivot={new Point(center.x, center.y)}
			cullable={true}
		/>
	);
}
