import { Point, type Graphics } from 'pixi.js';

interface PolyLineProps {
	points?: Point[];
	color?: number;
	lineWidth?: number;
}

export default function GraphicPolyLine({
	points = [new Point(0, 0), new Point(100, 100)],
	color = 0xff0000,
	lineWidth = 2,
}: PolyLineProps) {
	const drawLine = (g: Graphics) => {
		if (points.length === 0) return;

		g.setStrokeStyle({ width: lineWidth, color: color });

		// Move to the first point
		g.moveTo(points[0].x, points[0].y);

		// Draw lines to all subsequent points
		for (let i = 1; i < points.length; i++) {
			g.lineTo(points[i].x, points[i].y);
		}

		g.stroke();
	};
	return <pixiGraphics draw={drawLine} cullable={true} />;
}
