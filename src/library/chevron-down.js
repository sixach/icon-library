import { COLORS } from '../utils';

export default {
	id: 'chevron-down',
	paths: [
		{
			d: 'M12 17.739l-7.5-7.5L6.488 8.25l4.105 4.105L12 13.676l1.406-1.32 4.106-4.106 1.988 1.988-7.5 7.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M6.904 8.654l5.524 5.524a1.25 1.25 0 01-1.768 0l-4.64-4.64.884-.884z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M19.942 9.796a.625.625 0 010 .884l-7.5 7.5a.625.625 0 01-.884 0l-7.5-7.5a.625.625 0 010-.883l1.989-1.989a.625.625 0 01.883 0l4.098 4.098.972.913.97-.912 4.1-4.099a.625.625 0 01.883 0l1.989 1.989zm-1.326.443l-1.104-1.105-3.664 3.664a.596.596 0 01-.014.013l-1.406 1.32a.625.625 0 01-.856 0l-1.407-1.32a.607.607 0 01-.014-.014L6.488 9.134l-1.104 1.104L12 16.855l6.616-6.617z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
