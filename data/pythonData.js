export const pythonData = {
  lists: {
    title: "Python Lists",
    description:
      "Learn how to use lists in Python for storing and manipulating collections of data.",
    pages: [
      {
        title: "Introduction to Lists",
        content: `
# Python Lists

Lists are ordered, mutable collections in Python that can hold items of different types.

\`\`\`python
# Creating a list
my_list = [1, "apple", 3.14]
# Accessing elements
print(my_list[0])  # Output: 1
\`\`\`

Key concepts:
- **Ordered**: Items maintain their position.
- **Mutable**: Lists can be modified after creation.
- **Indexing**: Access items using zero-based indices.
        `,
      },
      {
        title: "List Operations",
        content: `
# List Operations

Lists support various methods and operations for manipulation.

\`\`\`python
fruits = ["apple", "banana"]
# Adding elements
fruits.append("orange")  # ["apple", "banana", "orange"]
fruits.insert(1, "grape")  # ["apple", "grape", "banana", "orange"]
# Removing elements
fruits.remove("banana")  # ["apple", "grape", "orange"]
popped = fruits.pop()  # ["apple", "grape"], popped = "orange"
\`\`\`

Common methods:
- **append()**: Adds an item to the end.
- **insert()**: Adds an item at a specific index.
- **remove()**: Removes the first occurrence of an item.
- **pop()**: Removes and returns an item (defaults to last).
        `,
      },
      {
        title: "List Comprehensions",
        content: `
# List Comprehensions

List comprehensions provide a concise way to create lists.

\`\`\`python
# Basic comprehension
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
# With condition
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]
\`\`\`

Tips:
- Use for quick list creation from iterables.
- Combine with conditions for filtering.
- Keep comprehensions readable to avoid complexity.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you add an item to the end of a list?",
        options: [
          "list.insert(item)",
          "list.append(item)",
          "list.add(item)",
          "list.push(item)",
        ],
        answer: 1,
      },
      {
        question: "What does `list.pop()` do?",
        options: [
          "Removes the first item",
          "Removes and returns the last item",
          "Adds an item to the end",
          "Clears the list",
        ],
        answer: 1,
      },
      {
        question: "What is the output of `[x*2 for x in [1, 2, 3]]`?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[2, 3, 4]"],
        answer: 1,
      },
    ],
  },
  tuples: {
    title: "Python Tuples",
    description: "Master Python tuples for immutable, ordered data storage.",
    pages: [
      {
        title: "Introduction to Tuples",
        content: `
# Python Tuples

Tuples are ordered, immutable collections in Python, often used for fixed data.

\`\`\`python
# Creating a tuple
my_tuple = (1, "hello", 2.5)
# Accessing elements
print(my_tuple[1])  # Output: "hello"
\`\`\`

Key features:
- **Immutable**: Cannot be modified after creation.
- **Ordered**: Maintains item positions.
- **Lightweight**: More memory-efficient than lists.
        `,
      },
      {
        title: "Tuple Operations",
        content: `
# Tuple Operations

Tuples support indexing, slicing, and basic operations.

\`\`\`python
coords = (10, 20)
# Slicing
print(coords[0:2])  # (10, 20)
# Concatenation
new_tuple = coords + (30,)  # (10, 20, 30)
# Unpacking
x, y = coords  # x = 10, y = 20
\`\`\`

Notes:
- Use commas to create single-item tuples (e.g., \`(item,)\`).
- Unpacking assigns tuple values to variables.
- Tuples are hashable, suitable for dictionary keys.
        `,
      },
      {
        title: "When to Use Tuples",
        content: `
# When to Use Tuples

Tuples are ideal for data that shouldn’t change.

\`\`\`python
# As dictionary keys
locations = {(0, 0): "origin", (1, 1): "point"}
# Returning multiple values
def get_point():
    return (5, 10)
x, y = get_point()  # x = 5, y = 10
\`\`\`

Use cases:
- Store constants or fixed data.
- Return multiple values from functions.
- Optimize performance for read-only data.
        `,
      },
    ],
    quiz: [
      {
        question: "Why are tuples immutable?",
        options: [
          "To allow modifications",
          "To prevent changes after creation",
          "To make them resizable",
          "To reduce memory usage",
        ],
        answer: 1,
      },
      {
        question: "How do you create a single-item tuple?",
        options: ["(item)", "(item,)", "[item]", "{item}"],
        answer: 1,
      },
      {
        question: "Can a tuple be used as a dictionary key?",
        options: [
          "No, only lists can",
          "Yes, because tuples are hashable",
          "Only if it contains strings",
          "Only if it’s empty",
        ],
        answer: 1,
      },
    ],
  },
  dictionaries: {
    title: "Python Dictionaries",
    description:
      "Learn how to use dictionaries in Python for key-value data storage.",
    pages: [
      {
        title: "Introduction to Dictionaries",
        content: `
# Python Dictionaries

Dictionaries are mutable, unordered collections of key-value pairs in Python.

\`\`\`python
# Creating a dictionary
person = {"name": "Alice", "age": 25}
# Accessing values
print(person["name"])  # Output: "Alice"
\`\`\`

Key concepts:
- **Key-Value Pairs**: Keys are unique and immutable, values can be any type.
- **Mutable**: Dictionaries can be modified after creation.
- **Unordered**: No guaranteed order of keys (prior to Python 3.7).
        `,
      },
      {
        title: "Dictionary Operations",
        content: `
# Dictionary Operations

Dictionaries support various methods to add, remove, and access items.

\`\`\`python
car = {"brand": "Toyota", "model": "Camry"}
# Adding a key-value pair
car["year"] = 2020  # {"brand": "Toyota", "model": "Camry", "year": 2020}
# Removing a key-value pair
del car["model"]  # {"brand": "Toyota", "year": 2020}
# Accessing with get
print(car.get("brand", "Unknown"))  # Output: "Toyota"
\`\`\`

Notes:
- Use **get()** to avoid KeyError with missing keys.
- Use **keys()**, **values()**, or **items()** to access dictionary components.
- Use **del** to remove key-value pairs.
        `,
      },
      {
        title: "Dictionary Comprehensions",
        content: `
# Dictionary Comprehensions

Dictionary comprehensions create dictionaries concisely.

\`\`\`python
# Basic comprehension
squares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
# With condition
evens = {x: x**2 for x in range(10) if x % 2 == 0}  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
\`\`\`

Tips:
- Use for quick dictionary creation.
- Combine with conditions for filtering.
- Ensure keys are unique to avoid overwriting.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you access a value in a dictionary?",
        options: [
          "dict.value(key)",
          "dict[key]",
          "dict.get(value)",
          "dict::key",
        ],
        answer: 1,
      },
      {
        question: "What does `dict.get(key, default)` do?",
        options: [
          "Removes the key",
          "Returns the value or default if key is missing",
          "Adds a new key-value pair",
          "Raises an error",
        ],
        answer: 1,
      },
      {
        question: "What is the output of `{x: x*2 for x in [1, 2]}`?",
        options: ["{1: 2, 2: 4}", "[2, 4]", "{1: 1, 2: 2}", "{2: 1, 4: 2}"],
        answer: 0,
      },
    ],
  },
  functions: {
    title: "Python Functions",
    description: "Master Python functions for reusable and modular code.",
    pages: [
      {
        title: "Introduction to Functions",
        content: `
# Python Functions

Functions are reusable blocks of code that perform specific tasks.

\`\`\`python
# Defining a function
def greet(name):
    return f"Hello, {name}!"
print(greet("Alice"))  # Output: "Hello, Alice!"
\`\`\`

Key concepts:
- **Definition**: Use the \`def\` keyword.
- **Parameters**: Inputs passed to the function.
- **Return**: Output of the function using the \`return\` statement.
        `,
      },
      {
        title: "Default and Keyword Arguments",
        content: `
# Default and Keyword Arguments

Functions can have default values and accept keyword arguments.

\`\`\`python
# Default arguments
def greet(name="Guest"):
    return f"Welcome, {name}!"
print(greet())  # Output: "Welcome, Guest!"
# Keyword arguments
def describe_pet(name, animal="dog"):
    return f"{name} is a {animal}"
print(describe_pet(animal="cat", name="Whiskers"))  # Output: "Whiskers is a cat"
\`\`\`

Notes:
- Default arguments provide optional parameters.
- Keyword arguments allow flexible argument order.
- Avoid mutable default arguments (e.g., lists).
        `,
      },
      {
        title: "Variable Arguments",
        content: `
# Variable Arguments

Functions can accept a variable number of arguments.

\`\`\`python
# *args for variable positional arguments
def sum_numbers(*args):
    return sum(args)
print(sum_numbers(1, 2, 3))  # Output: 6
# **kwargs for variable keyword arguments
def print_info(**kwargs):
    return kwargs
print(print_info(name="Bob", age=30))  # Output: {'name': 'Bob', 'age': 30}
\`\`\`

Tips:
- Use **\*args** for multiple positional arguments.
- Use **\*\*kwargs** for multiple keyword arguments.
- Combine with regular parameters carefully.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you define a function in Python?",
        options: [
          "function name():",
          "def name():",
          "fn name():",
          "func name():",
        ],
        answer: 1,
      },
      {
        question: "What does a default argument do?",
        options: [
          "Requires a value",
          "Provides an optional value",
          "Raises an error",
          "Loops over arguments",
        ],
        answer: 1,
      },
      {
        question: "What does `**kwargs` collect?",
        options: [
          "Positional arguments",
          "Keyword arguments",
          "Default arguments",
          "Return values",
        ],
        answer: 1,
      },
    ],
  },
  loops: {
    title: "Python Loops",
    description:
      "Learn how to use loops in Python for iterating over data and automating tasks.",
    pages: [
      {
        title: "Introduction to Loops",
        content: `
# Python Loops

Loops execute a block of code repeatedly based on a condition or iterable.

\`\`\`python
# For loop
for i in range(5):
    print(i)  # Output: 0, 1, 2, 3, 4
\`\`\`

Key concepts:
- **For Loop**: Iterates over an iterable (e.g., list, range).
- **Indentation**: Defines the loop body.
- **Iterable**: Any object that can be looped over.
        `,
      },
      {
        title: "While Loops",
        content: `
# While Loops

While loops run as long as a condition is true.

\`\`\`python
count = 0
while count < 3:
    print(count)  # Output: 0, 1, 2
    count += 1
\`\`\`

Notes:
- **Condition**: Evaluated before each iteration.
- **Break**: Exits the loop early.
- **Continue**: Skips to the next iteration.
        `,
      },
      {
        title: "Looping Over Collections",
        content: `
# Looping Over Collections

Python makes it easy to loop over lists, dictionaries, and more.

\`\`\`python
# Looping over a list
fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)  # Output: apple, banana
# Looping over a dictionary
person = {"name": "Bob", "age": 30}
for key, value in person.items():
    print(f"{key}: {value}")  # Output: name: Bob, age: 30
\`\`\`

Tips:
- Use **enumerate()** to get indices and values.
- Use **items()** for dictionary key-value pairs.
- Avoid modifying collections while looping.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a `for` loop iterate over?",
        options: [
          "A function",
          "An iterable",
          "A condition",
          "A dictionary key",
        ],
        answer: 1,
      },
      {
        question: "What does the `break` statement do?",
        options: [
          "Skips one iteration",
          "Exits the loop",
          "Restarts the loop",
          "Pauses the loop",
        ],
        answer: 1,
      },
      {
        question: "How do you loop over dictionary key-value pairs?",
        options: ["dict.keys()", "dict.values()", "dict.items()", "dict.get()"],
        answer: 2,
      },
    ],
  },
  conditionals: {
    title: "Python Conditionals",
    description: "Master conditional statements in Python for decision-making.",
    pages: [
      {
        title: "Introduction to Conditionals",
        content: `
# Python Conditionals

Conditional statements control code execution based on conditions.

\`\`\`python
# If statement
age = 20
if age >= 18:
    print("Adult")  # Output: Adult
\`\`\`

Key concepts:
- **If**: Executes code if a condition is true.
- **Boolean Expressions**: Evaluate to True or False.
- **Indentation**: Defines the scope of the conditional block.
        `,
      },
      {
        title: "Else and Elif",
        content: `
# Else and Elif

Handle multiple conditions with else and elif.

\`\`\`python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")  # Output: B
else:
    print("C")
\`\`\`

Notes:
- **Elif**: Checks additional conditions.
- **Else**: Default case if no conditions match.
- **Order**: Conditions are evaluated sequentially.
        `,
      },
      {
        title: "Ternary and Logical Operators",
        content: `
# Ternary and Logical Operators

Use concise conditionals and combine conditions.

\`\`\`python
# Ternary operator
status = "Adult" if age >= 18 else "Minor"
print(status)  # Output: Adult
# Logical operators
if age >= 18 and score > 80:
    print("Eligible")  # Output: Eligible
\`\`\`

Tips:
- Use **and**, **or**, **not** for complex conditions.
- Use ternary for single-line conditionals.
- Keep conditions readable to avoid confusion.
        `,
      },
    ],
    quiz: [
      {
        question: "What does an `if` statement do?",
        options: [
          "Loops over a list",
          "Executes code if a condition is true",
          "Defines a function",
          "Creates a dictionary",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of `elif`?",
        options: [
          "Ends the loop",
          "Checks additional conditions",
          "Skips the condition",
          "Handles errors",
        ],
        answer: 1,
      },
      {
        question: "What does `x if y else z` represent?",
        options: [
          "A loop",
          "A ternary operator",
          "A function call",
          "A dictionary method",
        ],
        answer: 1,
      },
    ],
  },
  classes: {
    title: "Python Classes",
    description: "Learn object-oriented programming in Python using classes.",
    pages: [
      {
        title: "Introduction to Classes",
        content: `
# Python Classes

Classes define blueprints for creating objects with attributes and methods.

\`\`\`python
# Defining a class
class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        return f"{self.name} says Woof!"
# Creating an object
dog = Dog("Buddy")
print(dog.bark())  # Output: "Buddy says Woof!"
\`\`\`

Key concepts:
- **Class**: Template for objects.
- **Object**: Instance of a class.
- **__init__**: Constructor for initializing attributes.
        `,
      },
      {
        title: "Class Attributes and Methods",
        content: `
# Class Attributes and Methods

Classes can have shared attributes and specialized methods.

\`\`\`python
class Car:
    wheels = 4  # Class attribute
    def __init__(self, brand):
        self.brand = brand  # Instance attribute
    def drive(self):
        return f"{self.brand} is driving!"
# Accessing attributes
car = Car("Toyota")
print(car.wheels)  # Output: 4
print(car.drive())  # Output: "Toyota is driving!"
\`\`\`

Notes:
- **Class Attributes**: Shared across all instances.
- **Instance Attributes**: Unique to each object.
- **Methods**: Functions defined in the class.
        `,
      },
      {
        title: "Inheritance",
        content: `
# Inheritance

Classes can inherit attributes and methods from other classes.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        pass
class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
cat = Cat("Whiskers")
print(cat.speak())  # Output: "Whiskers says Meow!"
\`\`\`

Tips:
- Use inheritance to reuse code.
- Override methods to customize behavior.
- Use **super()** to call parent class methods.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a Python class?",
        options: [
          "A loop structure",
          "A blueprint for objects",
          "A conditional statement",
          "A list method",
        ],
        answer: 1,
      },
      {
        question: "What does `__init__` do in a class?",
        options: [
          "Defines a loop",
          "Initializes instance attributes",
          "Creates a dictionary",
          "Ends the class",
        ],
        answer: 1,
      },
      {
        question: "What is inheritance in Python?",
        options: [
          "Creating a new list",
          "Reusing code from another class",
          "Defining a function",
          "Looping over objects",
        ],
        answer: 1,
      },
    ],
  },
  sets: {
    title: "Python Sets",
    description:
      "Learn how to use sets in Python for storing unique, unordered collections.",
    pages: [
      {
        title: "Introduction to Sets",
        content: `
# Python Sets

Sets are unordered, mutable collections of unique items in Python.

\`\`\`python
# Creating a set
my_set = {1, 2, 3, 2}  # Duplicate 2 is removed
print(my_set)  # Output: {1, 2, 3}
\`\`\`

Key concepts:
- **Unique**: No duplicate items allowed.
- **Unordered**: No specific order of elements.
- **Mutable**: Can add or remove items after creation.
        `,
      },
      {
        title: "Set Operations",
        content: `
# Set Operations

Sets support mathematical operations like union, intersection, and difference.

\`\`\`python
set1 = {1, 2, 3}
set2 = {2, 3, 4}
# Union
print(set1 | set2)  # Output: {1, 2, 3, 4}
# Intersection
print(set1 & set2)  # Output: {2, 3}
# Difference
print(set1 - set2)  # Output: {1}
\`\`\`

Common methods:
- **add()**: Adds an item to the set.
- **remove()**: Removes an item (raises error if not found).
- **discard()**: Removes an item (no error if not found).
        `,
      },
      {
        title: "Set Use Cases",
        content: `
# Set Use Cases

Sets are ideal for membership testing and removing duplicates.

\`\`\`python
# Removing duplicates from a list
items = [1, 2, 2, 3]
unique = list(set(items))  # [1, 2, 3]
# Membership testing
if 2 in set(items):
    print("Found")  # Output: Found
\`\`\`

Tips:
- Use sets for fast membership checks.
- Convert lists to sets to remove duplicates.
- Use **frozenset()** for immutable sets.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a key feature of Python sets?",
        options: [
          "Allow duplicates",
          "Maintain order",
          "Store unique items",
          "Fixed size",
        ],
        answer: 2,
      },
      {
        question: "What does `set1 | set2` do?",
        options: [
          "Finds the intersection",
          "Finds the union",
          "Finds the difference",
          "Removes items",
        ],
        answer: 1,
      },
      {
        question: "How do you safely remove an item from a set?",
        options: ["set.remove()", "set.discard()", "set.pop()", "set.delete()"],
        answer: 1,
      },
    ],
  },
  strings: {
    title: "Python Strings",
    description: "Master string manipulation in Python for text processing.",
    pages: [
      {
        title: "Introduction to Strings",
        content: `
# Python Strings

Strings are immutable sequences of characters in Python.

\`\`\`python
# Creating a string
text = "Hello, World!"
# Accessing characters
print(text[0])  # Output: H
\`\`\`

Key concepts:
- **Immutable**: Cannot be modified after creation.
- **Indexed**: Access characters using zero-based indices.
- **Quotes**: Use single, double, or triple quotes.
        `,
      },
      {
        title: "String Methods",
        content: `
# String Methods

Python provides many methods for string manipulation.

\`\`\`python
text = "  Hello, World!  "
# Common methods
print(text.strip())  # Output: "Hello, World!"
print(text.lower())  # Output: "  hello, world!  "
print(text.replace("World", "Python"))  # Output: "  Hello, Python!  "
\`\`\`

Common methods:
- **strip()**: Removes leading/trailing whitespace.
- **lower()**/**upper()**: Converts case.
- **replace()**: Replaces substrings.
        `,
      },
      {
        title: "String Formatting",
        content: `
# String Formatting

Format strings for dynamic text.

\`\`\`python
name = "Alice"
age = 25
# f-string
print(f"{name} is {age}")  # Output: "Alice is 25"
# format method
print("{} is {}".format(name, age))  # Output: "Alice is 25"
\`\`\`

Tips:
- Use **f-strings** for readable formatting (Python 3.6+).
- Use **format()** for older code or complex formatting.
- Escape special characters with backslashes.
        `,
      },
    ],
    quiz: [
      {
        question: "Are Python strings mutable?",
        options: [
          "Yes, they can be changed",
          "No, they are immutable",
          "Only when empty",
          "Only with methods",
        ],
        answer: 1,
      },
      {
        question: "What does `text.strip()` do?",
        options: [
          "Converts to lowercase",
          "Removes whitespace",
          "Replaces text",
          "Splits the string",
        ],
        answer: 1,
      },
      {
        question:
          "What is the preferred way to format strings in modern Python?",
        options: ["format()", "f-strings", "% operator", "concatenation"],
        answer: 1,
      },
    ],
  },
  exceptions: {
    title: "Python Exceptions",
    description:
      "Learn how to handle errors in Python using exception handling.",
    pages: [
      {
        title: "Introduction to Exceptions",
        content: `
# Python Exceptions

Exceptions are errors that occur during program execution.

\`\`\`python
# Basic try-except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")  # Output: Cannot divide by zero
\`\`\`

Key concepts:
- **try**: Code that might raise an exception.
- **except**: Handles specific exceptions.
- **Raise**: Trigger exceptions manually.
        `,
      },
      {
        title: "Multiple Exceptions",
        content: `
# Multiple Exceptions

Handle different types of exceptions.

\`\`\`python
try:
    num = int("abc")
except ValueError:
    print("Invalid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
\`\`\`

Notes:
- Use specific exception types for clarity.
- Use **else** for code that runs if no exception occurs.
- Use **finally** for cleanup code that always runs.
        `,
      },
      {
        title: "Custom Exceptions",
        content: `
# Custom Exceptions

Create and raise custom exceptions for specific cases.

\`\`\`python
class CustomError(Exception):
    pass
try:
    raise CustomError("Something went wrong")
except CustomError as e:
    print(e)  # Output: Something went wrong
\`\`\`

Tips:
- Define custom exceptions by inheriting from **Exception**.
- Use **raise** to trigger exceptions.
- Provide meaningful error messages.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `try` block do?",
        options: [
          "Defines a function",
          "Handles errors",
          "Contains code that might raise an exception",
          "Loops over data",
        ],
        answer: 2,
      },
      {
        question: "What runs if no exception occurs in a try block?",
        options: ["except", "else", "finally", "raise"],
        answer: 1,
      },
      {
        question: "How do you create a custom exception?",
        options: [
          "Inherit from Exception",
          "Use raise directly",
          "Define a function",
          "Use try-except",
        ],
        answer: 0,
      },
    ],
  },
  modules: {
    title: "Python Modules",
    description: "Learn how to organize and reuse code with Python modules.",
    pages: [
      {
        title: "Introduction to Modules",
        content: `
# Python Modules

Modules are files containing Python code that can be imported and reused.

\`\`\`python
# Importing a module
import math
print(math.sqrt(16))  # Output: 4.0
\`\`\`

Key concepts:
- **Import**: Use the **import** keyword to access module contents.
- **Standard Library**: Python includes many built-in modules.
- **Reusable**: Modules organize code for reuse.
        `,
      },
      {
        title: "Creating Modules",
        content: `
# Creating Modules

Create your own modules by writing Python files.

\`\`\`python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"
# main.py
import mymodule
print(mymodule.greet("Alice"))  # Output: "Hello, Alice!"
\`\`\`

Notes:
- Save code in a \`.py\` file to create a module.
- Import specific functions with **from module import function**.
- Use **if __name__ == "__main__":** to avoid running code on import.
        `,
      },
      {
        title: "Packages",
        content: `
# Packages

Packages are directories containing multiple modules.

\`\`\`python
# mypackage/module1.py
def func1():
    return "Function 1"
# main.py
from mypackage import module1
print(module1.func1())  # Output: "Function 1"
\`\`\`

Tips:
- Create a package with a directory and an \`\`__init__.py\`\` file.
- Use dot notation to access submodules.
- Install third-party packages with **pip**.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a Python module?",
        options: [
          "A loop structure",
          "A file containing Python code",
          "A type of exception",
          "A string method",
        ],
        answer: 1,
      },
      {
        question: "How do you import a specific function from a module?",
        options: [
          "import module.function",
          "from module import function",
          "module.function()",
          "use module.function",
        ],
        answer: 1,
      },
      {
        question: "What makes a directory a Python package?",
        options: [
          "A .py file",
          "An __init__.py file",
          "A main.py file",
          "A requirements.txt file",
        ],
        answer: 1,
      },
    ],
  },
  decorators: {
    title: "Python Decorators",
    description: "Master Python decorators for modifying function behavior.",
    pages: [
      {
        title: "Introduction to Decorators",
        content: `
# Python Decorators

Decorators are functions that modify the behavior of other functions.

\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper
@my_decorator
def say_hello():
    print("Hello!")
say_hello()
# Output:
# Before
# Hello!
# After
\`\`\`

Key concepts:
- **Decorator**: A function that wraps another function.
- **@syntax**: Applies a decorator to a function.
- **Closure**: Inner function retains access to outer function’s scope.
        `,
      },
      {
        title: "Decorators with Arguments",
        content: `
# Decorators with Arguments

Decorators can accept arguments for flexible behavior.

\`\`\`python
def repeat(n):
    def decorator(func):
        def wrapper():
            for _ in range(n):
                func()
        return wrapper
    return decorator
@repeat(3)
def greet():
    print("Hi!")
greet()
# Output:
# Hi!
# Hi!
# Hi!
\`\`\`

Notes:
- Use nested functions to handle decorator arguments.
- Return the wrapper function to preserve functionality.
- Use **functools.wraps** to preserve function metadata.
        `,
      },
      {
        title: "Practical Decorators",
        content: `
# Practical Decorators

Decorators are used for logging, timing, and more.

\`\`\`python
import time
def timer(func):
    def wrapper():
        start = time.time()
        func()
        print(f"Elapsed: {time.time() - start} seconds")
    return wrapper
@timer
def slow_function():
    time.sleep(1)
slow_function()
# Output: Elapsed: 1.00... seconds
\`\`\`

Tips:
- Use for cross-cutting concerns like logging or authentication.
- Combine multiple decorators for complex behavior.
- Keep decorators reusable and simple.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a Python decorator?",
        options: [
          "A loop construct",
          "A function that modifies another function",
          "A type of class",
          "A string method",
        ],
        answer: 1,
      },
      {
        question: "What does the `@decorator` syntax do?",
        options: [
          "Defines a class",
          "Applies a decorator to a function",
          "Raises an exception",
          "Imports a module",
        ],
        answer: 1,
      },
      {
        question: "How do you preserve function metadata in a decorator?",
        options: [
          "Use super()",
          "Use functools.wraps",
          "Use return func",
          "Use lambda",
        ],
        answer: 1,
      },
    ],
  },
  fileHandling: {
    title: "Python File Handling",
    description:
      "Learn how to read and write files in Python for data persistence.",
    pages: [
      {
        title: "Introduction to File Handling",
        content: `
# File Handling

Python provides built-in functions to read from and write to files.

\`\`\`python
# Writing to a file
with open('example.txt', 'w') as file:
    file.write('Hello, World!')
# Reading from a file
with open('example.txt', 'r') as file:
    content = file.read()
print(content)  # Output: Hello, World!
\`\`\`

Key concepts:
- **open()**: Opens a file in modes like 'r' (read), 'w' (write), 'a' (append).
- **with statement**: Ensures files are properly closed.
- **File modes**: Determine read/write permissions.
        `,
      },
      {
        title: "Reading and Writing Lines",
        content: `
# Reading and Writing Lines

Handle files line by line for efficient processing.

\`\`\`python
# Writing multiple lines
lines = ['Line 1\\n', 'Line 2\\n']
with open('lines.txt', 'w') as file:
    file.writelines(lines)
# Reading lines
with open('lines.txt', 'r') as file:
    lines = file.readlines()
print(lines)  # Output: ['Line 1\\n', 'Line 2\\n']
\`\`\`

Tips:
- Use **readline()** for reading one line at a time.
- Use **writelines()** for writing multiple lines.
- Handle large files iteratively to save memory.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the 'w' mode do in `open()`?",
        options: [
          "Reads the file",
          "Writes to the file",
          "Appends to the file",
          "Creates a new file",
        ],
        answer: 1,
      },
      {
        question: "Why use a `with` statement for file handling?",
        options: [
          "To speed up reading",
          "To ensure the file is closed",
          "To format the file",
          "To encrypt the file",
        ],
        answer: 1,
      },
    ],
  },
  iteratorsGenerators: {
    title: "Python Iterators and Generators",
    description:
      "Master iterators and generators in Python for efficient iteration.",
    pages: [
      {
        title: "Introduction to Iterators",
        content: `
# Iterators

Iterators are objects that implement \`\`__iter__\`\` and \`\`__next__\`\` for iteration.

\`\`\`python
# Creating an iterator
my_list = [1, 2, 3]
iterator = iter(my_list)
print(next(iterator))  # Output: 1
print(next(iterator))  # Output: 2
\`\`\`

Key concepts:
- **iter()**: Returns an iterator from an iterable.
- **next()**: Retrieves the next item or raises StopIteration.
- **Iterable**: Any object that can be iterated over.
        `,
      },
      {
        title: "Generators",
        content: `
# Generators

Generators are functions that yield values one at a time, saving memory.

\`\`\`python
# Defining a generator
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
# Using a generator
for num in fibonacci(5):
    print(num)  # Output: 0, 1, 1, 2, 3
\`\`\`

Tips:
- Use **yield** to produce values lazily.
- Generators are memory-efficient for large datasets.
- Can only be iterated once.
        `,
      },
    ],
    quiz: [
      {
        question: "What does `next()` do with an iterator?",
        options: [
          "Creates an iterator",
          "Retrieves the next item",
          "Resets the iterator",
          "Converts to a list",
        ],
        answer: 1,
      },
      {
        question: "What keyword defines a generator?",
        options: ["return", "yield", "next", "iter"],
        answer: 1,
      },
    ],
  },
  contextManagers: {
    title: "Python Context Managers",
    description: "Learn context managers in Python for resource management.",
    pages: [
      {
        title: "Introduction to Context Managers",
        content: `
# Context Managers

Context managers handle setup and cleanup of resources using \`\`with\`\`.

\`\`\`python
# Using a context manager
with open('example.txt', 'w') as file:
    file.write('Hello!')
# File is automatically closed
\`\`\`

Key concepts:
- **with statement**: Manages resource lifecycle.
- **Enter/Exit**: Setup and cleanup phases.
- **Resource Management**: Ensures proper cleanup (e.g., closing files).
        `,
      },
      {
        title: "Custom Context Managers",
        content: `
# Custom Context Managers

Create context managers using classes or decorators.

\`\`\`python
from contextlib import contextmanager

@contextmanager
def temporary_value(value):
    print(f"Setting up: {value}")
    yield value
    print("Cleaning up")

with temporary_value(42) as val:
    print(f"Using: {val}")
# Output:
# Setting up: 42
# Using: 42
# Cleaning up
\`\`\`

Tips:
- Use **@contextmanager** for simple context managers.
- Implement \`\`__enter__\`\` and \`\`__exit__\`\` for class-based managers.
- Handle exceptions in \`\`__exit__\`\` for robustness.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `with` statement ensure?",
        options: [
          "File encryption",
          "Resource cleanup",
          "Faster execution",
          "Data validation",
        ],
        answer: 1,
      },
      {
        question: "How do you create a simple context manager?",
        options: [
          "Use @decorator",
          "Use @contextmanager",
          "Use yield",
          "Use class only",
        ],
        answer: 1,
      },
    ],
  },
  regularExpressions: {
    title: "Python Regular Expressions",
    description: "Master regular expressions in Python for pattern matching.",
    pages: [
      {
        title: "Introduction to Regular Expressions",
        content: `
# Regular Expressions

The \`\`re\`\` module enables pattern matching in strings.

\`\`\`python
import re
# Finding a pattern
text = "Contact: alice@example.com"
match = re.search(r'\\w+@\\w+\\.com', text)
print(match.group())  # Output: alice@example.com
\`\`\`

Key concepts:
- **re.search()**: Finds the first match.
- **Patterns**: Use regex syntax (e.g., \\w for word characters).
- **Match Object**: Contains match details.
        `,
      },
      {
        title: "Common Regex Patterns",
        content: `
# Common Regex Patterns

Use regex for tasks like validation and extraction.

\`\`\`python
import re
# Validate phone number
phone = "123-456-7890"
if re.match(r'\\d{3}-\\d{3}-\\d{4}', phone):
    print("Valid phone")  # Output: Valid phone
# Extract all numbers
text = "Items: 42, 15, 99"
numbers = re.findall(r'\\d+', text)
print(numbers)  # Output: ['42', '15', '99']
\`\`\`

Tips:
- Use **re.match()** for start-of-string matches.
- Use **re.findall()** to get all matches.
- Test patterns with tools like regex101.com.
        `,
      },
    ],
    quiz: [
      {
        question: "What does `re.search()` return?",
        options: [
          "A list of matches",
          "A match object",
          "A string",
          "A boolean",
        ],
        answer: 1,
      },
      {
        question: "What does `\\d` represent in a regex pattern?",
        options: ["A word", "A digit", "A space", "Any character"],
        answer: 1,
      },
    ],
  },
  multithreading: {
    title: "Python Multithreading",
    description:
      "Learn multithreading in Python for concurrent task execution.",
    pages: [
      {
        title: "Introduction to Multithreading",
        content: `
# Multithreading

The \`\`threading\`\` module allows running tasks concurrently.

\`\`\`python
import threading
import time

def print_numbers():
    for i in range(5):
        print(f"Number: {i}")
        time.sleep(1)

thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()  # Wait for thread to finish
\`\`\`

Key concepts:
- **Thread**: A separate flow of execution.
- **threading.Thread**: Creates a new thread.
- **join()**: Waits for a thread to complete.
        `,
      },
      {
        title: "Thread Synchronization",
        content: `
# Thread Synchronization

Use locks to prevent race conditions.

\`\`\`python
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(2)]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(counter)  # Output: 200000
\`\`\`

Tips:
- Use **Lock** to protect shared resources.
- Avoid deadlocks by careful lock ordering.
- Consider **threading.Event** or **Queue** for coordination.
        `,
      },
    ],
    quiz: [
      {
        question: "What does `threading.Thread` create?",
        options: ["A new process", "A new thread", "A new file", "A new class"],
        answer: 1,
      },
      {
        question: "What is the purpose of a `Lock` in multithreading?",
        options: [
          "Speed up execution",
          "Prevent race conditions",
          "Close files",
          "Validate data",
        ],
        answer: 1,
      },
    ],
  },
};
