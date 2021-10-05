import { COLORS } from '../utils';

export default {
	id: 'container',
	paths: [
		{
			d: 'M20.75 6.928L12 4.25 3.25 6.928v9.643L12 19.25l8.75-2.679V6.928z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M12 9.468L3.25 6.75v9.782L12 19.25V9.468z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2 16.571c0 .55.359 1.035.884 1.195l8.75 2.68c.238.072.493.072.732 0l8.75-2.68A1.25 1.25 0 0022 16.572V6.928a1.25 1.25 0 00-.884-1.195l-8.75-2.678a1.25 1.25 0 00-.732 0l-8.75 2.678A1.25 1.25 0 002 6.928v9.643zm10.625 2.488l8.125-2.488V7.404l-8.125 2.524v9.13zm-1.25 0V9.928L3.25 7.404v9.167l8.125 2.488zM4.6 6.515L12 4.25l7.4 2.265L12 8.813 4.6 6.515z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
