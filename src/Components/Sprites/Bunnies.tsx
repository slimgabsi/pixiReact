import { useMemo } from 'react';
import { BunnySprite } from './BunnySprite.tsx';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../consts';

export function Bunnies() {
	// Generate 10000 bunnies with random positions and rotations
	const bunnies = useMemo(() => {
		return Array.from({ length: 10000 }, (_, index) => ({
			id: index,
			x: (Math.random() - 0.5) * SCREEN_WIDTH * 2, // Random x position
			y: (Math.random() - 0.5) * SCREEN_HEIGHT * 2, // Random y position
			rotation: Math.random() * Math.PI * 2, // Random rotation (0 to 2π)
		}));
	}, []);

	return (
		<>
			{bunnies.map(bunny => (
				<BunnySprite
					key={bunny.id}
					x={bunny.x}
					y={bunny.y}
					rotation={bunny.rotation}
				/>
			))}
		</>
	);
}
