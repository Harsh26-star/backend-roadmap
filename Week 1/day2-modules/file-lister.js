const fs = require("fs");
const path = require("path");
const directory = process.argv[2];

const data = fs.readdirSync(directory);
let i = 0;
while (i < data.length) {
  const folderPath = path.join(directory, data[i]);
  const stats = fs.statSync(folderPath);
  stats.isDirectory() ? console.log(`${data[i]} - (directory)`):console.log(`${data[i]} - ${stats.size} bytes`)
  i++;
}

