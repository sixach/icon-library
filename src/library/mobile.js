import { COLORS } from '../utils';

export default {
	id: 'mobile',
	paths: [
		{
			d: 'M8.5 5h7v14h-7V5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M13.989 5L8.5 17.075V19h.477l6.364-14h-1.352zm-3.135 14h3.85l.796-1.75V8.57c-1.018 2.345-3.405 7.84-4.646 10.43z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M7.5 5a1 1 0 011-1h7a1 1 0 011 1v14a1 1 0 01-1 1h-7a1 1 0 01-1-1V5zm1 .5A.5.5 0 019 5h.5v.3a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V5h.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-13z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
