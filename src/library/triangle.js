export default {
	id: 'triangle',
	paths: [
		{
			d: 'M11.5 18L4.139 6H18.86L11.5 18z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M5 6.5h1.5l5.95 9-.95 1.6L5 6.5z',
			attrs: {
				fill: '#FFF',
				opacity: '.25',
			},
		},
		{
			d:
				'M11.5 18.5a.5.5 0 01-.426-.239l-7.361-12a.5.5 0 01.426-.761H18.86a.5.5 0 01.426.761l-7.36 12a.5.5 0 01-.427.239zm6.468-12H5.032L11.5 17.044 17.968 6.5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: '#1E1E1E',
			},
		},
	],
};
