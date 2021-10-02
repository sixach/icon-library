import { COLORS } from '../utils';

export default {
	id: 'share',
	paths: [
		{
			d: 'M18.25 8.875a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zm-12.5 6.25a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zm15.625 3.125a3.125 3.125 0 11-6.25 0 3.125 3.125 0 016.25 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d:
				'M3.562 10.438c.001-.253.033-.505.094-.75a3.125 3.125 0 105.125 3.062 3.125 3.125 0 01-5.219-2.312zM18.25 8.875A3.125 3.125 0 0021.281 6.5a3.125 3.125 0 01-5.125-3.062 3.125 3.125 0 002.094 5.437zm-2.188 7.813c.001-.253.033-.505.094-.75A3.126 3.126 0 1021.281 19a3.125 3.125 0 01-5.218-2.312z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M15.75 5.75a2.5 2.5 0 11.313 1.212.627.627 0 00-.086-.17 2.491 2.491 0 01-.227-1.042zm-1.084 1.107a3.75 3.75 0 11.563 1.116l-5.895 2.92a3.748 3.748 0 010 2.213l5.895 2.922a3.75 3.75 0 11-.563 1.116L8.77 14.221a3.75 3.75 0 110-4.445l5.895-2.92zm-6.729 3.931a2.5 2.5 0 100 2.424.624.624 0 01.086-.17A2.49 2.49 0 008.25 12a2.49 2.49 0 00-.227-1.042.63.63 0 01-.086-.17zm8.04 6.42a2.5 2.5 0 10.086-.17.623.623 0 01-.086.17z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
