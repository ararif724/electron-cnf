const { app } = require("electron");
const { writeFileSync, readFileSync, existsSync } = require("fs");

const cnfJsonFile = app.getPath("userData") + "/electron-cnf.json";

/**
 * Get a config variable
 * @param {string} cnfName Config variable name
 * @param {any} defaultValue Default value of the config variable
 * @returns Value of the config variable if exist or default value
 */
const getCnf = (cnfName, defaultValue = "") => {
	if (existsSync(cnfJsonFile)) {
		let cnfJson = readFileSync(cnfJsonFile);
		let cnfObject = JSON.parse(cnfJson);
		if (typeof cnfObject[cnfName] != "undefined") {
			return cnfObject[cnfName];
		}
	}

	return defaultValue;
};

/**
 * Get all config variable
 * @returns An object contains all config variable in key:value pair
 */
const getAllCnf = () => {
	if (existsSync(cnfJsonFile)) {
		let cnfJson = readFileSync(cnfJsonFile);
		return JSON.parse(cnfJson);
	}

	return {};
};

/**
 * Set a config variable
 * @param {string} cnfName Config variable name
 * @param {any} cnfValue Value of the config variable
 * @returns undefined
 */
const setCnf = (cnfName, cnfValue) => {
	let cnfObject = {};
	if (existsSync(cnfJsonFile)) {
		let cnfJson = readFileSync(cnfJsonFile);
		cnfObject = JSON.parse(cnfJson);
	}
	cnfObject[cnfName] = cnfValue;
	return writeFileSync(cnfJsonFile, JSON.stringify(cnfObject));
};

/**
 * Set multiple config variable
 * @param {object} cnfObject Config variables object in key:value pair
 * @returns undefined
 */
const setCnfMulti = (cnfObject) => {
	if (existsSync(cnfJsonFile)) {
		let cnfJson = readFileSync(cnfJsonFile);
		cnfObject = { ...JSON.parse(cnfJson), ...cnfObject};
	}

	return writeFileSync(cnfJsonFile, JSON.stringify(cnfObject));
};

/**
 * Unset a config variable
 * @param {string} cnfName Config variable name
 * @returns undefined
 */
const unsetCnf = (cnfName) => {
	let cnfObject = {};
	if (existsSync(cnfJsonFile)) {
		let cnfJson = readFileSync(cnfJsonFile);
		cnfObject = JSON.parse(cnfJson);
	}
	delete cnfObject[cnfName];
	return writeFileSync(cnfJsonFile, JSON.stringify(cnfObject));
};

/**
 * Unset all config variable
 */
const clearCnf = () => {
	writeFileSync(cnfJsonFile, "{}");
};

module.exports = {
	getCnf,
	getAllCnf,
	setCnf,
	setCnfMulti,
	unsetCnf,
	clearCnf,
};
