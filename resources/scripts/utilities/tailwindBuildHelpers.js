/**
 *  TailwindCSS → Build Helpers
 * @see https://tailwindcss.com/docs/customizing-spacing
 */

/**
 * Converts pixel values to REM.
 * @param {number|string} val - The pixel value to be converted.
 * @returns The converted value, including the 'rem' unit extension.
 */

export const pxToRem = (val) => {
	return `${(parseInt(val, 10) / 16)}rem`;
};

/**
 * Builds a custom spacing object, including REM values.
 * @param {number} steps - The number sequence seed.
 * @param {number} start - Where to start counting.
 * @param {number} end - Where to stop counting.
 * @returns An object with a key/value pair of number/REM value.
 */

export const generateRemSpacing = (steps = 3, start = 0, end = 300) => {
	const obj = {};

	for (let i = start; i <= end; i++) {
		if (i % steps === 0) {
			obj[i] = pxToRem(i);
		}
	}

	return obj;
};

// TODO Add documentation.
export const aspectRatioBuilder = (aspectRatioObj) => {
	const obj = {};
	if (typeof aspectRatioObj === 'object') {
		for (const namedRatio in aspectRatioObj) {
			const ratioNums = aspectRatioObj[namedRatio].split(' / ');
			const ratioOne = parseInt(ratioNums[0]);
			const ratioTwo = parseInt(ratioNums[1]);
			if (!(`${ratioOne}:${ratioTwo}` in obj)) {
				obj[`${ratioOne}:${ratioTwo}`] = `${ratioOne} / ${ratioTwo}`;
			}
		}
	}
	return obj;
};
