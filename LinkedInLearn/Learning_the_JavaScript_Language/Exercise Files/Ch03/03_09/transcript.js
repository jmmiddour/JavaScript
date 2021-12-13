var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/;

console.log( regex.test(string1) );
console.log( regex.test(string2) );
console.log( regex.test(string3) );
console.log( regex.test(string4) );

regex = /this/i;  // `i` is a flag to make case-insensitive

regex = /^this/i;  // checks for word at beginning of string

regex = /this$/i;  // checks for word at end of string

regex = /ever.$/i;  // checks for word + 1 character at end of string

regex = /ever\.$/i;  // checks for word + . at end of string

regex = /Moun.$/i;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
