"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("error-if-not-integer");

// This function is intended to be called after you've called one of the getIndex--
// or Array.indexOf() functions, which must be a function that returns a negative number 
// if the value being searched for in the array was not found.  You then pass that resulting index to this function.  
// If the index is negative this function triggers an error saying the value was not found in the array.

function errorIfIndexIsNegative(index) {
    errorIfNotInteger_1.errorIfNotInteger(index);
    if (index < 0) throw new Error('value not found in array');
}
exports.errorIfIndexIsNegative = errorIfIndexIsNegative;
