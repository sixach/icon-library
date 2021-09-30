import { COLORS } from '../utils';

export default {
	id: 'container',
	paths: [
		{
			d: 'M19 8.143L12 6 5 8.143v7.714L12 18l7-2.143V8.143z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M12 10.174L5 8v7.826L12 18v-7.826z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4 15.857a1 1 0 00.707.956l7 2.143a1 1 0 00.585 0l7-2.143a1 1 0 00.708-.956V8.143a1 1 0 00-.707-.957l-7-2.142a1 1 0 00-.586 0l-7 2.142A1 1 0 004 8.143v7.714zm8.5 1.99l6.5-1.99V8.524l-6.5 2.018v7.305zm-1 0v-7.305L5 8.524v7.333l6.5 1.99zM6.08 7.812L12 6l5.92 1.812L12 9.65 6.08 7.812z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
