import { COLORS } from '../utils';

export default {
	id: 'chevron-up',
	paths: [
		{
			d: 'M12 6.261l-7.5 7.5 1.988 1.989 4.105-4.105L12 10.324l1.406 1.32 4.106 4.106 1.988-1.988-7.5-7.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M6.904 15.346l5.524-5.524a1.25 1.25 0 00-1.768 0l-4.64 4.64.884.884z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M19.942 14.204a.625.625 0 000-.884l-7.5-7.5a.625.625 0 00-.884 0l-7.5 7.5a.625.625 0 000 .883l1.989 1.989a.625.625 0 00.883 0l4.098-4.098.972-.913.97.912 4.1 4.099c.244.244.64.244.883 0l1.989-1.989zm-1.326-.443l-1.104 1.105-3.664-3.664a.596.596 0 00-.014-.013l-1.406-1.32a.625.625 0 00-.856 0l-1.407 1.32a.607.607 0 00-.014.014l-3.663 3.663-1.104-1.104L12 7.144l6.616 6.617z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
