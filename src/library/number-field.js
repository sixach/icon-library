import { COLORS } from '../utils';

export default {
	id: 'number-field',
	paths: [
		{
			d: 'M1.5 7.5h21v9h-21v-9Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M22.5 7.5h-21V9h14v7.5h1.4V9h5.6V7.5Z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M14.375 3c0-.345.28-.625.625-.625a3 3 0 0 1 2.01.757c.086.078.166.16.24.246a2.78 2.78 0 0 1 .24-.246 3.001 3.001 0 0 1 2.01-.757.625.625 0 1 1 0 1.25c-.45 0-.87.162-1.172.435-.299.27-.453.622-.453.975V6.25H22.5c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-4.625v1.215c0 .176.038.352.114.519.077.166.19.322.34.456.148.135.327.244.53.32.201.075.42.115.641.115a.625.625 0 1 1 0 1.25c-.37 0-.736-.066-1.08-.195a2.904 2.904 0 0 1-1.17-.808 2.904 2.904 0 0 1-1.17.808 3.083 3.083 0 0 1-1.08.195.625.625 0 1 1 0-1.25c.222 0 .44-.04.642-.115.202-.076.381-.185.53-.32a1.41 1.41 0 0 0 .338-.456c.077-.167.115-.343.115-.519V17.75H1.5c-.69 0-1.25-.56-1.25-1.25v-9c0-.69.56-1.25 1.25-1.25h15.125V5.035c0-.353-.154-.705-.453-.975A1.752 1.752 0 0 0 15 3.625.625.625 0 0 1 14.375 3ZM1.5 7.5h15.125v9H1.5v-9Zm16.375 0v9H22.5v-9h-4.625Zm-5.94 5.428c.043-.252.065-.552.065-.902 0-.645-.082-1.143-.246-1.495a1.753 1.753 0 0 0-.35-.508 1.336 1.336 0 0 0-.475-.314 1.615 1.615 0 0 0-.605-.109c-.337 0-.627.081-.87.243a1.5 1.5 0 0 0-.554.701 2.849 2.849 0 0 0-.162.666 6.614 6.614 0 0 0-.052.87c0 .25.015.482.046.698.032.213.082.408.149.585.131.325.326.578.585.762a1.5 1.5 0 0 0 .884.275c.284 0 .543-.068.776-.205a1.58 1.58 0 0 0 .57-.582c.116-.205.196-.433.24-.685Zm-.893-1.923c.048.247.071.566.071.957 0 .411-.022.744-.068.998-.045.254-.124.45-.236.586a.57.57 0 0 1-.466.205.571.571 0 0 1-.456-.196c-.112-.132-.192-.326-.24-.582a5.579 5.579 0 0 1-.07-.986c0-.59.054-1.028.164-1.312.112-.283.31-.425.596-.425.198 0 .354.064.466.192.112.126.192.313.24.563Zm-3.44 2.566H5.913c.054-.08.107-.15.159-.208.12-.145.343-.348.666-.61.326-.263.558-.455.696-.577.138-.124.273-.293.405-.509a1.354 1.354 0 0 0 .103-1.21 1.274 1.274 0 0 0-.663-.697 2.093 2.093 0 0 0-.845-.153c-.274 0-.513.04-.718.121a1.486 1.486 0 0 0-.505.314c-.132.13-.23.275-.298.435-.067.16-.1.313-.1.46a.39.39 0 0 0 .107.289c.07.07.16.105.268.105.123 0 .216-.038.279-.115.064-.077.121-.187.171-.33.052-.142.089-.23.11-.262a.759.759 0 0 1 .667-.368c.133 0 .256.03.369.09.114.06.203.144.268.252.067.107.1.229.1.365a.902.902 0 0 1-.093.388c-.06.13-.15.258-.269.383a2.834 2.834 0 0 1-.44.372 5.01 5.01 0 0 0-.495.416c-.23.209-.49.46-.777.755a1.089 1.089 0 0 0-.19.3.777.777 0 0 0-.088.305c0 .12.045.224.136.313.09.088.217.131.378.131h2.382c.143 0 .248-.036.317-.108a.365.365 0 0 0 .107-.266.333.333 0 0 0-.133-.278c-.088-.069-.216-.103-.385-.103Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};