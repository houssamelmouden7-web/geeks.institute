const { readFile, writeFile } = require("./fileManager.js");

readFile("Hello World.txt", (data) => {
  console.log("Content of Hello World.txt:", data);
});

writeFile("Bye World.txt", "Writing to the file");