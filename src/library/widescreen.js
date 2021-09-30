import { COLORS } from '../utils';

export default {
	id: 'widescreen',
	paths: [
		{
			d: 'M3.25 4.25h17.5V15.5H3.25V4.25z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M16.972 4.25L3.25 13.953V15.5h1.193l15.91-11.25h-3.381zM9.136 15.5h9.625l1.989-1.406V7.119c-2.546 1.884-8.511 6.3-11.614 8.381z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d: 'M3.25 3C2.56 3 2 3.56 2 4.25V15.5c0 .69.56 1.25 1.25 1.25h6.875v2.5h-2.5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-2.5v-2.5h6.875c.69 0 1.25-.56 1.25-1.25V4.25C22 3.56 21.44 3 20.75 3H3.25zm10 12.5h7.5V4.25H3.25V15.5h10zm-1.875 1.25h1.25v2.5h-1.25v-2.5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
