# Learning the JavaScript Language

## Chapter 5 - Iterating with Loops

### [For Loops: Sequential](https://www.linkedin.com/learning/learning-the-javascript-language-2/for-loops-sequential?autoplay=true&resume=false)

- **Short-circuiting the Loop:** when you put a `break` in an if statement, so that when it meets that condition it stops the for loop from running

- **Sequential For Loops:** do the same thing over and over again

### [For Loops: Enumerate](https://www.linkedin.com/learning/learning-the-javascript-language-2/for-loops-enumerative?autoplay=true&resume=false)

Iterating over an  array with an **Enumerative For Loop**:

```
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];
for (var p in pageNames) {
  console.log(p, pageNames[p]);
}
```
- Similar to how we do a for loop in Python...
  - `p` is our index (key) value
  - `pageNames` is our array

- The order is not guaranteed when you're dealing with a for in loop like this

- You do tend to get the keys back in a sensible order with arrays but can not depend on it

- If the order matters, you can not trust these loops

Can also iterate over an object with an **Enumerative For Loop** easier than with a Sequential for loop:

```
var pages = {
  first: "Home",
  second: "About Us",
  third: "Contact Us",
  fourth: "JavaScript Playground",
  fifth: "Blog"
};
for (var p in pages) {
  if (pages.hasOwnProperty(p)) {
    console.log(p, pages[p]);
  }
}
```
- Similar to how we would loop over an array with some slight differences...
  - By using `pages.hasOwnProperty(p)` is your way of safeguarding yourself against enumerating over things that you didn't mean to

### [While Loops](https://www.linkedin.com/learning/learning-the-javascript-language-2/while-loops?autoplay=true&resume=false)

- The `do` `while` loop is good for when you have something that you want to execute at least once because it will "do" what is in the `do` statement before making it the `while` loop; Then do the `do` statement again as long as the `while` holds true
