import { COLORS } from '../utils';

export default {
	id: 'filter',
	paths: [
		{
			d:
				'M21.375 4.75C21.187 3.562 17.062 2.625 12 2.625c-5.063 0-9.188.938-9.375 2.125v2.875c0 .375.281.781.625 1.094.344.312 5.906 5.312 6.313 5.75.406.437.562.719.562 1.156v4.906c0 .563.344 1.094 1.25.688.906-.407 2.5-1.688 2.5-2.438v-3.125c0-.562.063-.969.281-1.187l6.594-5.906a1.532 1.532 0 00.625-1.094V4.75z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d:
				'M12 2.625c-5.188 0-9.375.969-9.375 2.188v2.875c0 .375.281.78.625 1.093.344.313 5.906 5.313 6.313 5.75.406.438.562.75.562 1.188v4.906c0 .563.344 1.094 1.25.688l.625-.344v-5.782L7 9.25V6.656c1.656.234 3.327.35 5 .344 5.188 0 9.375-.969 9.375-2.188 0-1.218-4.188-2.187-9.375-2.187z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M3.285 4.784a.403.403 0 00-.023.029.403.403 0 00.023.028c.06.069.177.165.379.276.402.222 1.025.441 1.849.634 1.638.382 3.931.624 6.487.624s4.85-.242 6.487-.624c.824-.193 1.447-.412 1.85-.634a1.43 1.43 0 00.378-.276.4.4 0 00.023-.029.398.398 0 00-.023-.028 1.43 1.43 0 00-.379-.276c-.402-.222-1.025-.441-1.849-.634C16.85 3.492 14.556 3.25 12 3.25s-4.85.242-6.487.624c-.824.193-1.447.412-1.85.634a1.433 1.433 0 00-.378.276zM12 2c-2.622 0-5.016.247-6.771.657-.873.204-1.623.455-2.17.757-.272.15-.524.33-.713.546a1.366 1.366 0 00-.322.617A.625.625 0 002 4.75v2.875c0 .34.125.648.274.894.15.25.35.475.556.662l.534.482c.597.538 1.599 1.441 2.6 2.347 1.503 1.362 2.962 2.691 3.14 2.884.191.205.283.333.333.432a.612.612 0 01.063.299v4.906c0 .377.112.884.53 1.204.457.349 1.04.305 1.6.054.528-.236 1.207-.7 1.755-1.198.276-.25.539-.528.738-.81.185-.262.377-.615.377-1v-3.125c0-.265.015-.456.044-.59.022-.1.045-.14.053-.153l6.548-5.865A2.155 2.155 0 0022 7.468V4.75a.626.626 0 00-.024-.173 1.365 1.365 0 00-.322-.617 2.638 2.638 0 00-.714-.546c-.547-.302-1.296-.553-2.169-.757C17.016 2.247 14.622 2 12 2zm8.75 4.31c-.525.258-1.203.477-1.979.658-1.755.41-4.149.657-6.771.657s-5.016-.247-6.771-.657c-.776-.181-1.454-.4-1.979-.658v1.315c0 .035.016.118.094.247.075.125.189.259.326.384l.531.479.001.001c.595.536 1.593 1.436 2.6 2.348 1.465 1.326 2.991 2.715 3.219 2.96.215.232.404.463.534.723.138.277.195.554.195.858v4.906a.528.528 0 00.038.205h.015a.808.808 0 00.316-.088c.38-.17.95-.55 1.426-.982a3.92 3.92 0 00.556-.605.866.866 0 00.148-.278c0-.003.001-.003.001-.002v-3.125c0-.297.016-.59.073-.854.056-.263.165-.549.391-.775a.615.615 0 01.025-.024l6.594-5.906a.619.619 0 01.05-.04.905.905 0 00.367-.622V6.31z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
