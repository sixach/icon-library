export default {
	id: 'field',
	paths: [
		{
			d: 'M5 9h14v6H5V9z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M5 9h14v1H5V9z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d: 'M4 9a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V9zm1 0v6h14V9H5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: '#1E1E1E',
			},
		},
	],
};
