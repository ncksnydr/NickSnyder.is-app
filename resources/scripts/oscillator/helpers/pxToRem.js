/**
 *  TailwindCSS::Methods::Convert to REM
 */

module.exports = (val) => {
	return `${(parseInt(val, 10) / 16)}rem`;
};
