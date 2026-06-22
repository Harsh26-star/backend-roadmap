const fs = require('fs');

const readable = fs.createReadStream('./stream-intro.js', { encoding: 'utf-8'/*, highWaterMark: 64*/});

let chunkCount = 0;

readable.on('data', (chunk) => {
    chunkCount++;
    console.log(`Chunk ${chunkCount}: ${chunk.length} characters`);
});

readable.on('end', () => {
    console.log(`Done. Total chunks: ${chunkCount}`);
});