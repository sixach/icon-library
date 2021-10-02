import { COLORS } from '../utils';

export default {
	id: 'triangle',
	paths: [
		{
			d: 'M11.995 21L2.793 6h18.403l-9.201 15z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M3.87 6.625h1.875l7.437 11.25-1.187 2L3.87 6.625z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M11.995 21.625a.625.625 0 01-.533-.298l-9.201-15a.625.625 0 01.532-.952h18.404a.625.625 0 01.532.952l-9.201 15a.625.625 0 01-.533.298zm0-1.82l8.085-13.18H3.91l8.085 13.18z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
