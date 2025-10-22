import { GraphicsContext } from 'pixi.js';
import { useMemo } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../consts';

// Create a shared GraphicsContext
const context = new GraphicsContext().circle(0, 0, 5).fill('blue');

export default function GraphicContext() {
	const objects = useMemo(() => {
		const objectsList = [];

		for (let i = 0; i < 10000; i++) {
			const x = (Math.random() - 0.5) * SCREEN_WIDTH * 2;
			const y = (Math.random() - 0.5) * SCREEN_HEIGHT * 2;

			objectsList.push(
				<pixiGraphics
					key={i}
					context={context}
					x={x}
					y={y}
					scale={Math.random() * 1.5 + 0.5}
					draw={() => {}}
				/>
			);
		}

		return objectsList;
	}, []);

	return <>{objects}</>;
}
