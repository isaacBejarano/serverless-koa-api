const chalk = require("chalk");

const log = (msg, _var, hex) => {
	// frequency of use: DESC
	if (!_var && !hex) console.log(msg);
	else if (_var && !hex) console.log(msg, _var);
	else if (!_var && hex) console.log(chalk.hex(hex)(msg));
	else console.log(chalk.hex(hex)(msg), _var);
};

module.exports = { log };

// OBS. console.log(chalk.hex("#f08080")("%s"), lastCtx);
