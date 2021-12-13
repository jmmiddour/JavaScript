# Learning the JavaScript Language

## Chapter 1 - Getting Started

### [Syntax: Learning to Read and Write](https://www.linkedin.com/learning/learning-the-javascript-language-2/syntax-learning-to-read-and-write?autoplay=true&resume=false)

### [Versions of JavaScript](https://www.linkedin.com/learning/learning-the-javascript-language-2/versions-of-javascript?autoplay=true&resume=false)

ECMAScript 5 (AKA ES5):
- Version that runs on all modern web browsers since around 2012
- The general baseline and the one that most people mean when they think of mere JavaScript
- Mostly what we will be talking about in this course

ECMAScript 2015 (AKA ES6):
- Another most commonly discussed version of JavaScript
- This version came after ES5
- There are a lot of new features
- Browser support is pretty good but not good enough that devs can use it directly in browsers safely

ECMAScript 2016 and Beyond:
- New versions pretty much finalize every year and contain new features that make the language feel new and shiny

For the most part ES5 and ES6 still make up the lion's share of JavaScript in common use.

If you want to use the newer features of JavaScript without sacrificing compatibility, there are tools called "Transpilers". 

- **Transpiler:** Takes your newer, less compatible JavaScript and converts it into ES5, so it can run on most web browsers or whatever else you are targeting. The most popular transpiler is called `babeljs.io`

### [Places to Tinker with JavaScript](https://www.linkedin.com/learning/learning-the-javascript-language-2/places-to-tinker-with-javascript?autoplay=true&resume=false)

Web Browsers:
- In Chrome (my case Brave):
  - Got to settings
  - `More Tools`
  - `Developer Tools`
  - Or via shortcut (ctrl + alt + i) on Windows
  - `Console` tab opens a JavaScript console where you can write JS code
    - Will only show one executable line at a time
    - You can add more lines by hitting `shift` + `return`
- Firefox
- Safari
- Microsoft Edge

If you are interested in using JavaScript for **_backend development_**, you'll probably want to look at `Node.js`.

**Node.js:** Is installed as a command line utility called `node`. Can it from [nodejs.org](https://nodejs.org/en/)

- Once installed, just type `node` in command line
- That will drop you into a `repl` (read, evaluate, print, loop)
- It detects when something you're typing could extend multiple lines
- `ctrl` + `d` will exit out of multi-line input mode

### [Our Friend the Text Editor](https://www.linkedin.com/learning/learning-the-javascript-language-2/our-friend-the-text-editor?autoplay=true&resume=false)

- There are several editors out there to choose from, but the best one is one that colors the syntax based on what it is
- Another thing that will help with increasing productivity is to have a text editor that has autocompletion
- Can also help with managing special punctuation
  - JavaScript uses lots of parenthesis, quotation marks, braces and other punctuation that often comes in pairs
- Another feature might reformat code so it's more readable, but still executes correctly

Examples of Text Editors:
- Visual Studio Code (https://code.visualstudio.com): 
  - OpenSource and Free
  - From Microsoft
  - JavaScript friendly
  - Updated every month with lots of useful features
  - Very popular right now

- Sublime Text (https://www.sublimetext.com):
  - Not free, but can be used without payment for a long time
  - Before VS Code, this was the editor that people talked about the most
  - Is native, so it makes it feel faster for some

- Atom (https://atom.io):
  - From GitHub
  - Free and OpenSource
  - Another popular one
  - Remote collaboration tools

- Bracket (http://brackets.io):
  - From Adobe
  - Free and OpenSource
  - Targeted to web devs
  - Support for CS preprocessors out of the box
  - Great for JavaScript

- PhpStorm (https://www.jetbrains.com/phpstorm):
  - An IDE
  - Supports both JavaScript and PHP equally well
  - A little heavier to work with than the other editors
  - Takes a little bit of configuration for any project added to it

- WebStorm (https://www.jetbrains.com/webstorm):
  - JavaScript Only IDE

IDE (Integrated Development Environment):

- Has all the features of a great editor, but also adds features to help professional, and enthusiastic amateur programmers get their work done faster

### [Additional Helpful Resources](https://www.linkedin.com/learning/learning-the-javascript-language-2/additional-helpful-resources?autoplay=true&resume=false)

#### Books:

- [Eloquent JavaScript by Marijn Haverbeke](http://eloquentjavascript.net/)
  - Book
  - Available online for Free
  - Not short, but is excellent

- [JavaScript Books for Programmers by Dr. Axel Rauschmayer](http://exploringjs.com/)
  - Series of JavaScript books available
  - Can read for Free in your browser
  - Goes into tremendous depth, more of a resource than books to read straight through
  - Cover all current and upcoming versions of JavaScript

- [You Don't Know JS series by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS)
  - A series of books
  - Short, very readable, and excellent
  - Can read for Free on his GitHub site
  - Also has a series of JavaScript video courses

- [The Good Parts by Douglas Crockford](https://shop.oreilly.com/product/9780596517748.do)
  - Older than the other books mentioned
  - Pretty technical, no words are wasted
  - [Unofficial Companion Site](https://github.com/dwyl/Javascript-the-Good-Parts-notes)

#### Other Online Resources:

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  - Has the finest online reference material on JavaScript and other web technologies, such as HTML, CSS, etc
  - Good example code for almost everything that you might want to know about

- [Can I Use](https://caniuse.com/)
  - A compendium of information on browser support for various features of JavaScript and other web technologies

- [Quirksmode](https://quirksmode.org/)
  - Been around for a very long time in internet years
  - Remains a great place to find out what works where
