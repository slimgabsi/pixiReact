import { Point, type Graphics } from 'pixi.js';
import { useState } from 'react';

interface RectProps {
	center?: Point;
	width?: number;
	height?: number;
	color?: number;
	onClick?: () => void;
}

export default function GraphicRect({
	center = new Point(0, 0),
	width = 100,
	height = 100,
	color = 0xff0000,
	onClick,
}: RectProps) {
	const [isActive, setIsActive] = useState(true);

	const drawRect = (g: Graphics) => {
		g.rect(center.x, center.y, width, height).fill(color);
	};

	const handleClick = () => {
		setIsActive(!isActive);
		onClick?.();
	};

	return (
		<pixiGraphics
			eventMode='static'
			draw={drawRect}
			onClick={handleClick}
			scale={isActive ? 1 : 1.5}
			pivot={new Point(center.x + width / 2, center.y + height / 2)}
			rotation={isActive ? 0 : Math.PI / 4}
			cullable={true}
		/>
	);
}
