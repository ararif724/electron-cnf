
# electron-cnf

**Lightweight package for managing Electron settings and configuration data**

`electron-cnf` is a lightweight utility module designed to simplify the management of configuration variables in Electron applications. It provides easy-to-use functions for retrieving, setting, unsetting, and clearing configuration variables stored in a JSON file.

## Installation

```bash
npm install electron-cnf
```

## Usage

```javascript
const electronCnf = require('electron-cnf');

// Get a config variable
const value = electronCnf.getCnf('variableName', defaultValue);

// Get all config variables
const allConfig = electronCnf.getAllCnf();

// Set a config variable
electronCnf.setCnf('variableName', 'variableValue');

// Set multiple config variables
electronCnf.setCnfMulti({ key1: 'value1', key2: 'value2' });

// Unset a config variable
electronCnf.unsetCnf('variableName');

// Clear all config variables
electronCnf.clearCnf();
```

## Example

```javascript
const { app } = require('electron');
const electronCnf = require('electron-cnf');

const cnfValue = electronCnf.getCnf('exampleVariable', 'defaultValue');
console.log('Config Value:', cnfValue);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to use this Markdown content directly for your GitHub README.md file. If you have any specific modifications or additions, please let me know!