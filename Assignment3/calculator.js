// Implementation of arrow function is compulsory
// No curly braces required because just one statement is included
export let add = (x, y) => x + y; 
export let sub = (x, y) => x - y;
export let mul = (x, y) => x * y;

// Curly braces required because more than one statement is included
export let div = (x, y) => { 
    if (y === 0) {
        return "Can't divide by 0";
    } else {
        return x / y; // By default the result is returned
    }
};