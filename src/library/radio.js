import { COLORS } from '../utils';

export default {
	id: 'radio',
	paths: [
		{
			d: 'M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M12 17c-2.77 0-5-2.23-5-5s2.23-5 5-5 5 2.23 5 5-2.23 5-5 5z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M12 20c-2.12 0-4.16-.84-5.66-2.34A8.008 8.008 0 014 12c0-2.12.84-4.16 2.34-5.66S9.88 4 12 4s4.16.84 5.66 2.34S20 9.88 20 12s-.84 4.16-2.34 5.66A8.008 8.008 0 0112 20zm4.95-3.05a7.001 7.001 0 10-9.902-9.9 7.001 7.001 0 009.902 9.9z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
