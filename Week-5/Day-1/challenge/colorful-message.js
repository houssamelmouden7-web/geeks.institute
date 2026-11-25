const chalk = require("chalk");

function displayColorfulMessage() {
  console.log(
    chalk.bgBlue.white.bold(" NODE.JS ") +
      " " +
      chalk.green.bold("Modules & File System are working perfectly!")
  );
}

module.exports = displayColorfulMessage;