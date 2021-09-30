export default {
	id: 'divider',
	paths: [
		{
			d: 'M4.5 19.5V14c1.667.667 4.601.416 7.5-2 2.5-2.083 4-3 7.5-3v10.5h-15z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M4.5 19v-2.5c1.667.667 4.601.416 7.5-2 3-2.5 4-3 7.5-3V19h-15z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M15.175 8.76C16.381 8.236 17.704 8 19.5 8a.5.5 0 01.5.5V19a.5.5 0 01-.5.5h-15A.5.5 0 014 19v-5.5a.5.5 0 01.686-.464c1.458.583 4.202.407 6.994-1.92 1.254-1.045 2.3-1.836 3.495-2.356zm.4.917c-1.055.46-2.009 1.169-3.255 2.207-2.664 2.22-5.422 2.728-7.32 2.293V18.5h14V9.007c-1.44.04-2.486.262-3.425.67z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
