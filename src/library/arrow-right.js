import { COLORS } from '../utils';

export default {
	id: 'arrow-left',
	paths: [
		{
			d: 'M13.874 19.5l7.501-7.5-7.5-7.5-1.989 1.988 4.106 4.106H2.625v2.813h13.366l-4.105 4.105 1.989 1.988z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M3.25 10.75H16.6a2.17 2.17 0 01-.206.427c-.347.572-1.021.823-1.691.823H3.25v-1.25z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M13.433 4.058a.625.625 0 01.883 0l7.5 7.5a.625.625 0 010 .884l-7.5 7.5a.625.625 0 01-.883 0l-1.989-1.989a.625.625 0 010-.883l3.038-3.038H2.625A.625.625 0 012 13.407v-2.813c0-.345.28-.625.625-.625h11.858L11.444 6.93a.625.625 0 010-.883l1.989-1.989zm.441 1.326L12.77 6.488l3.664 3.664a.625.625 0 01-.442 1.067H3.25v1.563h12.74a.625.625 0 01.443 1.067l-3.663 3.663 1.104 1.104L20.491 12l-6.617-6.616z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
