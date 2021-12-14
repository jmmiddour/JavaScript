# Learning the JavaScript Language

## Chapter 4 - Operators and Control Structures

### [Simple Comparisons](https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false)

- **Strict Equality:** `===` checks whether the object on the left is identical to the object on the right

- **Strict Inequality:** `!==` checks if the left is not identical to the right

- **Equality:** `==` can be used to compare numbers whether they are in word or number format

- **Not Equality:** `!=` can be used to compare numbers whether they are in word or number format

- **Relational Operators:**
  - `<` less than
  - `>` greater than
  - `<=` less than or equal to
  - `>=` greater than or equal to

### [Arithmetic Operations](https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false)



### [Logical Operators](https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false)

- **`and` Operator:** `&&` conditional statement will only return true if all conditions are met

- **`or` Operator:** `||` conditional statement will return true even if only one condition is met

- **Operator Precedence:** Determines which of the conditions will be evaluated first, then collapses into its true or false value before being compared against the other conditions
  - **ANDs** are always evaluated down before the **ORs**
  - You can add `()` around what you want to be evaluated together

- **Logical NOT:** `!` will give you the inverse

### [Conditionals: if](https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-if?autoplay=true&resume=false)



### [Conditions: Switch](https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false)

Switch is like using if / if else / else statements but condenses the code more

This code in if / if else / else statements:
```
if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}
```

Would be this using Switch:
```
switch (answer) {  // usually a variable but any expression that can be broken down
  case "YES":  // start the "case block" with a value
    console.log("You said YES!");  // what is suppose to happen
    break;  // end the "case block"
  case "MAYBE":
    console.log("You said maybe. I don't know what to make of that.");
    break;
  case "NO":
    console.log("You said no. :(");
    break;
  default:  // just like else, catches any other cases
    console.log("You rebel, you!");
    break;
}
```

A switch statements can cascade in a way that if / else statements don't. If you do not include the `break` at the end of a `case` block, the switch statement will continue to cascade down until a `break` is hit.

### [Terse ifs](https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoplay=true&resume=false)

- You can have an if statement in one line with no `{}` like so:
  - `if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");`

- Can also do an if / else statement on two lines, like so:
  - ```
    if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
    else console.log("I feel nothing!");
    ```

- One-liners are fine for quick checks, but if you want multiple lines of actions to be executed after a condition is evaluated by an if statement, you should add `{}` back

- Only the first line that comes afterwards is bound by the if statement when there are no `{}`

- Another thing you might see is a condition that is just a variable by itself

### [Ternary Operator](https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false)

Another if / else type of statement

```
<your condition>
    ? <what to do if true>
    : <what to do if false>;
```

- Often used to set a variable based on certain conditions

### [Type Checking](https://www.linkedin.com/learning/learning-the-javascript-language-2/type-checking?autoplay=true&resume=false)

- JS does not care about data types to the extent that some languages do; In other words, it's loosely typed

- **Typeof Operator:** `typeof <variable to check>`

- When wanting to check if a variable is an object or array, you can not use `typeof` by itself because both will return as an `"object"`
  - A trick to tell if it is an array or not is:  
    `typeof thing === "object" && thing.hasOwnProperty("length");`
  - `length` is just one thing that an array has that an object does not

- `typeof` also will not determine if the variable is a `NaN`, it will return it as being a `"number"`
  - If you get `"number"` and need to verify it is not a `NaN` you can use `Number.isNaN()`

- To check for `null` you will need to use `===` comparison because `typeof` will return an `"object"`
