import { COLORS } from '../utils';

export default {
	id: 'chevron-left',
	paths: [
		{
			d: 'M6.261 12l7.5 7.5 1.989-1.988-4.105-4.105L10.324 12l1.32-1.406 4.106-4.106L13.762 4.5l-7.5 7.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M15.346 17.096l-5.524-5.524a1.25 1.25 0 000 1.767l4.64 4.64.884-.883z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M14.204 4.058a.625.625 0 00-.884 0l-7.5 7.5a.625.625 0 000 .884l7.5 7.5c.244.244.64.244.883 0l1.989-1.989a.625.625 0 000-.883l-4.098-4.098-.913-.972.912-.97 4.099-4.1a.625.625 0 000-.883l-1.989-1.989zm-.443 1.326l1.105 1.104-3.664 3.664a.596.596 0 00-.013.014l-1.32 1.406a.625.625 0 000 .856l1.32 1.407.014.014 3.663 3.663-1.104 1.104L7.144 12l6.617-6.616z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
