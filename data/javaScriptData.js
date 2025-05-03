export const javaScriptData = {
  arrays: {
    title: "JavaScript Arrays",
    description:
      "Learn how to use arrays in JavaScript for storing and manipulating collections of data.",
    pages: [
      {
        title: "Introduction to Arrays",
        content: `
# JavaScript Arrays

Arrays are ordered, mutable collections in JavaScript that can hold items of different types.

\`\`\`javascript
// Creating an array
const myArray = [1, "apple", 3.14];
// Accessing elements
console.log(myArray[0]); // Output: 1
\`\`\`

Key concepts:
- **Ordered**: Items maintain their position.
- **Mutable**: Arrays can be modified after creation.
- **Zero-based indexing**: Access items using indices starting from 0.
        `,
      },
      {
        title: "Array Methods",
        content: `
# Array Methods

Arrays support various methods for manipulation.

\`\`\`javascript
const fruits = ["apple", "banana"];
// Adding elements
fruits.push("orange"); // ["apple", "banana", "orange"]
fruits.splice(1, 0, "grape"); // ["apple", "grape", "banana", "orange"]
// Removing elements
fruits.splice(2, 1); // ["apple", "grape", "orange"]
const popped = fruits.pop(); // ["apple", "grape"], popped = "orange"
\`\`\`

Common methods:
- **push()**: Adds an item to the end.
- **splice()**: Adds or removes items at a specific index.
- **pop()**: Removes and returns the last item.
- **shift()**: Removes and returns the first item.
        `,
      },
      {
        title: "Array Iteration",
        content: `
# Array Iteration

JavaScript provides methods to iterate over arrays.

\`\`\`javascript
const numbers = [1, 2, 3, 4];
// Using map
const squares = numbers.map(x => x * x); // [1, 4, 9, 16]
// Using filter
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]
\`\`\`

Tips:
- Use **map()** to transform elements.
- Use **filter()** to select elements based on a condition.
- Prefer **forEach()** for side effects without returning a new array.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you add an item to the end of an array?",
        options: [
          "array.splice(item)",
          "array.push(item)",
          "array.add(item)",
          "array.append(item)",
        ],
        answer: 1,
      },
      {
        question: "What does `array.pop()` do?",
        options: [
          "Removes the first item",
          "Removes and returns the last item",
          "Adds an item to the end",
          "Clears the array",
        ],
        answer: 1,
      },
      {
        question: "What is the output of `[1, 2, 3].map(x => x * 2)`?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[2, 3, 4]"],
        answer: 1,
      },
    ],
  },
  objects: {
    title: "JavaScript Objects",
    description:
      "Master JavaScript objects for storing and managing key-value data.",
    pages: [
      {
        title: "Introduction to Objects",
        content: `
# JavaScript Objects

Objects are collections of key-value pairs in JavaScript, used to store structured data.

\`\`\`javascript
// Creating an object
const person = { name: "Alice", age: 25, city: "New York" };
// Accessing properties
console.log(person.name); // Output: "Alice"
\`\`\`

Key features:
- **Key-value pairs**: Keys are strings or symbols, values can be any type.
- **Mutable**: Objects can be modified after creation.
- **Dynamic**: Add or remove properties at any time.
        `,
      },
      {
        title: "Object Operations",
        content: `
# Object Operations

Objects support various ways to access and modify properties.

\`\`\`javascript
const car = { brand: "Toyota", model: "Camry" };
// Adding a property
car.year = 2020; // { brand: "Toyota", model: "Camry", year: 2020 }
// Deleting a property
delete car.model; // { brand: "Toyota", year: 2020 }
// Accessing with bracket notation
console.log(car["brand"]); // Output: "Toyota"
\`\`\`

Notes:
- Use dot notation (\`obj.key\`) for known keys.
- Use bracket notation (\`obj["key"]\`) for dynamic keys.
- Use **Object.keys()** to get an array of property names.
        `,
      },
      {
        title: "Object Methods",
        content: `
# Object Methods

Objects can store functions as properties, known as methods.

\`\`\`javascript
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
console.log(calculator.add(5, 3)); // Output: 8
// Using Object.assign
const defaults = { theme: "light" };
const settings = Object.assign({}, defaults, { font: "Arial" });
// settings = { theme: "light", font: "Arial" }
\`\`\`

Use cases:
- Define methods for object-specific behavior.
- Use **Object.assign()** to merge objects.
- Use **Object.entries()** to iterate over key-value pairs.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you access a property named 'key' in an object?",
        options: ["obj.key()", "obj[key]", "obj.key", "obj::key"],
        answer: 2,
      },
      {
        question: "How do you delete a property from an object?",
        options: [
          "remove obj.key",
          "delete obj.key",
          "obj.key = null",
          "obj.remove(key)",
        ],
        answer: 1,
      },
      {
        question: "What does `Object.keys({a: 1, b: 2})` return?",
        options: ["['a', 'b']", "[1, 2]", "{a: 1, b: 2}", "['a: 1', 'b: 2']"],
        answer: 0,
      },
    ],
  },
  functions: {
    title: "JavaScript Functions",
    description:
      "Learn how to create and use functions in JavaScript for reusable code.",
    pages: [
      {
        title: "Introduction to Functions",
        content: `
# JavaScript Functions

Functions are reusable blocks of code that perform specific tasks.

\`\`\`javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: "Hello, Alice!"
\`\`\`

Key concepts:
- **Declaration**: Define with the \`function\` keyword.
- **Parameters**: Inputs passed to the function.
- **Return**: Output of the function using the \`return\` statement.
        `,
      },
      {
        title: "Function Expressions",
        content: `
# Function Expressions

Functions can be assigned to variables or used as expressions.

\`\`\`javascript
// Function expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // Output: 12
// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 2)); // Output: 7
\`\`\`

Notes:
- **Function Expression**: Assign a function to a variable.
- **Arrow Functions**: Concise syntax with implicit return for single expressions.
- **Anonymous Functions**: Functions without a name, often used in expressions.
        `,
      },
      {
        title: "Default Parameters and Rest",
        content: `
# Default Parameters and Rest

Functions can have default parameters and collect multiple arguments.

\`\`\`javascript
// Default parameters
function greet(name = "Guest") {
  return "Welcome, " + name + "!";
}
console.log(greet()); // Output: "Welcome, Guest!"
// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
\`\`\`

Tips:
- Use default parameters for optional inputs.
- Use rest parameters (\`...args\`) to handle variable arguments.
- Combine with arrow functions for concise code.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you define a function in JavaScript?",
        options: ["func name()", "function name()", "def name()", "fn name()"],
        answer: 1,
      },
      {
        question: "What does an arrow function do?",
        options: [
          "Always returns undefined",
          "Provides concise function syntax",
          "Loops over arrays",
          "Creates objects",
        ],
        answer: 1,
      },
      {
        question: "What are rest parameters used for?",
        options: [
          "Setting default values",
          "Collecting multiple arguments",
          "Returning multiple values",
          "Defining function scope",
        ],
        answer: 1,
      },
    ],
  },
  loops: {
    title: "JavaScript Loops",
    description:
      "Understand loops in JavaScript for iterating over data and automating tasks.",
    pages: [
      {
        title: "Introduction to Loops",
        content: `
# JavaScript Loops

Loops execute a block of code repeatedly until a condition is met.

\`\`\`javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
\`\`\`

Key concepts:
- **For Loop**: Iterates with a counter.
- **Condition**: Determines when the loop stops.
- **Block**: Code executed each iteration.
        `,
      },
      {
        title: "While and Do-While Loops",
        content: `
# While and Do-While Loops

While loops run as long as a condition is true.

\`\`\`javascript
// While loop
let count = 0;
while (count < 3) {
  console.log(count); // Output: 0, 1, 2
  count++;
}
// Do-while loop
let num = 0;
do {
  console.log(num); // Output: 0
  num++;
} while (num < 1);
\`\`\`

Notes:
- **While**: Checks condition before running.
- **Do-While**: Runs at least once before checking condition.
- **Break**: Exits the loop early.
        `,
      },
      {
        title: "Looping Over Arrays and Objects",
        content: `
# Looping Over Arrays and Objects

Use specialized loops for collections.

\`\`\`javascript
// For...of loop for arrays
const fruits = ["apple", "banana"];
for (const fruit of fruits) {
  console.log(fruit); // Output: apple, banana
}
// For...in loop for objects
const person = { name: "Bob", age: 30 };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`); // Output: name: Bob, age: 30
}
\`\`\`

Tips:
- Use **for...of** for arrays and iterables.
- Use **for...in** for object properties.
- Avoid **for...in** for arrays due to prototype properties.
        `,
      },
    ],
    quiz: [
      {
        question: "Which loop checks the condition before running?",
        options: ["Do-while", "While", "For...in", "For...of"],
        answer: 1,
      },
      {
        question: "What is the best loop for iterating over array elements?",
        options: ["for...in", "for...of", "while", "do-while"],
        answer: 1,
      },
      {
        question: "What does the `break` statement do in a loop?",
        options: [
          "Skips one iteration",
          "Exits the loop",
          "Restarts the loop",
          "Pauses the loop",
        ],
        answer: 1,
      },
    ],
  },
  conditionals: {
    title: "JavaScript Conditionals",
    description:
      "Master conditional statements in JavaScript for decision-making in code.",
    pages: [
      {
        title: "Introduction to Conditionals",
        content: `
# JavaScript Conditionals

Conditional statements control the flow of execution based on conditions.

\`\`\`javascript
// If statement
const age = 20;
if (age >= 18) {
  console.log("Adult"); // Output: Adult
}
\`\`\`

Key concepts:
- **If**: Executes code if a condition is true.
- **Boolean Expressions**: Conditions evaluate to true or false.
- **Braces**: Define the block of code to execute.
        `,
      },
      {
        title: "Else and Else-If",
        content: `
# Else and Else-If

Handle multiple conditions with else and else-if.

\`\`\`javascript
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B"); // Output: B
} else {
  console.log("C");
}
\`\`\`

Notes:
- **Else-If**: Checks additional conditions.
- **Else**: Default case if no conditions match.
- **Order**: Conditions are evaluated top-down.
        `,
      },
      {
        title: "Switch and Ternary",
        content: `
# Switch and Ternary

Use alternative conditional structures for specific cases.

\`\`\`javascript
// Switch statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week"); // Output: Start of week
    break;
  default:
    console.log("Other day");
}
// Ternary operator
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes
\`\`\`

Tips:
- Use **switch** for multiple exact matches.
- Use **ternary** for concise single conditions.
- Always include **break** in switch cases to avoid fall-through.
        `,
      },
    ],
    quiz: [
      {
        question: "What does an `if` statement do?",
        options: [
          "Loops over an array",
          "Executes code if a condition is true",
          "Defines a function",
          "Creates an object",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of `else` in a conditional?",
        options: [
          "Adds a new condition",
          "Handles the default case",
          "Breaks the loop",
          "Skips the condition",
        ],
        answer: 1,
      },
      {
        question: "What does the ternary operator return?",
        options: [
          "A loop result",
          "One of two values based on a condition",
          "A function",
          "An array",
        ],
        answer: 1,
      },
    ],
  },
  promises: {
    title: "JavaScript Promises",
    description:
      "Learn to handle asynchronous operations in JavaScript using promises.",
    pages: [
      {
        title: "Introduction to Promises",
        content: `
# JavaScript Promises

Promises represent the eventual completion (or failure) of an asynchronous operation.

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
myPromise.then(result => console.log(result)); // Output: Success!
\`\`\`

Key concepts:
- **States**: Pending, fulfilled, or rejected.
- **Resolve**: Completes the promise successfully.
- **Reject**: Fails the promise with an error.
        `,
      },
      {
        title: "Chaining Promises",
        content: `
# Chaining Promises

Promises can be chained to handle sequential asynchronous tasks.

\`\`\`javascript
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve(10), 1000);
});
fetchData
  .then(num => num * 2)
  .then(result => console.log(result)) // Output: 20
  .catch(error => console.log("Error:", error));
\`\`\`

Notes:
- **then()**: Handles resolved values.
- **catch()**: Handles errors.
- **Chaining**: Each \`then\` returns a new promise.
        `,
      },
      {
        title: "Promise Methods",
        content: `
# Promise Methods

Use static methods to handle multiple promises.

\`\`\`javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 1000));
Promise.all([promise1, promise2])
  .then(values => console.log(values)); // Output: [3, 5]
Promise.race([promise1, promise2])
  .then(value => console.log(value)); // Output: 3
\`\`\`

Tips:
- **Promise.all()**: Resolves when all promises resolve.
- **Promise.race()**: Resolves with the first settled promise.
- **Error Handling**: Use \`catch\` for robust code.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a JavaScript promise?",
        options: [
          "A synchronous function",
          "A representation of an asynchronous operation",
          "An array method",
          "A loop construct",
        ],
        answer: 1,
      },
      {
        question: "What does `promise.then()` do?",
        options: [
          "Rejects the promise",
          "Handles the resolved value",
          "Creates a new promise",
          "Cancels the promise",
        ],
        answer: 1,
      },
      {
        question: "What does `Promise.all()` return?",
        options: [
          "The first resolved value",
          "An array of all resolved values",
          "The last resolved value",
          "A rejected promise",
        ],
        answer: 1,
      },
    ],
  },
  asyncAwait: {
    title: "JavaScript Async/Await",
    description:
      "Master async/await for cleaner asynchronous code in JavaScript.",
    pages: [
      {
        title: "Introduction to Async/Await",
        content: `
# JavaScript Async/Await

Async/await is syntactic sugar for working with promises.

\`\`\`javascript
async function fetchData() {
  return "Data received!";
}
fetchData().then(data => console.log(data)); // Output: Data received!
\`\`\`

Key concepts:
- **async**: Declares a function that returns a promise.
- **await**: Pauses execution until a promise resolves.
- **Promises**: Async/await builds on promise mechanics.
        `,
      },
      {
        title: "Using Await",
        content: `
# Using Await

Await simplifies promise handling within async functions.

\`\`\`javascript
async function getNumber() {
  const promise = new Promise(resolve => setTimeout(() => resolve(42), 1000));
  const result = await promise;
  return result * 2;
}
getNumber().then(result => console.log(result)); // Output: 84
\`\`\`

Notes:
- **await**: Only works inside async functions.
- **Error Handling**: Use try/catch for rejected promises.
- **Sequential**: Await pauses execution, making code synchronous-like.
        `,
      },
      {
        title: "Parallel Async Operations",
        content: `
# Parallel Async Operations

Run multiple promises concurrently with async/await.

\`\`\`javascript
async function fetchMultiple() {
  const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 500));
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
}
fetchMultiple().then(sum => console.log(sum)); // Output: 3
\`\`\`

Tips:
- Use **Promise.all()** for parallel execution.
- Handle errors with try/catch blocks.
- Optimize performance by avoiding unnecessary awaits.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `async` keyword do?",
        options: [
          "Makes a function synchronous",
          "Ensures a function returns a promise",
          "Loops over an array",
          "Creates an object",
        ],
        answer: 1,
      },
      {
        question: "Where can the `await` keyword be used?",
        options: [
          "In any function",
          "Only in async functions",
          "In loops only",
          "In object methods",
        ],
        answer: 1,
      },
      {
        question:
          "How do you run multiple promises concurrently with async/await?",
        options: [
          "Use multiple await statements",
          "Use Promise.all()",
          "Use a for loop",
          "Use switch",
        ],
        answer: 1,
      },
    ],
  },
  destructuring: {
    title: "JavaScript Destructuring",
    description:
      "Learn to extract data from arrays and objects using destructuring.",
    pages: [
      {
        title: "Introduction to Destructuring",
        content: `
# Destructuring

Destructuring allows extracting values from arrays or objects into variables.

\`\`\`javascript
// Array destructuring
const [first, second] = [1, 2, 3];
console.log(first, second); // Output: 1 2
// Object destructuring
const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Output: Alice 25
\`\`\`

Key concepts:
- **Array Destructuring**: Uses square brackets to assign array elements.
- **Object Destructuring**: Uses curly braces to assign object properties.
- **Conciseness**: Simplifies variable assignment.
        `,
      },
    ],
    quiz: [
      {
        question: "What does object destructuring use to extract properties?",
        options: [
          "Square brackets",
          "Curly braces",
          "Parentheses",
          "Angle brackets",
        ],
        answer: 1,
      },
    ],
  },
  modules: {
    title: "JavaScript Modules",
    description:
      "Understand how to use ES modules for organizing JavaScript code.",
    pages: [
      {
        title: "Introduction to Modules",
        content: `
# Modules

ES modules allow you to split code into reusable files.

\`\`\`javascript
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5
\`\`\`

Key concepts:
- **export**: Makes functions or variables available to other files.
- **import**: Brings exported items into a file.
- **Modularity**: Promotes organized, reusable code.
        `,
      },
    ],
    quiz: [
      {
        question:
          "What keyword is used to bring code into a JavaScript module?",
        options: ["require", "import", "export", "include"],
        answer: 1,
      },
    ],
  },
  closures: {
    title: "JavaScript Closures",
    description: "Master closures in JavaScript for maintaining private state.",
    pages: [
      {
        title: "Introduction to Closures",
        content: `
# Closures

A closure is a function that retains access to its outer scope's variables.

\`\`\`javascript
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
\`\`\`

Key concepts:
- **Closure**: Inner function accessing outer variables.
- **Private State**: Variables persist between calls.
- **Encapsulation**: Hides implementation details.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a closure retain access to?",
        options: [
          "Global variables only",
          "Its outer scope's variables",
          "Inner function parameters",
          "Temporary variables",
        ],
        answer: 1,
      },
    ],
  },
  prototypes: {
    title: "JavaScript Prototypes",
    description: "Learn about prototypes in JavaScript for object inheritance.",
    pages: [
      {
        title: "Introduction to Prototypes",
        content: `
# Prototypes

Prototypes enable inheritance in JavaScript by linking objects.

\`\`\`javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return "Hello, " + this.name;
};
const alice = new Person("Alice");
console.log(alice.greet()); // Output: Hello, Alice
\`\`\`

Key concepts:
- **Prototype**: Shared object for inherited properties.
- **Constructor**: Creates instances linked to a prototype.
- **Inheritance**: Methods are accessed via the prototype chain.
        `,
      },
    ],
    quiz: [
      {
        question: "What is the role of a prototype in JavaScript?",
        options: [
          "Stores private data",
          "Enables object inheritance",
          "Defines function scope",
          "Handles asynchronous code",
        ],
        answer: 1,
      },
    ],
  },
  asyncIterators: {
    title: "JavaScript Async Iterators",
    description:
      "Understand async iterators for handling asynchronous data streams.",
    pages: [
      {
        title: "Introduction to Async Iterators",
        content: `
# Async Iterators

Async iterators allow iteration over asynchronous data sources.

\`\`\`javascript
async function* asyncGenerator() {
  yield await new Promise(resolve => setTimeout(() => resolve(1), 1000));
  yield await new Promise(resolve => setTimeout(() => resolve(2), 500));
}
(async () => {
  for await (const value of asyncGenerator()) {
    console.log(value); // Output: 1, 2
  }
})();
\`\`\`

Key concepts:
- **async function***: Defines an async generator.
- **for await...of**: Iterates over async iterables.
- **Yield**: Produces values asynchronously.
        `,
      },
    ],
    quiz: [
      {
        question: "What loop is used to iterate over async iterators?",
        options: ["for...in", "for...of", "for await...of", "while"],
        answer: 2,
      },
    ],
  },
  strings: {
    title: "JavaScript Strings",
    description:
      "Learn to manipulate strings in JavaScript for text processing.",
    pages: [
      {
        title: "Introduction to Strings",
        content: `
# Strings

Strings are immutable sequences of characters in JavaScript.

\`\`\`javascript
// Creating a string
const text = "Hello, World!";
// Accessing characters
console.log(text[0]); // Output: H
\`\`\`

Key concepts:
- **Immutable**: Strings cannot be modified in place.
- **Indexed**: Access characters using zero-based indices.
- **Quotes**: Use single, double, or backticks for string literals.
        `,
      },
      {
        title: "String Methods",
        content: `
# String Methods

JavaScript provides many methods for string manipulation.

\`\`\`javascript
const text = "  Hello, World!  ";
// Common methods
console.log(text.trim()); // Output: "Hello, World!"
console.log(text.toLowerCase()); // Output: "  hello, world!  "
console.log(text.replace("World", "JavaScript")); // Output: "  Hello, JavaScript!  "
\`\`\`

Common methods:
- **trim()**: Removes leading/trailing whitespace.
- **toLowerCase()**/**toUpperCase()**: Converts case.
- **replace()**: Replaces a substring with another.
        `,
      },
    ],
    quiz: [
      {
        question: "Are JavaScript strings mutable?",
        options: [
          "Yes, they can be changed",
          "No, they are immutable",
          "Only when empty",
          "Only with methods",
        ],
        answer: 1,
      },
      {
        question: "What does `text.trim()` do?",
        options: [
          "Converts to lowercase",
          "Removes whitespace",
          "Replaces text",
          "Splits the string",
        ],
        answer: 1,
      },
    ],
  },
  templateLiterals: {
    title: "JavaScript Template Literals",
    description:
      "Master template literals for dynamic string creation in JavaScript.",
    pages: [
      {
        title: "Introduction to Template Literals",
        content: `
# Template Literals

Template literals are strings delimited by backticks, allowing embedded expressions.

\`\`\`javascript
const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Output: Hello, Alice!
// Multi-line strings
const message = \`
  Line 1
  Line 2
\`;
console.log(message); // Output: Line 1\\nLine 2
\`\`\`

Key concepts:
- **Backticks**: Use \`\`\` instead of quotes.
- **Expressions**: Embed variables or code with \`\${}\`.
- **Multi-line**: Supports line breaks without concatenation.
        `,
      },
      {
        title: "Tagged Templates",
        content: `
# Tagged Templates

Tagged templates allow custom processing of template literals.

\`\`\`javascript
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    \`\${result}\${str}<b>\${values[i] || ""}</b>\`, "");
}
const name = "Bob";
const age = 30;
const output = highlight\`Name: \${name}, Age: \${age}\`;
console.log(output); // Output: Name: <b>Bob</b>, Age: <b>30</b>
\`\`\`

Tips:
- Use tags to manipulate string parts and values.
- Common for formatting, sanitization, or localization.
- Keep tag functions simple for readability.
        `,
      },
    ],
    quiz: [
      {
        question: "What delimits a template literal in JavaScript?",
        options: ["Single quotes", "Double quotes", "Backticks", "Parentheses"],
        answer: 2,
      },
      {
        question: "What does a tagged template do?",
        options: [
          "Creates a loop",
          "Processes template literal parts",
          "Defines a function",
          "Handles errors",
        ],
        answer: 1,
      },
    ],
  },
  eventLoop: {
    title: "JavaScript Event Loop",
    description:
      "Understand the event loop for managing asynchronous operations in JavaScript.",
    pages: [
      {
        title: "Introduction to the Event Loop",
        content: `
# Event Loop

The event loop manages asynchronous tasks in JavaScript's single-threaded environment.

\`\`\`javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Output: Start, End, Promise, Timeout
\`\`\`

Key concepts:
- **Call Stack**: Executes synchronous code.
- **Task Queue**: Holds asynchronous callbacks (e.g., setTimeout).
- **Microtask Queue**: Handles promise callbacks with higher priority.
        `,
      },
      {
        title: "Task vs Microtask",
        content: `
# Task vs Microtask

Tasks and microtasks are processed differently by the event loop.

\`\`\`javascript
setTimeout(() => console.log("Task"), 0); // Task queue
Promise.resolve()
  .then(() => console.log("Microtask 1"))
  .then(() => console.log("Microtask 2"));
console.log("Sync");
// Output: Sync, Microtask 1, Microtask 2, Task
\`\`\`

Notes:
- **Microtasks**: Processed before tasks (e.g., promises).
- **Tasks**: Processed after microtasks (e.g., setTimeout, I/O).
- **Event Loop**: Checks queues after each call stack clear.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the event loop manage in JavaScript?",
        options: [
          "Synchronous functions",
          "Asynchronous operations",
          "Object properties",
          "String methods",
        ],
        answer: 1,
      },
      {
        question: "Which queue has higher priority in the event loop?",
        options: ["Task queue", "Microtask queue", "Call stack", "Sync queue"],
        answer: 1,
      },
    ],
  },
  weakMapWeakSet: {
    title: "JavaScript WeakMap and WeakSet",
    description:
      "Learn WeakMap and WeakSet for managing weakly referenced objects.",
    pages: [
      {
        title: "Introduction to WeakMap and WeakSet",
        content: `
# WeakMap and WeakSet

WeakMap and WeakSet store objects with weak references, allowing garbage collection.

\`\`\`javascript
// WeakMap
const weakMap = new WeakMap();
const key = {};
weakMap.set(key, "value");
console.log(weakMap.get(key)); // Output: value
// WeakSet
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
\`\`\`

Key concepts:
- **Weak References**: Objects can be garbage collected if no other references exist.
- **WeakMap**: Keys are objects, values are any type.
- **WeakSet**: Stores objects only, no duplicates.
        `,
      },
      {
        title: "Use Cases",
        content: `
# Use Cases

WeakMap and WeakSet are ideal for metadata and temporary storage.

\`\`\`javascript
// WeakMap for private data
const privateData = new WeakMap();
class User {
  constructor(name) {
    privateData.set(this, { name });
  }
  getName() {
    return privateData.get(this).name;
  }
}
const user = new User("Alice");
console.log(user.getName()); // Output: Alice
\`\`\`

Tips:
- Use **WeakMap** for associating data with objects without preventing GC.
- Use **WeakSet** for tracking unique objects.
- Non-iterable: Cannot loop over entries due to weak references.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a key feature of WeakMap?",
        options: [
          "Stores primitive keys",
          "Prevents garbage collection",
          "Uses weak references for keys",
          "Is iterable",
        ],
        answer: 2,
      },
      {
        question: "What can a WeakSet store?",
        options: [
          "Primitive values",
          "Objects only",
          "Key-value pairs",
          "Strings only",
        ],
        answer: 1,
      },
    ],
  },
  proxies: {
    title: "JavaScript Proxies",
    description:
      "Master Proxies for intercepting and customizing object operations.",
    pages: [
      {
        title: "Introduction to Proxies",
        content: `
# Proxies

Proxies allow you to intercept and customize operations on objects.

\`\`\`javascript
const target = { name: "Alice" };
const handler = {
  get(target, prop) {
    return \`\${prop} is \${target[prop]}\`;
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name); // Output: name is Alice
\`\`\`

Key concepts:
- **Proxy**: Wraps an object to intercept operations.
- **Handler**: Defines traps like get, set, or deleteProperty.
- **Use case**: Logging, validation, or custom behavior.
        `,
      },
      {
        title: "Common Traps",
        content: `
# Common Traps

Proxy handlers can define various traps for object operations.

\`\`\`javascript
const target = { value: 42 };
const handler = {
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    target[prop] = value;
    return true;
  }
};
const proxy = new Proxy(target, handler);
proxy.value = 100; // Output: Setting value to 100
console.log(target.value); // Output: 100
\`\`\`

Tips:
- Use **get**/**set** for property access and modification.
- Use **deleteProperty** for intercepting deletions.
- Ensure traps return correct values (e.g., true for set).
        `,
      },
    ],
    quiz: [
      {
        question: "What does a Proxy do in JavaScript?",
        options: [
          "Creates a new object",
          "Intercepts object operations",
          "Handles asynchronous tasks",
          "Stores weak references",
        ],
        answer: 1,
      },
      {
        question: "What is a Proxy handler?",
        options: [
          "A function that creates objects",
          "An object defining traps",
          "A promise resolver",
          "A loop construct",
        ],
        answer: 1,
      },
    ],
  },
};
