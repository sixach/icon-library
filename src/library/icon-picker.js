import { COLORS } from '../utils';

export default {
	id: 'icon-picker',
	paths: [
		{
			d: 'M16 6.75v2h1.5v4.5a2.5 2.5 0 10-3.5 3.5H5.25A.75.75 0 014.5 16V5.75H9v1h7z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d:
				'M6.5 8.75V16a.75.75 0 01-.75.75h-.5A.75.75 0 014.5 16V5.75H9v1h7v2H6.5zm5.75 8a2.475 2.475 0 01-.5-1.5 2.5 2.5 0 012.225-2.475A2.5 2.5 0 0014 16.75h-1.75z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4.5 5.25a.5.5 0 00-.5.5V16a1.25 1.25 0 001.25 1.25h8.591c.475.316 1.046.5 1.659.5a2.98 2.98 0 001.738-.555l1.909 1.909a.5.5 0 00.707-.707l-1.909-1.909c.35-.49.555-1.09.555-1.738 0-.613-.184-1.184-.5-1.659V8.75a.5.5 0 00-.5-.5h-1v-1.5a.5.5 0 00-.5-.5H9.5v-.5a.5.5 0 00-.5-.5H4.5zm11 3v-1H9a.5.5 0 01-.5-.5v-.5H5V16a.25.25 0 00.25.25h.5A.25.25 0 006 16V8.75a.5.5 0 01.5-.5h9zm-8.525 8A1.25 1.25 0 007 16V9.25h10v2.901a3 3 0 00-4.099 4.099H6.975zm7.334.107a1.997 1.997 0 01-.809-1.607 2 2 0 11.809 1.607z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
