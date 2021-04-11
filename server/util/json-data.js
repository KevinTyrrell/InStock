
const fs = require("fs");
const path = require("path");

/**
 * Simple layer to save and load JSON files.
 */
class JSONData {
    DEFAULT_RELATIVE_JSON_PATH = "../data/";

    /**
     * @param {String} name Filename, without extension.
     */
    constructor(name) {
        this.path = path.resolve(__dirname, this.DEFAULT_RELATIVE_JSON_PATH, `${name}.json`);
    }

    /**
     * Loads the JSON file from storage.
     * 
     * @param {Function} errCallback Callback passed no parameters, if file DNE.
     * @returns {*} JSON object or array.
     */
    load(errCallback) {
        if (!fs.existsSync(this.path))
            errCallback(`File does not exist: ${this.path}`);
        else return JSON.parse(fs.readFileSync(this.path));
    }

    /**
     * Saves an object to storage, at the predetermined path.
     * 
     * @param {Object} obj JSON object to be saved.
     */
    save(obj) {
        fs.writeFileSync(this.path, JSON.stringify(obj));
    }
}

module.exports = JSONData;
