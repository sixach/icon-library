import { COLORS } from '../utils';

export default {
	id: 'bookmark',
	paths: [
		{
			d: 'M4.5 2.625v18.56l7.534-4.482 7.466 4.672V2.625h-15z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M4.5 2.625v18.75L12 17V2.625H4.5z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M3.875 2.625c0-.345.28-.625.625-.625h15c.345 0 .625.28.625.625v18.75a.625.625 0 01-.956.53l-7.143-4.47-7.207 4.287a.625.625 0 01-.944-.538V2.625zm1.25.625v16.835l6.59-3.919a.625.625 0 01.65.008l6.51 4.073V3.25H5.125z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
