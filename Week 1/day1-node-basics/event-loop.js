console.log("Example 1")
console.log("1 - Start");

setTimeout(() => {
    console.log("2 - Inside setTimeout");
}, 0);

console.log("3 - End");

// 1 - Start
// 3 - End
// 2 - Inside Timeout

console.log("")
console.log("Example 2");
console.log("Start");

setTimeout(() => console.log("Timeout 1 - 0ms"), 0);
setTimeout(() => console.log("Timeout 2 - 100ms"), 100);
setTimeout(() => console.log("Timeout 3- 50ms"), 50);

console.log("End");

// Start
// End
// Timeout 1
// Timeout 3
// Timeout 2

console.log("");
console.log("Example 3");
console.log("1-Start");

setTimeout(() => console.log("2 - setTimeout"), 0);

Promise.resolve().then(() => console.log("3 - Promise"));

console.log("4 - End");

// 1 - Start
// 4 - End
// 2 - setTimeout
// 3 - Promise