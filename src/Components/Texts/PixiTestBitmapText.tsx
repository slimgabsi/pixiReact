import { useMemo } from 'react';
import { Point } from 'pixi.js';
import PixiBitmapText from './PixiBitmapText';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../consts';

export default function PixiTestBitmapText() {
	const bitmapTexts = useMemo(() => {
		const bitmapTextsList = [];

		for (let i = 0; i < 10000; i++) {
			const x = (Math.random() - 0.5) * SCREEN_WIDTH * 2;
			const y = (Math.random() - 0.5) * SCREEN_HEIGHT * 2;
			const fontSize = Math.random() * 20 + 10; // 10-30
			const rotation = Math.random() * Math.PI * 2; // 0 to 2π
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

			bitmapTextsList.push(
				<PixiBitmapText
					key={`bitmap-text-${i}`}
					position={new Point(x, y)}
					fontSize={fontSize}
					text={`Bitmap ${i}`}
					color={color}
					rotation={rotation}
				/>
			);
		}

		return bitmapTextsList;
	}, []);

	return <>{bitmapTexts}</>;
}
