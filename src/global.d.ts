import { type PixiReactElementProps } from '@pixi/react';
import { type Application } from 'pixi.js';

declare global {
	namespace React {
		namespace JSX {
			interface IntrinsicElements extends PixiElements {
				pixiViewportWrapper: PropsWithChildren<
					PixiReactElementProps<ViewportWrapper>
				> & {
					app: Application;
				};
			}
		}
	}
}
