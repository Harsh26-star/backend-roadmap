const fs = require("fs");

const readable = fs.createReadStream("server.log", { encoding: "utf-8" });

const targetWords = [
  "error",
  "warning",
  "info",
  "success",
  "failed",
  "timeout",
  "connected",
  "request",
  "response",
  "null",
];

const count = {}

readable.on("data", (chunk) => {
    let words = chunk.split(" ");
    words.forEach(word => {
        if (targetWords.includes(word)) {
            count[word] = (count[word] || 0) + 1;
        }
        return count;
    });
});

readable.on("end", () => {
    console.log(count);

    const writable = fs.createWriteStream('output.json');
    writable.write(JSON.stringify(count, null, 2));
    writable.end();

    console.log(`Done. ${Object.keys(count).length} unique words found.`)
})
