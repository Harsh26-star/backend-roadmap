// generate-log.js

const fs = require('fs');

const words = ['error', 'warning', 'info', 'success', 'failed', 'timeout', 'connected', 'request', 'response', 'null'];
const lines = [];

for (let i = 0; i < 10000; i++) {
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    lines.push(`[2024-01-${String(i % 28 + 1).padStart(2, '0')}] ${word1} ${word2} - log entry ${i}`);
}

fs.writeFileSync('server.log', lines.join('\n'));
console.log('Generated server.log with 10000 lines');