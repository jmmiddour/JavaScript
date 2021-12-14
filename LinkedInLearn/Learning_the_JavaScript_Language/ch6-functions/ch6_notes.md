# Learning the JavaScript Language

## Chapter 6 - Functions

### [Basic Functions](https://www.linkedin.com/learning/learning-the-javascript-language-2/basic-functions?autoplay=true&resume=false)



### [Arguments in Functions](https://www.linkedin.com/learning/learning-the-javascript-language-2/arguments-in-functions?autoplay=true&resume=false)

```
function <name of function>(<arguments>) {
    <what your function does>
    return <what you want to return>
}

// Call your function
<name of function>(<arguments>);

// Add your function call with specific agruments to a variable
var <variable name> = <function>(<arguments>);
<variable name>;
```

### [More on Arguments](https://www.linkedin.com/learning/learning-the-javascript-language-2/more-on-arguments?autoplay=true&resume=false)

- You can set defaults for the arguments in your functions like so:

    ```
    function speakSomething(what, howMany) {
      // this pattern works nicely for default values:
      // check if the argument is undefined, and if it is, provide a default value
      var what = (typeof what !== "undefined") ? what : "Default speech";
      var howMany = (typeof howMany !== "undefined") ? howMany : 10;
    
      // shorter version that could get tripped up by truthiness
      // what = what || 'Default speech';
      // howMany = howMany || 10;
    
      for (var i = 0; i < howMany; i += 1) {
        console.log(what + " (" + i + ")");
      }
    }
    ```
  
- In ECMAScript 2015, JS can specify defaults like we do in Python by simply assigning a value where we assign the arguments like so:

    ```
    function speakSomething(what = "Default speech", howMany = 10) {
      for (var i = 0; i < howMany; i += 1) {
        console.log(what + " (" + i + ")");
      }
    }
    ```
  
- You can provide default values but the order of the arguments still matters when passing them into the function call

- You can also set up a function that can take an infinite number of arguments using the `arguments` function
  - The `arguments` function is an array-like object that gives us some tools of an array
  - Like real arrays, it has a `length` property that we can use to iterate over all the arguments that are given in the function call
  - You can also use the `arguments` function to pull out arguments using their index value

### [Objects, References, and Functions](https://www.linkedin.com/learning/learning-the-javascript-language-2/objects-references-and-functions?autoplay=true&resume=false)

Objects are passed by reference into functions, meaning that the object has a location in the computer's memory and when you pass it into a function, you are passing in the original object, not a copy; Therefore, anything that is changed on that object in the function remains changed in the object without having to return anything in the function.

- If you do not want to modify the original object, you will need to create a copy of the object before making any changes to it within your function; can be done like so:
  - `var <new variable> = <orig object>.<orig property>`
  - Then at the end return:
    ```
    return {
        <orig property>: <orig object>.<orig property>,
        ... (all orignal properies except for the one changed)
    }
    ```
    
- This principle also applies to arrays

**^-- This is what "Passing by Reference" means --^**

### [Functions are Objects](https://www.linkedin.com/learning/learning-the-javascript-language-2/functions-are-objects?autoplay=true&resume=false)

*Functions are objects that have the power to be invoked!*

A **Function Expression**:

```
function speakSomething(what) {
  what = what || "Speaking!";

  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}
```

An **Anonymous Function** assigned to a variable:

```
var speakSomething = function(what) {
  what = what || "Speaking!";

  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
};
```
- This is similar except that it is just `function` with the parameters (arguments) inside the `()` and does not have a name because it is assigned to a variable that we will use to call the function

You can feed functions into other functions as arguments.

- When working with JS on the web, there's a global `window` object available
  - All global variables are properties of the `window` object
  - There are a bunch of functions built-in to the `window` function as well
  - One of these functions is called `setTimeout`
    - It is a function that takes as its first argument, a function
    - It will set a timer, after which, the function will execute that is set for its first argument
    - It will also invoke the function for you, so you do not need to include the invoking `()`
    - The second parameter is the number of milliseconds after which to run the function (1000 ms = 1 sec)

You can also define your own objects and set functions as members of those objects.

```
var obj = {
  sayHello: function() {
    console.log("Hello");
  }
};

obj.sayHello();
```

### [Jargon: Scope in JavaScript](https://www.linkedin.com/learning/learning-the-javascript-language-2/jargon-scope-in-javascript?autoplay=true&resume=false)

**Scope:** Where variables are defined and what parts of our code can access the variables we define.

**Global Scope:** Variables that are defined in such a ways that they're accessible anywhere.
- One piece of guidance that almost every developer gets is to avoid creating global variables
- They are accessible everywhere, which is very convenient, but the global namespace, as it's called, is a resource that's shared among all scripts that are in use at any given time
- Can be accessed and also modified by any piece of code, so your little island that you're working on could have bugs introduced by somebody else's code if you're both trying to use a global variable with the same name
- By just creating a variable without putting `var`, `let`, or `const` in front of it, you are automatically creating a globally variable
- By using `"use strict"` at the top of your code, it will give you a warning if you create a global variable as described above

**Local Scope:** Variables that are accessible in a way that's more limited, perhaps only inside a particular function.
- Using `var`, `let',  and `const` when defining a variable will keep the variable in local scope

### [Variable Scope in Functions](https://www.linkedin.com/learning/learning-the-javascript-language-2/variable-scope-in-functions?autoplay=true&resume=false)

```
var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);

  var myNum = randomNumber;

  console.log("myNum is", myNum);
  console.log("Global myNum is", window.myNum);

  console.log("Our result is", myResult);

  return myNum;
}
```

In the example above, we can have two variables with the same names, and they have different values. 

- The first `var myNum` which holds value `32` is in the **global scope**. 

- The second `var myNum` which holds value `randomNumber` is in the **local scope of the function**

- If we did not preface the second `myNum` in the function with `var` it would have overwritten the global `myNum`

- Also, `randomNumber` can not be accessed outside the scope of the function because it was initialized inside the function, unless it was globally initialed without our knowledge

- With ECMAScript 2015, there are also `let` and `const` keywords that let you create variables that are scoped to any block, not just functions

### [Jargon: Callback Functions](https://www.linkedin.com/learning/learning-the-javascript-language-2/jargon-callback-functions?autoplay=true&resume=false)

**Callback Function:** A piece of jargon referring back to a function that's passed as an argument into another function and executed in that function.

- JS functions have a method called `.map` that takes a `callback`, with that `callback` having one required specific parameter,  the item in the array that we're acting on

    ```
    function doubleIt(number) {
      return (number *= 2);
    }
    
    var myNumbers = [1, 2, 3, 4, 5];
    
    var myDoubles = myNumbers.map(doubleIt);
    
    myNumbers.forEach(function(number) {
      console.log("My array contains", number);
    });
    ```

- The `callback` is executed on every item in the array in turn, creating a new array with a result of each execution

- Another `callback` function is `forEach`
  - It does not return anything, just iterates over the array passing each value from the array as the argument into that `callback` function
  - It is a short, maybe even a more expressive of way, of looping over an array than a for loop
  - It's not as easy to stop as a for loop, the `break` keyword doesn't do it, but you might find it more pleasant to be used as long as you definitely want to loop through the entire array

- in ECMAScript 2015 there's another kind of function caller an `arrow` function

    ```
    // Same function as above, just as an arrow function
    doubleIt = number => (number *= 2);
    ```
