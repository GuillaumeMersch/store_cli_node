'use strict';
var fs = require("fs");
// storage file name that contains the key/value pairs
const filename = "./data.json";
// fully read and parse the storage file
const data = fs.existsSync(filename) ? JSON.parse(fs.readFileSync(filename, 'utf-8')) : {};

module.exports = {
    /**
     * Store one (key, value) pair into the file storage
     *
     * @param {string} store_key
     * @param {string} store_value
     */
    add: function(store_key, store_value) {
        if (store_key && store_value) {
            data[store_key] = store_value;
            // persist data
            fs.writeFileSync(filename, JSON.stringify(data), "utf8");
        }
    },
    /**
     * Return the list of all stored (key, value)
     *
     * @return {Object} data where data.key1=value1 ... data.keyn=valuen
     */
    list: function() {
        return data;
    },
    /**
     * Return the value stored for given key
     *
     * @param {string} store_key
     * @return {string|undefined} value for given key, or undefined
     */
    get: function(store_key) {
        if (store_key) {
            return data[store_key];
        }
    },
    /**
     * Remove the (key, value) stored for given key
     *
     * @param {string} store_key
     */
    remove: function(store_key) {
        if (store_key) {
            data[store_key] = undefined;
            fs.writeFileSync(filename, JSON.stringify(data), "utf8");
        }
    }
};

