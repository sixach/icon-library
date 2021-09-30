export default {
	id: 'checkbox',
	paths: [
		{
			d: 'M5 6h13v13H5V6z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M5.867 18.133V6H5v13h13v-.867H5.867z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: '.25',
			},
		},
		{
			d:
				'M20.389 4.315a.5.5 0 10-.778-.63L11.49 13.72l-2.61-3.044a.5.5 0 00-.759.65l3 3.5a.5.5 0 00.769-.01l8.5-10.5zM5.002 5.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5l-.002-7.5a.5.5 0 10-1 0l.002 7h-12v-12H14a.5.5 0 100-1H5.002z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: '#1E1E1E',
			},
		},
	],
};
