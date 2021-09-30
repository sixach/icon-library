export default {
	id: 'add',
	paths: [
		{
			d: 'M12 20a7.5 7.5 0 100-15 7.5 7.5 0 000 15z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M16.5 18.5C9.5 19 6 15 5 9.5c-1 3-.709 5.423 1.5 8 3 3.5 8 3 10 1z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M5 12.5a7 7 0 1114 0 7 7 0 01-14 0zm7-8a8 8 0 100 16 8 8 0 000-16zm.5 4a.5.5 0 00-1 0V12H8a.5.5 0 000 1h3.5v3.5a.5.5 0 001 0V13H16a.5.5 0 000-1h-3.5V8.5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
