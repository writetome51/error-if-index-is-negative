import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';

// This function is intended to be called after you've called one of the getIndex--
// or Array.indexOf() functions, which must be a function that returns a negative number 
// if the value being search for in the array was not found.  You then pass that resulting index to this function.  
// If the index is negative this function triggers an error saying the value was not found in the array.

export function errorIfIndexIsNegative(index): void {
	errorIfNotInteger(index);
	if (index < 0) throw new Error('value not found in array');
}
