import { Point } from 'pixi.js';

interface PixiBitmapTextProps {
	position?: Point;
	fontSize?: number;
	text?: string;
	rotation?: number;
	color?: string;
}

export default function PixiBitmapText({
	position = new Point(100, 100),
	fontSize = 24,
	text = 'Hello, PixiJS with React! (BitmapText)',
	color = 'white',
	rotation = Math.PI / 8,
}: PixiBitmapTextProps) {
	return (
		<pixiBitmapText
			x={position.x}
			y={position.y}
			rotation={rotation}
			text={text}
			style={{ fill: color, fontSize }}
			cullable={true}
		/>
	);
}
