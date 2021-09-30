export default {
	id: 'chevron-up',
	paths: [
		{
			d: 'M12 8l-6 6 1.59 1.591 3.285-3.284L12 11.25l1.125 1.056 3.284 3.285L18 14.001 12 8z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M7.923 15.268l4.42-4.42a1 1 0 00-1.415 0L7.216 14.56l.707.708z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M18.354 14.354a.5.5 0 000-.707l-6-6a.5.5 0 00-.708 0l-6 6a.5.5 0 000 .707l1.591 1.59a.5.5 0 00.707 0l3.279-3.278.777-.73.777.73 3.279 3.279a.5.5 0 00.707 0l1.59-1.591zM17.293 14l-.884.884-2.93-2.931-.012-.011-1.125-1.056a.5.5 0 00-.684 0l-1.126 1.057-.01.01-2.931 2.931L6.707 14 12 8.707 17.293 14z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
