const fs = require("fs");
const path = require("path");

function readFileContent() {
  const filePath = path.join(__dirname, "files", "file-data.txt");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File Content:", data);
  });
}

module.exports = readFileContent;