import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text, BitmapText } from 'pixi.js';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from './consts';

import { Viewport } from './Components/Viewport';
import { BunnySprite } from './Components/Sprites/BunnySprite.tsx';

extend({ Sprite, Container, Graphics, Text, BitmapText });

function App() {
	return (
		<div>
			<Application
				backgroundColor={0x1099bb}
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}>
				<Viewport>
					<pixiContainer
						cullable={true}
						x={SCREEN_WIDTH / 2}
						y={SCREEN_HEIGHT / 2}>
						<BunnySprite />
					</pixiContainer>
				</Viewport>
			</Application>
		</div>
	);
}

export default App;
