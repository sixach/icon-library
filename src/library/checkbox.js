import { COLORS } from '../utils';

export default {
	id: 'checkbox',
	paths: [
		{
			d: 'M2.625 5.125h16.25v16.25H2.625V5.125z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M3.708 20.292V5.125H2.625v16.25h16.25v-1.083H3.708z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M21.86 3.018a.625.625 0 00-.97-.786L10.735 14.774l-3.261-3.806a.625.625 0 10-.95.814l3.75 4.375a.625.625 0 00.96-.014L21.862 3.018zM2.629 4.5a.625.625 0 00-.626.625v16.25c0 .345.28.625.626.625h16.25a.625.625 0 00.625-.625L19.5 12a.625.625 0 00-1.25 0l.002 8.75h-15v-15h10.623a.625.625 0 100-1.25H2.627z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
