'use strict';
var fs = require("fs");
// storage file name that contains the key/value pairs
const filename = "./data.json";
// read and parse the storage file
const data = fs.existsSync(filename) ? JSON.parse(fs.readFileSync(filename, 'utf-8')) : {};

module.exports = {
    add: function(store_key, store_value) {
        if (store_key && store_value) {
            data[store_key] = store_value;
            fs.writeFileSync(filename, JSON.stringify(data), "utf8");
        }
    },
    list: function() {
        return data;
    },
    get: function(store_key) {
        if (store_key) {
            return data[store_key];
        }
    },
    remove: function(store_key) {
        if (store_key) {
            data[store_key] = undefined;
            fs.writeFileSync(filename, JSON.stringify(data), "utf8");
        }
    }
};

