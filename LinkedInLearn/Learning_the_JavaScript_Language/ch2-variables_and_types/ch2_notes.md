# Learning the JavaScript Language

## Chapter 2 - Variables and Types

### [Declaring and Assigning Variables](https://www.linkedin.com/learning/learning-the-javascript-language-2/declaring-and-assigning-variables?autoplay=true&resume=false)

- A variable is just like a box that we put a liable on and store something in

- Should always end every line in JavaScript with a semicolon (`;`) to avoid confusion and for better readability. JS does not require it though

- Variables can be named almost anything that starts with a letter, underscore, or dollar sign (`$`)

- Can also keep the label and just change what is stored in the box

- Can assign multiple variables on the same line by separating them with commas (`,`), example:
  - `var monster1 = "Grover", monster2 = "Cookie monster", monster3 = "Animal"`

- Best practice is to name your variables as descriptive as possible to make them more human-readable, JS does not care what you name them though

- Variables in JS are writen in "camelCase"; examples: `taxRate`, `productPrice`, etc
  - In `camelCase` the first word is all lower case and each word after has the first letter only capitalized

- You never want to name you variable a JS reserved word
  - [List of JavaScript Reserved Words](https://developer.mozilla.org/en-US/docs/TalkJavaScript/Reference/Reserved_Words)

- For more info on using `var`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

### [Strings](https://www.linkedin.com/learning/learning-the-javascript-language-2/strings?autoplay=true&resume=false)

A string is anything between (`""`) or (`''`)

This is called a "String Literal"

- Literal here means you are making data of some type using the simplest notation possible

- Does not have to be a sentence or just letters, can be numbers too

### [String Properties and Methods](https://www.linkedin.com/learning/learning-the-javascript-language-2/string-properties-and-methods?autoplay=true&resume=false)

- Strings also have properties and functions or methods on any string

- A ***property*** is a single piece of data, like the length of a string
  - A property does not need to be invoked

- A ***method*** is a bit of code to something more involved, like convert a string to uppercase
  - A method has to be invoked (need `()` at the end)

### [Numbers](https://www.linkedin.com/learning/learning-the-javascript-language-2/numbers?autoplay=true&resume=false)

- All numbers in JS are of the same type called `Number`

- JS can also represent infinity with a built-in keyword `Infinity`
  - In JS `Infinity` is any number that is larger than a very, very, very large upper bound
  - Odds are you will not run into this, but it is there if you need it
  - You can also have negative infinity with `-Infinity`

- Not a Number = `NaN`
  - Get this when you try to do math and the result, because of an error in your code, most of the time, or for various other reasons, you can end with something which is not a number

- Numbers have methods and properties, like string do

- There is also a built-in global object called `Math` that you can use with `Number` types
  - Example: `Math.round(12.5222222)` ==> `13`

### [Booleans and the Quest for Truth](https://www.linkedin.com/learning/learning-the-javascript-language-2/booleans-and-the-quest-for-truth?autoplay=true&resume=false)

- In JS true = `true` and false = `false`
  - Must be in all lowercase

- In JS to write an equality between two conditional statements = `===`
