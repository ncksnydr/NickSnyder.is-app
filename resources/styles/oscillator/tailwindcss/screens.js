/**
 *  TailwindCSS → Theme → Screens
 *  @see https://tailwindcss.com/docs/theme
 */

import { pxToRem } from '../../../scripts/utilities/tailwindBuildHelpers';

export default {
	'sm': pxToRem(640),
	'md': pxToRem(768),
	'lg': pxToRem(1024),
	'xl': pxToRem(1280),
	'2xl': pxToRem(1440),
	'3xl': pxToRem(1536),
	'4xl': pxToRem(1920)
};
