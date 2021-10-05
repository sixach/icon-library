import { COLORS } from '../utils';

export default {
	id: 'radio',
	paths: [
		{
			d: 'M12 22C6.47 22 2 17.53 2 12S6.47 2 12 2s10 4.47 10 10-4.47 10-10 10z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M12 18.25A6.24 6.24 0 015.75 12 6.24 6.24 0 0112 5.75 6.24 6.24 0 0118.25 12 6.24 6.24 0 0112 18.25z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm16.19 6.19A8.757 8.757 0 0020.75 12c0-2.32-.92-4.55-2.56-6.19A8.757 8.757 0 0012 3.25c-2.32 0-4.55.92-6.19 2.56A8.757 8.757 0 003.25 12c0 2.32.92 4.55 2.56 6.19A8.757 8.757 0 0012 20.75c2.32 0 4.55-.92 6.19-2.56z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
