import { COLORS } from '../utils';

export default {
	id: 'insert',
	paths: [
		{
			d: 'M3.25 3.25h17.5v17.5H3.25V3.25z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M4.417 19.583V3.25H3.25v17.5h17.5v-1.167H4.417z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M3.25 2C2.56 2 2 2.56 2 3.25v17.5c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25V3.25C22 2.56 21.44 2 20.75 2H3.25zm17.5 1.25H3.25v17.5h17.5V3.25zM12.917 7a.625.625 0 00-1.25 0v4.042H7.625a.625.625 0 100 1.25h4.042v4.041a.625.625 0 101.25 0v-4.041h4.041a.625.625 0 000-1.25h-4.041V7z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
