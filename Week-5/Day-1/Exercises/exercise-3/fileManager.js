const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    if (callback) callback(data);
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(`Successfully wrote to "${filePath}"`);
    if (callback) callback();
  });
}

module.exports = { readFile, writeFile };