import { Assets, Texture } from 'pixi.js';
import { useEffect, useState } from 'react';

interface BunnySpriteProps {
	x?: number;
	y?: number;
	rotation?: number;
}

export function BunnySprite({ x = 0, y = 0, rotation = 0 }: BunnySpriteProps) {
	const [texture, setTexture] = useState(Texture.EMPTY);
	const [isActive, setIsActive] = useState(false);

	// Preload the sprite if it hasn't been loaded yet
	useEffect(() => {
		if (texture === Texture.EMPTY) {
			Assets.load('https://pixijs.com/assets/bunny.png').then(result => {
				setTexture(result);
			});
		}
	}, [texture]);

	return (
		<pixiSprite
			anchor={0.5}
			eventMode='static'
			onClick={() => setIsActive(!isActive)}
			scale={isActive ? 1 : 1.5}
			texture={texture}
			x={x}
			y={y}
			rotation={rotation}
			cullable={true}
		/>
	);
}
