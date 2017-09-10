#!/usr/bin/env node
'use strict';

var simple_storage = require('./simple_storage');
var simple_output = require('./simple_output');

let store_command = process.argv[2];
let store_key = process.argv[3];
let store_value = process.argv[4];
if (store_command === "add") {
    simple_storage.add(store_key, store_value);
    simple_output.add();
}
else if (store_command === "list") {
    const result = simple_storage.list();
    simple_output.list(result);
}
else if (store_command === "get") {
    const result = simple_storage.get(store_key);
    simple_output.get(result);
}
else if (store_command === "remove") {
    simple_storage.remove(store_key);
    simple_output.remove();
}
