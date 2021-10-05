import { COLORS } from '../utils';

export default {
	id: 'arrow-up',
	paths: [
		{
			d: 'M17.739 12l-7.5 7.5-1.989-1.988 4.105-4.105L13.676 12l-1.32-1.406L8.25 6.488 10.238 4.5l7.5 7.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M8.654 17.096l5.524-5.524a1.25 1.25 0 010 1.767l-4.64 4.64-.884-.883z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M9.796 4.058a.625.625 0 01.884 0l7.5 7.5a.625.625 0 010 .884l-7.5 7.5a.625.625 0 01-.883 0l-1.989-1.989a.625.625 0 010-.883l4.098-4.098.913-.972-.912-.97-4.099-4.1a.625.625 0 010-.883l1.989-1.989zm.443 1.326L9.133 6.488l3.664 3.664.013.014 1.32 1.406a.625.625 0 010 .856l-1.32 1.407a.607.607 0 01-.014.014l-3.663 3.663 1.104 1.104L16.855 12l-6.617-6.616z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
