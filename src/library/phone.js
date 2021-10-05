import { COLORS } from '../utils';

export default {
	id: 'phone',
	paths: [
		{
			d: 'M7.625 3.25h8.75v17.5h-8.75V3.25z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M14.486 3.25L7.625 18.344v2.406h.597l7.954-17.5h-1.69zm-3.918 17.5h4.813l.994-2.188V7.713c-1.273 2.932-4.256 9.8-5.807 13.038z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M6.375 3.25c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v17.5c0 .69-.56 1.25-1.25 1.25h-8.75c-.69 0-1.25-.56-1.25-1.25V3.25zm1.25.625c0-.345.28-.625.625-.625h.625v.375c0 .345.28.625.625.625h5c.345 0 .625-.28.625-.625V3.25h.625c.345 0 .625.28.625.625v16.25c0 .345-.28.625-.625.625h-7.5a.625.625 0 01-.625-.625V3.875z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
