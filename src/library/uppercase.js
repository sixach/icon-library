import { COLORS } from '../utils';

export default {
	id: 'uppercase',
	paths: [
		{
			d: 'M2.625 2.625h18.75v18.75H2.625V2.625z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M4.625 4.417v15.166H20.75v1.167H3.25V3.25l1.375 1.167z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2.625 2A.625.625 0 002 2.625v18.75c0 .345.28.625.625.625h18.75c.345 0 .625-.28.625-.625V2.625A.625.625 0 0021.375 2H2.625zm.625 18.75V3.25h17.5v17.5H3.25zm1.875-12.5c0-.345.28-.625.625-.625h5c.345 0 .625.28.625.625v.776a.625.625 0 11-1.25 0v-.151h-1.25v6.25h.375a.625.625 0 110 1.25h-2a.625.625 0 110-1.25h.375v-6.25h-1.25v.15a.625.625 0 11-1.25 0V8.25zm7.5 0c0-.345.28-.625.625-.625h5c.345 0 .625.28.625.625v.776a.625.625 0 11-1.25 0v-.151h-1.25v6.25h.375a.625.625 0 110 1.25h-2a.625.625 0 110-1.25h.375v-6.25h-1.25v.15a.625.625 0 11-1.25 0V8.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
