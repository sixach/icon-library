/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const check = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<Path
			d="M46 18L25 38l-9-9-4 4 13 13 25-24-4-4z"
		/>
	</SVG>
);

export default check;
