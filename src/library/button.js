import { COLORS } from '../utils';

export default {
	id: 'button',
	paths: [
		{
			d: 'M20.125 8.25h-17.5v6.25h.625v1.875c0 .345.28.625.625.625h17.5c.345 0 .625-.28.625-.625v-5a.625.625 0 00-.625-.625h-1.25v-2.5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M3.25 14.5v1.875c0 .345.28.625.625.625h17.5c.345 0 .625-.28.625-.625v-5a.625.625 0 00-.625-.625h-1.25v3.75H3.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2 8.25c0-.345.28-.625.625-.625h17.5c.345 0 .625.28.625.625v6.25c0 .345-.28.625-.625.625h-17.5A.625.625 0 012 14.5V8.25zm1.25.625v5H19.5v-5H3.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
