var errorIfIndexIsNegative = require("./index").errorIfIndexIsNegative;

errorIfIndexIsNegative(0);
console.log('test 1 passed');

errorIfIndexIsNegative(-2);
