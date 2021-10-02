import { COLORS } from '../utils';

export default {
	id: 'texarea',
	paths: [
		{
			d: 'M3.25 5.75h17.5v12.5H3.25V5.75z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M3.25 7h17.5V5.75H3.25V7z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d: 'M2 5.75c0-.69.56-1.25 1.25-1.25h17.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.25c-.69 0-1.25-.56-1.25-1.25V5.75zm1.25 0v12.5h17.5V5.75H3.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
