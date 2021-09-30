import { COLORS } from '../utils';

export default {
	id: 'accordion',
	paths: [
		{
			d: 'M19 5H5v1h14V5zm0 13H5v1h14v-1zM5 7h14v1H5V7zm12 2H7v8h10V9z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M7 9h10v2H7z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4 5a1 1 0 011-1h14a1 1 0 011 1v3a1 1 0 01-1 1h-1v8h1a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1h1V9H5a1 1 0 01-1-1V5zm3 12h10V9H7v8zM6 5H5v1h14V5H6zM5 7h14v1H5V7zm0 11h14v1H5v-1z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
