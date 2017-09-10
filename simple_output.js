'use strict';
module.exports = {
    add: function() {
    },
    list: function(data) {
        console.log("list: "+JSON.stringify(data));
    },
    get: function(store_key, data) {
        console.log(store_key + " : " + data);
    },
    remove: function() {
    }
};

