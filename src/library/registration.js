import { COLORS } from '../utils';

export default {
	id: 'registration',
	paths: [
		{
			d: 'M11 2h12v19H11V2Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M10.5 11.75v7.875l7.875-7.875H10.5Z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M11 1.375a.625.625 0 0 0-.625.625v9.125H1a.625.625 0 1 0 0 1.25h9.375V21.5c0 .345.28.625.625.625h12c.345 0 .625-.28.625-.625V2A.625.625 0 0 0 23 1.375H11Zm5.669 11h-5.044v8.5h10.75V2.625h-10.75v8.5h5.044l-3.573-3.023a.625.625 0 1 1 .808-.954l4.875 4.125a.625.625 0 0 1 0 .954l-4.875 4.125a.625.625 0 1 1-.808-.954l3.573-3.023Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
