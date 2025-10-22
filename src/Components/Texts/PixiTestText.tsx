import { useMemo } from 'react';
import { Point } from 'pixi.js';
import PixiText from './PixiText';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../consts';

export default function PixiTestText() {
	const texts = useMemo(() => {
		const textsList = [];
		for (let i = 0; i < 10000; i++) {
			const x = (Math.random() - 0.5) * SCREEN_WIDTH * 2;
			const y = (Math.random() - 0.5) * SCREEN_HEIGHT * 2;
			const fontSize = Math.random() * 20 + 10; // 10-30
			const colors = [
				'white',
				'red',
				'blue',
				'green',
				'yellow',
				'purple',
				'orange',
			];
			const color = colors[Math.floor(Math.random() * colors.length)];

			textsList.push(
				<PixiText
					key={`text-${i}`}
					position={new Point(x, y)}
					fontSize={fontSize}
					text={`Text ${i}`}
					color={color}
				/>
			);
		}

		return textsList;
	}, []);

	return <>{texts}</>;
}
