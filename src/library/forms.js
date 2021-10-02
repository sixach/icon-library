import { COLORS } from '../utils';

export default {
	id: 'forms',
	paths: [
		{
			d: 'M3.25 3.25h17.5v5H3.25v-5zm0 7.5h17.5v3.75H3.25v-3.75zM5.75 17c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5.75z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M20.75 3.25H3.25V4.5h17.5V3.25zm0 7.5H3.25V12h17.5v-1.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M3.25 2C2.56 2 2 2.56 2 3.25V7c0 .69.56 1.25 1.25 1.25h17.5C21.44 8.25 22 7.69 22 7V3.25C22 2.56 21.44 2 20.75 2H3.25zm0 1.25h17.5V7H3.25V3.25zm0 6.25c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25v-3.75c0-.69-.56-1.25-1.25-1.25H3.25zm0 1.25h17.5v3.75H3.25v-3.75z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
