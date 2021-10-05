import { COLORS } from '../utils';

export default {
	id: 'accordion',
	paths: [
		{
			d: 'M20.75 3.25H3.25V4.5h17.5V3.25zm0 16.25H3.25v1.25h17.5V19.5zM3.25 5.75h17.5V7H3.25V5.75zm15 2.5H5.75v10h12.5v-10z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M5.75 8.25h12.5v2.5H5.75z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2 3.25C2 2.56 2.56 2 3.25 2h17.5c.69 0 1.25.56 1.25 1.25V7c0 .69-.56 1.25-1.25 1.25H19.5v10h1.25c.69 0 1.25.56 1.25 1.25v1.25c0 .69-.56 1.25-1.25 1.25H3.25C2.56 22 2 21.44 2 20.75V19.5c0-.69.56-1.25 1.25-1.25H4.5v-10H3.25C2.56 8.25 2 7.69 2 7V3.25zm3.75 15h12.5v-10H5.75v10zm-2.5-15V4.5h17.5V3.25H3.25zm0 3.75V5.75h17.5V7H3.25zm0 13.75V19.5h17.5v1.25H3.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
