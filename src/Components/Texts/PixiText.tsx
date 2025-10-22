import { Point } from 'pixi.js';

interface PixiTextProps {
	position?: Point;
	fontSize?: number;
	text?: string;
	color?: string;
}

export default function PixiText({
	position = new Point(0, 0),
	fontSize = 24,
	text = 'Hello, PixiJS with React! (Text)',
	color = 'white',
}: PixiTextProps) {
	return (
		<pixiText
			x={position.x}
			y={position.y}
			text={text}
			style={{ fill: color, fontSize }}
		/>
	);
}
