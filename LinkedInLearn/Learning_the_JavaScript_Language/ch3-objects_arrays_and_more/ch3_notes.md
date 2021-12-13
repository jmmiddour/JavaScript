# Learning the JavaScript Language

## Chapter 3 - Objects, Arrays, and More

### [Objects](https://www.linkedin.com/learning/learning-the-javascript-language-2/objects?autoplay=true&resume=false)

- Objects are the main way in JS and other languages to encapsulate knowledge in ways that are more complex than simple data types will allow on their own

- The simplest way to make an object is with an ***object literal***
  - Just need to type `{}` and that is an object
  - Basically an object in JS is similar to a dictionary in Python

- Has a series of labels, known as keys, and values, which are generally the data that we care about, that are all grouped together

- Keys are strings but do not require you to add the `""` but it is best practice to still add quotes to ensure you are not writing over any keywords

### [Objects for Modeling Data](https://www.linkedin.com/learning/learning-the-javascript-language-2/objects-for-modeling-data?autoplay=true&resume=false)

- Developers will sometimes call booleans "flags"

- You can also make objects of anything you need, concrete or abstract

- What you actually do with an object is going to vary a lot depending on the kind of program you are going to write

- Objects are a very powerful way, despite their simplicity, of representing data and making sure the computer understands the things that you need it to

### [Manipulating Objects](https://www.linkedin.com/learning/learning-the-javascript-language-2/manipulating-objects?autoplay=true&resume=false)

- Can use "dot notation" or brackets (`[]`) and string (`''`) to get the value from the key
  - If the key contains any special characters or spaces, can not use dot notation, have to use brackets and sting
  - You can also use either way to assign a new property to the object

- To remove a property from an object you would write `delete <object>.<key>`
  - Example: `delete bird.color`
  - `delete` is a built-in keyword in JS

### [Jargon: References and Objects](https://www.linkedin.com/learning/learning-the-javascript-language-2/jargon-references-and-objects?autoplay=true&resume=false)

- When working with JS objects, there is an import concept called ***references***
  - Objects are **references** to particular locations in the computer's memory
  - Assign a variable to an object is basically like just creating a "pointer" to point at that object's location in memory
  - So **references** are basically the same as a "pointer"

- If you assign an object to a variable, then assign that variable to another variable, it will not make a copy of the object at the first variable; It will just create another "pointer" to the same object
  - So if you make changes to the second variable, the changes will affect the object in the first variable too

- You will only run across this when dealing with objects

- If you want to safely make a copy of an object there is a way to do this with `JSON.parse` and `JSON.stringify`
  - Example: `var varible2 = JSON.parse(JSON.stringify(variable1));`

### [Arrays](https://www.linkedin.com/learning/learning-the-javascript-language-2/arrays?autoplay=true&resume=false)

- An **array** is a way of storing lists of data that preserves their order

- If the order in which your data appears is important, then you want to use an array vs an object

- To create an array you use `[]`

- In JS arrays and objects are essentially the same thing but arrays have a few special qualities that objects do not:
  - The order is preserver
  - Keys are automatically assigned, but you do not see them
  - Keys are assigned as numbers that are 0-indexed
  - Can also contain objects nested within
  - Also, can nest another array inside
  - Just like an object, you can put any type of data you want in your array, and it can be all types, one type, or any combination you need
  - Arrays also know how many things are in them
    - Does not account for nested data, just how many items are at the root level of the array

### [Manipulating Arrays](https://www.linkedin.com/learning/learning-the-javascript-language-2/manipulating-arrays?autoplay=true&resume=false)

- With arrays the dot notation does not work, only the square braces (`[]`) with the "key" (index location) in the `[]`

- To add a new value to an array:
  - One way is with the next index location in the array
    - Example: `arr1[4] = "My new value"` if the last value in the array was at index `3`
  - If you do not know the last index number, you can use the `.length` property
    - Example: `arr1[arr1.length] = "My new value"`
    - This will get the total length and because this 0-indexed it will give you the next available index location in the array
  - Can also add to the end of an array using the `push` method (only works with the end of an array)
    - Example: `arr1.push("My new value")`

- To remove a value from an array:
  - One way is with the `pop` method (only works with the end of an array)
    - Example: `arr1.pop()` just removes the last value in the array
  - To remove a value in the middle of the array, we would use a method called `splice`
    - Example: `arr1.splice(2, 1)` removes `1` value starting at index location `2`
      - `.splice` takes 2 parameters: which index of the array we want to do the operation to, how many items to get rid of
      - `.splice` will also return the value(s) we remove

### [Readability: Whitespace](https://www.linkedin.com/learning/learning-the-javascript-language-2/readability-whitespace?autoplay=true&resume=false)

Whitespace does not matter in JS, but it does help with readability.

However, if you have a long string that you want to break up between more than one line, you will need to use `/` but make sure there is no whitespace after the `/` or it will throw an error.

A great tool to make your code more readable is [Prettier](https://prettier.io).

### [Readability: Comments](https://www.linkedin.com/learning/learning-the-javascript-language-2/readability-comments?autoplay=true&resume=false)

Comments are used for documenting and disabling parts of your code.

A single line comment: 
```
// This is a single line comment
```

A block (multiple line) comment:
```
/*
You can write comments
across multiple lines
finally ending with:
*/
```

### [Regular Expressions](https://www.linkedin.com/learning/learning-the-javascript-language-2/regular-expressions?autoplay=true&resume=false)

- In JS regular expressions is another data type, just like numbers or strings

- A regex in JS starts with `/` and ends with `/` as long as you put something in between it is a regex literal

- What goes inbetween the `/`s can be:
  - words
  - numbers
  - various combinations
  - patterns

- Helpful book: [Mastering Regular Expressions by Jeffery Friedl](http://regex.info/book.html)

- `<name of your regex>.test()` method is what you use to look for your regex in the string you pass into the method and returns true or false

- You can add an `i` (called a "flag") at the end of a regex after the `/` to make the regex case-insensitive, otherwise regex is case-sensitive

- Using `^` after the `/` at the start of the regex checks if the regex is at the beginning of the string

- Using `$` before the `/` at the end of the regex will check if the regex appears at the end of the string

- Using `.` is a wildcard for a single character

- If you want to look for an actual `.` symbol you have to write it as `\.`
