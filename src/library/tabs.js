import { COLORS } from '../utils';

export default {
	id: 'tabs',
	paths: [
		{
			d: 'M5 2a4 4 0 0 0-4 4v16h21a1 1 0 0 0 1-1V9h-9V6a4 4 0 0 0-4-4H5Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M23 9h-4v9H1v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9Z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M.375 6A4.625 4.625 0 0 1 5 1.375h14A4.625 4.625 0 0 1 23.625 6v14A2.625 2.625 0 0 1 21 22.625H2.5A2.125 2.125 0 0 1 .375 20.5V6Zm22 2.564V6A3.375 3.375 0 0 0 19 2.625h-5.838A4.612 4.612 0 0 1 14.625 6v2.564h7.75ZM10 2.625H5A3.375 3.375 0 0 0 1.625 6v14.5c0 .483.392.875.875.875H21c.76 0 1.375-.616 1.375-1.375V9.814h-9V6A3.375 3.375 0 0 0 10 2.625Zm9.631 1.5a.625.625 0 1 0-1.25 0v.756h-.756a.625.625 0 1 0 0 1.25h.756v.756a.625.625 0 1 0 1.25 0V6.13h.756a.625.625 0 1 0 0-1.25h-.756v-.756Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
