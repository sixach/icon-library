import { COLORS } from '../utils';

export default {
	id: 'mail',
	paths: [
		{
			d: 'M2.625 5.745h18.75v12.5H2.625v-12.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M2.625 5.745L12 14.308l9.375-8.563-10.313 10.938-7.5-9.063v10.625h-.937v-12.5z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2.625 5.12A.625.625 0 002 5.745v12.5c0 .345.28.625.625.625h18.75c.345 0 .625-.28.625-.625v-12.5a.625.625 0 00-.625-.625H2.625zm.625 2.118v9.488l4.776-4.882L3.25 7.238zm.874 10.382h15.742l-4.764-4.764-2.684 2.416a.625.625 0 01-.852-.014l-2.64-2.546-4.802 4.908zm16.626-.884V7.773l-4.717 4.246 4.717 4.717zm-6.04-5.209l-.006.006-2.69 2.42L4.8 6.995h14.947l-5.035 4.532z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
