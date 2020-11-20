let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

/*
Use the shorthand character class \W to count the number of non-alphanumeric 
characters in various quotes and strings.

*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
