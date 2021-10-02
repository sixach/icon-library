import { COLORS } from '../utils';

export default {
	id: 'underline',
	paths: [
		{
			d: 'M2.625 2.625h18.75v18.75H2.625V2.625z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M4.5 3.875v16.25h16.875v1.25H2.625V2.625L4.5 3.875z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2.625 2A.625.625 0 002 2.625v18.75c0 .345.28.625.625.625h18.75c.345 0 .625-.28.625-.625V2.625A.625.625 0 0021.375 2H2.625zm.625 18.75V3.25h17.5v17.5H3.25zM5.438 4.812a.625.625 0 100 1.25h.937v6c0 3.18 2.303 5.844 5.625 5.844s5.625-2.664 5.625-5.843v-6h.938a.625.625 0 100-1.25h-3.126a.625.625 0 100 1.25h.938v6c0 2.57-1.822 4.593-4.375 4.593s-4.375-2.023-4.375-4.593v-6h.938a.625.625 0 100-1.25H5.437zm-.313 13.75a.625.625 0 100 1.25h13.75a.625.625 0 100-1.25H5.125z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
