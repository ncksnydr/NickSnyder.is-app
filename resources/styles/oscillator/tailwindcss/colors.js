/**
 *  TailwindCSS → Theme → Colors
 *  @see https://tailwindcss.com/docs/customizing-colors
 *  @see https://www.tailwindshades.com
 */

const buildColorObject = (baseHex, colorArr) => {
	const colorObj = { 'DEFAULT': baseHex };
	const colorGradeStep = (colorArr >= 10) ? 50 : 100;

	colorArr.forEach((color, index) => {
		let colorGrade = 50;
		if (index !== 0) {
			colorGrade = index * colorGradeStep;
		}
		colorObj[`${colorGrade}`] = color;
	});

	return colorObj;
};

// TODO Add muted gray colors (50s) to primary, secondary, and tertiary
const customHues = {
	'seagreen': buildColorObject('#2EB7B0', ['#E2F8F7', '#D6F5F3', '#B2ECE9', '#68D9D3', '#3FCFC7', '#2EB7B0', '#238A85', '#175D5A', '#0C312F', '#010404']),
	'violet': buildColorObject('#836ECD', ['#F8F7FC',	'#EBE7F7',	'#D1C9EC',	'#B7ABE2',	'#9D8CD7',	'#836ECD',	'#5F44BF',	'#4A3497',	'#35266D',	'#211743']),
	'flamingo': buildColorObject('#F487B6', ['#FDE4EF', '#FBD2E3', '#F7ACCD', '#F487B6', '#EF5497', '#EB2077', '#C1125D', '#8E0D44', '#5A082C', '#270413']),
	'electric-blue': buildColorObject('#56EEF4', ['#DCFBFD', '#C9FAFB', '#A3F6F9', '#7CF2F6', '#56EEF4', '#21E9F1', '#0DC5CC', '#0A9298', '#066063', '#032D2E']),
	'link': buildColorObject('#1C5D99', ['#C9E0F5', '#B8D6F2', '#95C2EC', '#73AEE5', '#509BDF', '#2E87D9', '#2272BB', '#1C5D99', '#13406A', '#0B233A']),
	'info': buildColorObject('#3772FF', ['#C6D7FF', '#B1C8FF', '#89ACFF', '#608FFF', '#3772FF', '#004BFE', '#003AC6', '#002A8E', '#001956', '#00091E']),
	'warning': buildColorObject('#E8EC67', ['#FBFCE6', '#F8FAD4', '#F3F5B0', '#EDF18B', '#E8EC67', '#E0E635', '#C4CA19', '#949813', '#63660D', '#333407']),
	'success': buildColorObject('#06D6A0', ['#BFFDED', '#ABFDE8', '#84FCDC', '#5CFAD1', '#34F9C6', '#0DF8BB', '#06D6A0', '#049F77', '#03694E', '#013226']),
	'danger': buildColorObject('#E15554', ['#FCF0F0', '#F9DFDF', '#F3BDBC', '#ED9A99', '#E77877', '#E15554', '#D72726', '#A71E1D', '#781615', '#480D0D']),
	'grape': buildColorObject('#6E2594', ['#E7CFF3',	'#DEBFEF',	'#CE9EE7',	'#BD7EDF',	'#AD5DD6',	'#9C3CCE',	'#862DB5',	'#6E2594',	'#4D1A67',	'#2B0F3A'])
};

const customGrays = {
	'cool': buildColorObject('#506E8A', ['#D4DEE6', '#C7D3DF', '#ADBFD0', '#94ABC1', '#7A97B2', '#6083A3', '#506E8A', '#3B5266', '#273543', '#12191F']),
	'neutral': buildColorObject('#6B7280', ['#FAFAFB', '#EFEFF1', '#D8DADF', '#C2C5CC', '#ACB0BA', '#969BA7', '#7F8694', '#6B7280', '#515761', '#383C43']),
	'warm': buildColorObject('#7F7979', ['#F8F7F7', '#E6E5E5', '#D7D5D5', '#CFCCCC', '#C1BEBE', '#B2AEAE', '#9B9797', '#7D7777', '#5E5A5A', '#464242'])
};

export default {
	blue: customHues.link,
	cyan: customHues.electricblue,
	danger: customHues.danger,
	emerald: customHues.success,
	gray: customGrays.neutral,
	green: customHues.success,
	info: customHues.info,
	link: customHues.link,
	pink: customHues.flamingo,
	primary: customHues.seagreen,
	purple: customHues.grape,
	red: customHues.danger,
	secondary: customHues.violet,
	sky: customHues.info,
	slate: customGrays.cool,
	stone: customGrays.warm,
	success: customHues.success,
	teal: customHues.seagreen,
	tertiary: customHues.flamingo,
	violet: customHues.violet,
	warning: customHues.warning,
	yellow: customHues.warning
};
