import { useMemo } from 'react';
import { Point } from 'pixi.js';
import GraphicCircle from './GraphicCircle';
import GraphicRect from './GraphicRect';
import GraphicLine from './GraphicLine';
import GraphicPolyLine from './GraphicPolyLine';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../consts';

export default function GraphicsTest() {
	const graphics = useMemo(() => {
		const graphicsList = [];

		for (let i = 0; i < 10000; i++) {
			const type = Math.floor(Math.random() * 4); // 0-3 for 4 types
			const x = (Math.random() - 0.5) * SCREEN_WIDTH * 2;
			const y = (Math.random() - 0.5) * SCREEN_HEIGHT * 2;
			const color = Math.floor(Math.random() * 0xffffff);

			switch (type) {
				case 0: // Circle
					graphicsList.push(
						<GraphicCircle
							key={`circle-${i}`}
							center={new Point(x, y)}
							radius={Math.random() * 30 + 5}
							color={color}
						/>
					);
					break;

				case 1: // Rectangle
					graphicsList.push(
						<GraphicRect
							key={`rect-${i}`}
							center={new Point(x, y)}
							width={Math.random() * 60 + 10}
							height={Math.random() * 60 + 10}
							color={color}
						/>
					);
					break;

				case 2: {
					// Line
					const x2 = x + (Math.random() - 0.5) * 100;
					const y2 = y + (Math.random() - 0.5) * 100;
					graphicsList.push(
						<GraphicLine
							key={`line-${i}`}
							point1={new Point(x, y)}
							point2={new Point(x2, y2)}
							color={color}
							lineWidth={Math.random() * 5 + 1}
						/>
					);
					break;
				}

				case 3: {
					// PolyLine
					const points = [];
					const numPoints = Math.floor(Math.random() * 5) + 2; // 2-6 points
					for (let j = 0; j < numPoints; j++) {
						points.push(
							new Point(
								x + (Math.random() - 0.5) * 80,
								y + (Math.random() - 0.5) * 80
							)
						);
					}
					graphicsList.push(
						<GraphicPolyLine
							key={`polyline-${i}`}
							points={points}
							color={color}
							lineWidth={Math.random() * 3 + 1}
						/>
					);
					break;
				}
			}
		}

		return graphicsList;
	}, []);

	return <>{graphics}</>;
}
