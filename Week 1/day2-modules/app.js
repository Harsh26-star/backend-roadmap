console.log(__dirname);
console.log(__filename);

const { sayHello, name } = require(`./greet`);
sayHello();

console.log(typeof name);