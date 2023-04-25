/**
 *  TailwindCSS → Theme → Spacing
 *  @see https://tailwindcss.com/docs/theme
 *  @see https://tailwindcss.com/docs/customizing-spacing
 */

import { generateRemSpacing } from '../../../scripts/utilities/tailwindBuildHelpers';

export default {
	spacing: {
		...generateRemSpacing(1, 0, 20),
		...generateRemSpacing(3, 21, 300)
	}

};
