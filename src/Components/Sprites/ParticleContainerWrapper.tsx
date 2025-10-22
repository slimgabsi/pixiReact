/*
import { ParticleContainer, Texture, Assets } from 'pixi.js';
import { extend } from '@pixi/react';
import { useEffect, useMemo, useState } from 'react';

// Extend pixi components to use them as JSX tags
extend({ ParticleContainer });

export function ParticleContainerWrapper() {
	const [texture, setTexture] = useState(Texture.EMPTY);

	// Load texture once
	useEffect(() => {
		if (texture === Texture.EMPTY) {
			Assets.load('https://pixijs.com/assets/bunny.png').then(setTexture);
		}
	}, [texture]);

	// Create 10,000 particles (static positions)
	const particles = useMemo(() => {
		if (texture === Texture.EMPTY) return [];

		return Array.from({ length: 10000 }, (_, i) => (
			<pixiSprite
				key={i}
				texture={texture}
				x={Math.random() * 800}
				y={Math.random() * 600}
				scale={{ x: 0.5, y: 0.5 }}
			/>
		));
	}, [texture]);

	return (
		<pixiParticleContainer
			particlesCount={10000}
			properties={{
				scale: true,
				position: true,
				rotation: false,
				uvs: false,
				alpha: true,
			}}>
			{particles}
		</pixiParticleContainer>
	);
}
*/
