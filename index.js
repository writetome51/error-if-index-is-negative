// This function is intended to be called after you've called one of the getIndex--
// or Array.indexOf() functions, which must be a function that returns a negative number 
// if the value being searched for in the array was not found.  You then pass that
// resulting index to this function.

export function errorIfIndexIsNegative(index) {
    if (index < 0) throw new Error('value not found in array');
}
