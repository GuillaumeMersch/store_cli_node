# store_cli_node
Simple key/value store CLI using only the core Node API.

Use command line commands to manage a key, value storage.


### Input, output, persistence
* The key, value pairs are stored in a json file,
* The file is created if it doesn't exist.
* input = CLI
* output = console

### 
* User must have the right to read/write the json file.
* Operations are not atomic.
* Operations are synchronous so they can be batched
  for 1 user not multi-threading.
* No error handling:
  - e.g. if user doesn't have the right to read/write
  - e.g. if the file is corrupted

### Usage:
* ```store add key value```
  - adds the key, value to the file
  - no output
* ```store list```
  - lists all key, value
  - prints as json to the console:
  ```{"key1":"value1","key2":"value2"}```
* ```store get key```
  - retrieves the value for the key
  - prints ```value``` to the console
  - prints ```undefined``` if key is absent
* ```store remove key value```
  - removes the key, value pair if present
  - no output
