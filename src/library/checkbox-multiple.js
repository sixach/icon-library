import { COLORS } from '../utils';

export default {
	id: 'checkbox-multiple',
	paths: [
		{
			d: 'M10 5H5v5h5V5zm9 0h-5v5h5V5zM5 14h5v5H5v-5zm14 0h-5v5h5v-5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M6 5H5v5h1V5zm9 0h-1v5h1V5zM5 14h1v5H5v-5zm10 0h-1v5h1v-5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm1 0v5h5V5H5zm8 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zm1 0v5h5V5h-5zm-9 8a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1H5zm0 6v-5h5v5H5zm8-5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5zm1 0v5h5v-5h-5zM9.354 6.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.631.062l-1-.667a.5.5 0 01.554-.832l.66.44 1.71-1.71a.5.5 0 01.707 0zm9 0a.5.5 0 010 .708l-2 2a.5.5 0 01-.631.062l-1-.667a.5.5 0 01.554-.832l.66.44 1.71-1.71a.5.5 0 01.707 0zm-9 9.708a.5.5 0 00-.708-.708l-1.71 1.71-.659-.439a.5.5 0 10-.554.832l1 .667a.5.5 0 00.63-.062l2-2zm9-.708a.5.5 0 010 .708l-2 2a.5.5 0 01-.631.062l-1-.667a.5.5 0 01.554-.832l.66.44 1.71-1.71a.5.5 0 01.707 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
