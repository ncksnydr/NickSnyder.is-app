// TODO Add documentation header.
// TODO Organize variables.

const fs = require("fs");
const glob = require("glob");
const _ = require("lodash");


const dotfilesPath = process.cwd();
const lintersPath = `${dotfilesPath}/resources/config/linters`;

const storeData = (data, path, ext) => {
	if (ext === "json") {
		fs.writeFileSync(String(path), JSON.stringify(data));
	} else {
		fs.writeFileSync(String(path), data);
	}
};

const buildLinterConfig = options => {
	let rulesMerged = {};
	const matchingFiles = glob.sync(String(options.pathToRules));

	matchingFiles.forEach(file => {
		rulesMerged = _.mergeWith(rulesMerged,
			require(String(file)),
			customizer);
	});

	return rulesMerged;
};

const customizer = (objValue, srcValue) => {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
};

// // Babel.
// Const babel = () => {
//     Const fileName = 'babel.config.json';
//     Const rules = buildLinterConfig({
//         PathToRules: `${lintersPath}/babel/*.js`
//     });
//     StoreData(rules, `${dotfilesPath}/${fileName}`, 'json');
// };

// ESLint
const eslint = () => {
	const fileName = ".eslintrc";
	const eslintOptions = buildLinterConfig({pathToRules: `${lintersPath}/eslint/{rules,plugins}/*.js`});

	// Console.log(eslintOptions);

	// eslintOptions.extends.push("plugin:prettier/recommended");
	// eslintOptions.plugins.push("prettier");
	storeData(eslintOptions, `${dotfilesPath}/${fileName}`, "json");
};

// Prettier
const prettier = () => {
	const fileName = ".prettierrc";
	const prettierOptions = buildLinterConfig({pathToRules: `${lintersPath}/prettier/{overrides,rules}/*.js`});
	storeData(prettierOptions, `${dotfilesPath}/${fileName}`, "json");
};

// // Markdownlint.
// Const markdownlint = () => {
//     Const fileName = '.markdownlint.json';
//     Const markdownlintOptions = buildLinterConfig({
//         PathToRules: `${lintersPath}/markdownlint/*.js`
//     });
//     StoreData(markdownlintOptions, `${dotfilesPath}/${fileName}`, 'json');
// };

// // PHP-CS-Fixer.
// Const phpCsFixer = () => {
//     Const fileName = '.php-cs-fixer-rules.json';
//     Const rules = buildLinterConfig({
//         PathToRules: `${lintersPath}/php-cs-fixer/**/*.js`
//     });
//     StoreData(rules, `${dotfilesPath}/${fileName}`, 'json');
// };

module.exports = {
	// Babel,
	eslint,
	prettier

	// Markdownlint,
	// PhpCsFixer

};
