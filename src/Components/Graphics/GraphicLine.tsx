import { Point, type Graphics } from 'pixi.js';
import { useState, useEffect, useRef } from 'react';

interface LineProps {
	point1?: Point;
	point2?: Point;
	color?: number;
	lineWidth?: number;
}

export default function GraphicLine({
	point1 = new Point(0, 0),
	point2 = new Point(100, 100),
	color = 0xff0000,
	lineWidth = 10,
}: LineProps) {
	const [isActive, setIsActive] = useState(true);
	const graphicsRef = useRef<any>(null);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	// Force redraw when isActive changes
	useEffect(() => {
		if (graphicsRef.current) {
			graphicsRef.current.clear();
			graphicsRef.current
				.setStrokeStyle({
					width: isActive ? lineWidth * 10 : lineWidth,
					color: color,
				})
				.moveTo(point1.x, point1.y)
				.lineTo(point2.x, point2.y)
				.stroke();
		}
	}, [isActive, lineWidth, color, point1.x, point1.y, point2.x, point2.y]);

	const drawLine = (g: Graphics) => {
		g.setStrokeStyle({
			width: isActive ? lineWidth * 10 : lineWidth,
			color: color,
		})
			.moveTo(point1.x, point1.y)
			.lineTo(point2.x, point2.y)
			.stroke();
	};

	return (
		<pixiGraphics
			ref={graphicsRef}
			eventMode='static'
			draw={drawLine}
			onClick={handleClick}
			cullable={true}
		/>
	);
}
