import { COLORS } from '../utils';

export default {
	id: 'field',
	paths: [
		{
			d: 'M3.25 8.25h17.5v7.5H3.25v-7.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M3.25 8.25h17.5V9.5H3.25V8.25z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d: 'M2 8.25C2 7.56 2.56 7 3.25 7h17.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25H3.25C2.56 17 2 16.44 2 15.75v-7.5zm1.25 0v7.5h17.5v-7.5H3.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
