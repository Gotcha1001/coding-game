export const cSharpData = {
  classes: {
    title: "C# Classes and Objects",
    description: "Learn how to define and use classes and objects in C#.",
    pages: [
      {
        title: "Introduction to Classes",
        content: `
# C# Classes

Classes are the foundation of object-oriented programming in C#.

\`\`\`csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name}, {Age} years old.");
    }
}

class Program
{
    static void Main()
    {
        Person person = new Person { Name = "Alice", Age = 30 };
        person.Introduce();
    }
}
\`\`\`

Key concepts:
- **Class**: Blueprint for objects
- **Properties**: Data members with getters/setters
- **Methods**: Functions defined in the class
        `,
      },
      {
        title: "Constructors and Inheritance",
        content: `
# Constructors and Inheritance

Constructors initialize objects, and inheritance allows class hierarchies.

\`\`\`csharp
public class Animal
{
    public string Species { get; set; }

    public Animal(string species)
    {
        Species = species;
    }
}

public class Dog : Animal
{
    public string Breed { get; set; }

    public Dog(string species, string breed) : base(species)
    {
        Breed = breed;
    }
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog("Canine", "Labrador");
        Console.WriteLine($"{dog.Species}: {dog.Breed}");
    }
}
\`\`\`

Tips:
- **Constructors**: Special methods for object initialization
- **Inheritance**: Use \`: base\` to call parent constructor
- **Polymorphism**: Derived classes can override base behavior
        `,
      },
      {
        title: "Encapsulation",
        content: `
# Encapsulation

Encapsulation hides implementation details using access modifiers.

\`\`\`csharp
public class BankAccount
{
    private decimal balance;

    public BankAccount(decimal initialBalance)
    {
        balance = initialBalance;
    }

    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount(1000);
        account.Deposit(500);
        Console.WriteLine($"Balance: {account.GetBalance()}");
    }
}
\`\`\`

Key points:
- **Private Fields**: Restrict direct access
- **Public Methods**: Control access to data
- **Properties**: Provide controlled access to fields
        `,
      },
    ],
    quiz: [
      {
        question: "What keyword is used to define a class in C#?",
        options: ["class", "struct", "interface", "enum"],
        answer: 0,
      },
      {
        question:
          "How do you call a base class constructor from a derived class?",
        options: ["super()", "base()", "parent()", "this()"],
        answer: 1,
      },
      {
        question: "Which access modifier hides a field from external access?",
        options: ["public", "private", "protected", "internal"],
        answer: 1,
      },
    ],
  },
  async: {
    title: "C# Async and Await",
    description: "Master asynchronous programming in C# using async and await.",
    pages: [
      {
        title: "Introduction to Async/Await",
        content: `
# Async and Await

Async and await simplify asynchronous programming in C#.

\`\`\`csharp
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        Console.WriteLine("Starting...");
        await Task.Delay(2000); // Simulate async work
        Console.WriteLine("Finished!");
    }
}
\`\`\`

Features:
- **async**: Marks a method as asynchronous
- **await**: Pauses execution until the task completes
- **Task**: Represents an asynchronous operation
        `,
      },
      {
        title: "Async Methods and Return Types",
        content: `
# Async Methods and Return Types

Async methods typically return Task or Task<T>.

\`\`\`csharp
using System;
using System.Threading.Tasks;

class Program
{
    static async Task<int> GetNumberAsync()
    {
        await Task.Delay(1000);
        return 42;
    }

    static async Task Main()
    {
        int result = await GetNumberAsync();
        Console.WriteLine($"Result: {result}");
    }
}
\`\`\`

Common return types:
- **Task**: For methods with no return value
- **Task<T>**: For methods returning a value
- **ValueTask<T>**: For performance-critical async methods
        `,
      },
      {
        title: "Error Handling in Async",
        content: `
# Error Handling in Async

Use try-catch to handle exceptions in async methods.

\`\`\`csharp
using System;
using System.Threading.Tasks;

class Program
{
    static async Task ThrowErrorAsync()
    {
        await Task.Delay(1000);
        throw new Exception("Something went wrong!");
    }

    static async Task Main()
    {
        try
        {
            await ThrowErrorAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}
\`\`\`

Notes:
- **Exceptions**: Propagate through await
- **Try-Catch**: Wrap await calls to handle errors
- **AggregateException**: May occur with multiple tasks
        `,
      },
    ],
    quiz: [
      {
        question: "Which keyword marks a method as asynchronous in C#?",
        options: ["async", "await", "task", "thread"],
        answer: 0,
      },
      {
        question: "What does the 'await' keyword do?",
        options: [
          "Marks a method as async",
          "Pauses execution until a task completes",
          "Runs a task synchronously",
          "Cancels a task",
        ],
        answer: 1,
      },
      {
        question:
          "What is the typical return type for an async method with no return value?",
        options: ["void", "Task", "Task<T>", "ValueTask"],
        answer: 1,
      },
    ],
  },
  interfaces: {
    title: "C# Interfaces",
    description: "Learn how to define and implement interfaces in C#.",
    pages: [
      {
        title: "Introduction to Interfaces",
        content: `
# Interfaces

Interfaces define contracts that classes must implement.

\`\`\`csharp
public interface IShape
{
    double Area();
}

public class Circle : IShape
{
    public double Radius { get; set; }

    public Circle(double radius)
    {
        Radius = radius;
    }

    public double Area()
    {
        return Math.PI * Radius * Radius;
    }
}

class Program
{
    static void Main()
    {
        IShape circle = new Circle(5);
        Console.WriteLine($"Area: {circle.Area()}");
    }
}
\`\`\`

Key concepts:
- **Contract**: Specifies methods/properties to implement
- **Implementation**: Classes provide the logic
- **Polymorphism**: Use interface type for flexibility
        `,
      },
    ],
    quiz: [
      {
        question: "What does an interface define in C#?",
        options: [
          "A class blueprint",
          "A contract for classes",
          "A data structure",
          "A method implementation",
        ],
        answer: 1,
      },
    ],
  },
  delegates: {
    title: "C# Delegates",
    description: "Understand delegates in C# for type-safe function pointers.",
    pages: [
      {
        title: "Introduction to Delegates",
        content: `
# Delegates

Delegates are type-safe function pointers in C#.

\`\`\`csharp
public delegate void MessageDelegate(string message);

class Program
{
    static void PrintMessage(string message)
    {
        Console.WriteLine(message);
    }

    static void Main()
    {
        MessageDelegate del = PrintMessage;
        del("Hello, Delegates!");
    }
}
\`\`\`

Key concepts:
- **Delegate type**: Defines method signature
- **Assignment**: Points to compatible methods
- **Invocation**: Calls the referenced method
        `,
      },
    ],
    quiz: [
      {
        question: "What is a delegate in C#?",
        options: [
          "A class",
          "A type-safe function pointer",
          "An interface",
          "A property",
        ],
        answer: 1,
      },
    ],
  },
  linq: {
    title: "C# LINQ",
    description: "Master LINQ in C# for querying data collections.",
    pages: [
      {
        title: "Introduction to LINQ",
        content: `
# LINQ

LINQ (Language Integrated Query) simplifies querying data in C#.

\`\`\`csharp
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine(string.Join(", ", evenNumbers)); // 2, 4
    }
}
\`\`\`

Key concepts:
- **Query syntax**: SQL-like syntax for queries
- **Method syntax**: Uses extension methods like Where
- **Deferred execution**: Queries execute when enumerated
        `,
      },
    ],
    quiz: [
      {
        question: "What does LINQ stand for in C#?",
        options: [
          "Linked Integration Query",
          "Language Integrated Query",
          "List Iteration Query",
          "Local Index Query",
        ],
        answer: 1,
      },
    ],
  },
  generics: {
    title: "C# Generics",
    description: "Learn to use generics in C# for reusable, type-safe code.",
    pages: [
      {
        title: "Introduction to Generics",
        content: `
# Generics

Generics allow reusable code with type safety.

\`\`\`csharp
public class GenericList<T>
{
    private T[] items = new T[10];
    private int count = 0;

    public void Add(T item)
    {
        if (count < items.Length)
            items[count++] = item;
    }

    public T Get(int index)
    {
        return items[index];
    }
}

class Program
{
    static void Main()
    {
        GenericList<int> numbers = new GenericList<int>();
        numbers.Add(42);
        Console.WriteLine(numbers.Get(0)); // 42
    }
}
\`\`\`

Key concepts:
- **Type parameter (T)**: Placeholder for a type
- **Type safety**: Enforces type consistency
- **Reusable**: Works with any type
        `,
      },
    ],
    quiz: [
      {
        question: "What does a generic type parameter do in C#?",
        options: [
          "Defines a fixed type",
          "Acts as a placeholder for a type",
          "Disables type checking",
          "Merges types",
        ],
        answer: 1,
      },
    ],
  },
  events: {
    title: "C# Events",
    description:
      "Understand events in C# for implementing the observer pattern.",
    pages: [
      {
        title: "Introduction to Events",
        content: `
# Events

Events enable a publisher-subscriber model in C#.

\`\`\`csharp
public class Button
{
    public event EventHandler Clicked;

    public void Click()
    {
        Clicked?.Invoke(this, EventArgs.Empty);
    }
}

class Program
{
    static void Main()
    {
        Button button = new Button();
        button.Clicked += (sender, args) => Console.WriteLine("Button clicked!");
        button.Click();
    }
}
\`\`\`

Key concepts:
- **event**: Declares an event member
- **EventHandler**: Common delegate type for events
- **?.Invoke**: Safely raises the event
        `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of events in C#?",
        options: [
          "To store data",
          "To implement publisher-subscriber pattern",
          "To define methods",
          "To query collections",
        ],
        answer: 1,
      },
    ],
  },
  dependencyInjection: {
    title: "C# Dependency Injection",
    description: "Learn dependency injection in C# for loosely coupled code.",
    pages: [
      {
        title: "Introduction to Dependency Injection",
        content: `
# Dependency Injection

Dependency Injection (DI) promotes loosely coupled code by injecting dependencies.

\`\`\`csharp
public interface IMessageService
{
    string GetMessage();
}

public class EmailService : IMessageService
{
    public string GetMessage() => "Email sent!";
}

public class Notification
{
    private readonly IMessageService _service;

    public Notification(IMessageService service)
    {
        _service = service;
    }

    public string Send() => _service.GetMessage();
}

class Program
{
    static void Main()
    {
        IMessageService service = new EmailService();
        Notification notification = new Notification(service);
        Console.WriteLine(notification.Send());
    }
}
\`\`\`

Key concepts:
- **Interface**: Defines the contract
- **Injection**: Pass dependencies via constructor
- **Loose coupling**: Reduces direct dependencies
        `,
      },
    ],
    quiz: [
      {
        question: "What is the main benefit of dependency injection in C#?",
        options: [
          "Faster execution",
          "Loose coupling",
          "Smaller code size",
          "Type safety",
        ],
        answer: 1,
      },
    ],
  },
  attributes: {
    title: "C# Attributes",
    description: "Explore attributes in C# for adding metadata to code.",
    pages: [
      {
        title: "Introduction to Attributes",
        content: `
# Attributes

Attributes add metadata to code elements in C#.

\`\`\`csharp
using System;

[Obsolete("Use NewMethod instead")]
public class OldClass
{
    public void OldMethod()
    {
        Console.WriteLine("Old method");
    }
}

class Program
{
    static void Main()
    {
        OldClass obj = new OldClass();
        obj.OldMethod(); // Warning: Method is obsolete
    }
}
\`\`\`

Key concepts:
- **Metadata**: Provides information about code
- **Built-in attributes**: Like \`\`Obsolete\`\`
- **Custom attributes**: Define your own metadata
        `,
      },
    ],
    quiz: [
      {
        question: "What do attributes provide in C#?",
        options: [
          "Method implementations",
          "Metadata about code",
          "Type definitions",
          "Event handlers",
        ],
        answer: 1,
      },
    ],
  },
  reflection: {
    title: "C# Reflection",
    description:
      "Master reflection in C# for inspecting and invoking types at runtime.",
    pages: [
      {
        title: "Introduction to Reflection",
        content: `
# Reflection

Reflection allows inspecting and invoking code dynamically at runtime.

\`\`\`csharp
using System;
using System.Reflection;

public class Person
{
    public string Name { get; set; }

    public void SayHello()
    {
        Console.WriteLine($"Hello, {Name}!");
    }
}

class Program
{
    static void Main()
    {
        Type type = typeof(Person);
        object instance = Activator.CreateInstance(type);
        PropertyInfo prop = type.GetProperty("Name");
        prop.SetValue(instance, "Alice");
        MethodInfo method = type.GetMethod("SayHello");
        method.Invoke(instance, null);
    }
}
\`\`\`

Key concepts:
- **Type inspection**: Access type metadata
- **Dynamic invocation**: Call methods/properties at runtime
- **Performance**: Reflection is slower, use judiciously
        `,
      },
    ],
    quiz: [
      {
        question: "What does reflection allow in C#?",
        options: [
          "Static type checking",
          "Dynamic type inspection and invocation",
          "Querying collections",
          "Defining interfaces",
        ],
        answer: 1,
      },
    ],
  },
  nullable: {
    title: "C# Nullable Types",
    description:
      "Learn to use nullable types in C# for handling null values safely.",
    pages: [
      {
        title: "Introduction to Nullable Types",
        content: `
# Nullable Types

Nullable types allow value types to have null values, enhancing safety.

\`\`\`csharp
class Program
{
    static void Main()
    {
        int? number = null;
        if (number.HasValue)
        {
            Console.WriteLine($"Number: {number.Value}");
        }
        else
        {
            Console.WriteLine("Number is null");
        }
        // Null-coalescing operator
        int result = number ?? 0;
        Console.WriteLine($"Result: {result}");
    }
}
\`\`\`

Key concepts:
- **Nullable<T>**: Wraps value types to allow null
- **HasValue/Value**: Check and access the value
- **?? Operator**: Provides default value if null
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `int?` syntax represent in C#?",
        options: [
          "An integer array",
          "A nullable integer",
          "A reference type",
          "An optional parameter",
        ],
        answer: 1,
      },
    ],
  },
  patternMatching: {
    title: "C# Pattern Matching",
    description:
      "Master pattern matching in C# for expressive type checking and control flow.",
    pages: [
      {
        title: "Introduction to Pattern Matching",
        content: `
# Pattern Matching

Pattern matching simplifies type checking and value extraction.

\`\`\`csharp
public class Shape
{
    public string Type { get; set; }
}

public class Circle : Shape
{
    public double Radius { get; set; }
}

class Program
{
    static void Main()
    {
        Shape shape = new Circle { Type = "Circle", Radius = 5 };
        if (shape is Circle circle)
        {
            Console.WriteLine($"Circle with radius: {circle.Radius}");
        }
        // Switch expression
        string description = shape switch
        {
            Circle c => $"Circle (radius: {c.Radius})",
            _ => "Unknown shape"
        };
        Console.WriteLine(description);
    }
}
\`\`\`

Key concepts:
- **is operator**: Tests type and casts
- **Switch expressions**: Concise pattern-based control flow
- **Discard (_)**: Matches any value
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `is` operator do in C# pattern matching?",
        options: [
          "Assigns a value",
          "Tests type and casts",
          "Compares values",
          "Declares a variable",
        ],
        answer: 1,
      },
    ],
  },
  recordTypes: {
    title: "C# Record Types",
    description:
      "Learn about record types in C# for immutable data structures.",
    pages: [
      {
        title: "Introduction to Record Types",
        content: `
# Record Types

Record types provide immutable data structures with value-based equality.

\`\`\`csharp
public record Person(string Name, int Age);

class Program
{
    static void Main()
    {
        Person person1 = new Person("Alice", 30);
        Person person2 = new Person("Alice", 30);
        Console.WriteLine(person1 == person2); // True (value equality)
        // With expression for creating modified copies
        Person person3 = person1 with { Age = 31 };
        Console.WriteLine($"Updated: {person3.Name}, {person3.Age}");
    }
}
\`\`\`

Key concepts:
- **Immutability**: Properties are init-only by default
- **Value equality**: Compares property values
- **With expression**: Creates modified copies
        `,
      },
    ],
    quiz: [
      {
        question: "What is a key feature of C# record types?",
        options: [
          "Mutable properties",
          "Value-based equality",
          "Dynamic typing",
          "Static methods",
        ],
        answer: 1,
      },
    ],
  },
  stringHandling: {
    title: "C# String Handling",
    description:
      "Learn to manipulate strings in C# for effective text processing.",
    pages: [
      {
        title: "Introduction to String Handling",
        content: `
# String Handling

Strings in C# are immutable objects used for text manipulation.

\`\`\`csharp
using System;

class Program
{
    static void Main()
    {
        string text = "  Hello, C#!  ";
        // Basic operations
        Console.WriteLine(text.Trim()); // Output: Hello, C#!
        Console.WriteLine(text.ToUpper()); // Output:   HELLO, C#!  
    }
}
\`\`\`

Key concepts:
- **Immutability**: Strings cannot be modified in place.
- **String methods**: Provide operations like Trim, ToUpper, etc.
- **String interpolation**: Use $ for embedding expressions.
        `,
      },
      {
        title: "String Methods and Interpolation",
        content: `
# String Methods and Interpolation

C# offers powerful string methods and interpolation for dynamic text.

\`\`\`csharp
using System;

class Program
{
    static void Main()
    {
        string name = "Alice";
        int age = 30;
        // String interpolation
        string greeting = $"Hi, {name}! You are {age} years old.";
        Console.WriteLine(greeting); // Output: Hi, Alice! You are 30 years old.
        // String methods
        string text = "C# Programming";
        Console.WriteLine(text.Replace("C#", "DotNet")); // Output: DotNet Programming
        Console.WriteLine(text.Substring(2, 5)); // Output: Progr
    }
}
\`\`\`

Tips:
- Use **Replace** for substituting text.
- Use **Substring** for extracting parts of a string.
- Use **$** for concise string formatting.
        `,
      },
    ],
    quiz: [
      {
        question: "Are strings mutable in C#?",
        options: [
          "Yes, they can be changed",
          "No, they are immutable",
          "Only when empty",
          "Only with methods",
        ],
        answer: 1,
      },
      {
        question: "What does the `$` symbol enable in C# strings?",
        options: [
          "String concatenation",
          "String interpolation",
          "String splitting",
          "String trimming",
        ],
        answer: 1,
      },
    ],
  },
  extensionMethods: {
    title: "C# Extension Methods",
    description:
      "Master extension methods in C# to add functionality to existing types.",
    pages: [
      {
        title: "Introduction to Extension Methods",
        content: `
# Extension Methods

Extension methods allow adding methods to existing types without modifying them.

\`\`\`csharp
using System;

public static class StringExtensions
{
    public static string Reverse(this string input)
    {
        char[] chars = input.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }
}

class Program
{
    static void Main()
    {
        string text = "Hello, C#";
        string reversed = text.Reverse();
        Console.WriteLine(reversed); // Output: #C ,olleH
    }
}
\`\`\`

Key concepts:
- **this**: Indicates the type being extended.
- **Static class**: Hosts extension methods.
- **Non-invasive**: Adds functionality without altering original types.
        `,
      },
      {
        title: "Using Extension Methods",
        content: `
# Using Extension Methods

Extension methods enhance readability and reusability.

\`\`\`csharp
using System;

public static class IntExtensions
{
    public static bool IsEven(this int number)
    {
        return number % 2 == 0;
    }
}

class Program
{
    static void Main()
    {
        int number = 42;
        Console.WriteLine($"{number} is even: {number.IsEven()}"); // Output: 42 is even: True
    }
}
\`\`\`

Tips:
- Use for utility functions that feel native to a type.
- Ensure extension methods are in a static class.
- Avoid overusing to maintain code clarity.
        `,
      },
    ],
    quiz: [
      {
        question: "Where must extension methods be defined in C#?",
        options: [
          "In an interface",
          "In a static class",
          "In a base class",
          "In a struct",
        ],
        answer: 1,
      },
      {
        question:
          "What does the `this` keyword specify in an extension method?",
        options: [
          "The return type",
          "The type being extended",
          "The method name",
          "The parameter type",
        ],
        answer: 1,
      },
    ],
  },
  entityFrameworkCore: {
    title: "C# Entity Framework Core",
    description:
      "Learn Entity Framework Core for database access in .NET applications.",
    pages: [
      {
        title: "Introduction to Entity Framework Core",
        content: `
# Entity Framework Core

Entity Framework Core (EF Core) is an ORM for database operations in .NET.

\`\`\`csharp
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Person> People { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}

class Program
{
    static void Main()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase("TestDB")
            .Options;
        using var context = new AppDbContext(options);
        context.People.Add(new Person { Name = "Alice" });
        context.SaveChanges();
        var person = context.People.FirstOrDefault();
        Console.WriteLine($"Found: {person.Name}");
    }
}
\`\`\`

Key concepts:
- **DbContext**: Manages database connections and queries.
- **DbSet<T>**: Represents a table or collection.
- **ORM**: Maps objects to database tables.
        `,
      },
      {
        title: "Basic CRUD Operations",
        content: `
# Basic CRUD Operations

EF Core simplifies Create, Read, Update, Delete operations.

\`\`\`csharp
using Microsoft.EntityFrameworkCore;
using System.Linq;

public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Person> People { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}

class Program
{
    static void Main()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase("TestDB")
            .Options;
        using var context = new AppDbContext(options);
        // Create
        context.People.Add(new Person { Name = "Bob" });
        context.SaveChanges();
        // Read
        var person = context.People.Find(1);
        // Update
        person.Name = "Robert";
        context.SaveChanges();
        // Delete
        context.People.Remove(person);
        context.SaveChanges();
        Console.WriteLine($"Count: {context.People.Count()}"); // Output: Count: 0
    }
}
\`\`\`

Tips:
- Use **SaveChanges** to persist changes.
- Use **Find** for quick ID-based lookups.
- Configure with a real database (e.g., SQL Server) for production.
        `,
      },
    ],
    quiz: [
      {
        question: "What is Entity Framework Core in .NET?",
        options: [
          "A web framework",
          "An ORM for database access",
          "A testing library",
          "A dependency injection tool",
        ],
        answer: 1,
      },
      {
        question: "What does `DbContext` manage in EF Core?",
        options: [
          "HTTP requests",
          "Database connections and queries",
          "File operations",
          "Thread pools",
        ],
        answer: 1,
      },
    ],
  },
  taskParallelLibrary: {
    title: "C# Task Parallel Library",
    description:
      "Master the Task Parallel Library (TPL) for parallel programming in .NET.",
    pages: [
      {
        title: "Introduction to Task Parallel Library",
        content: `
# Task Parallel Library

The Task Parallel Library (TPL) simplifies parallel and concurrent programming.

\`\`\`csharp
using System;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        Task<int> task = Task.Run(() => 
        {
            // Simulate work
            Task.Delay(1000).Wait();
            return 42;
        });
        Console.WriteLine($"Result: {task.Result}"); // Output: Result: 42
    }
}
\`\`\`

Key concepts:
- **Task**: Represents a unit of work.
- **Task.Run**: Executes code on a thread pool.
- **Result**: Retrieves the task’s output.
        `,
      },
      {
        title: "Parallel Loops and Continuations",
        content: `
# Parallel Loops and Continuations

TPL provides parallel loops and task continuations for advanced scenarios.

\`\`\`csharp
using System;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        // Parallel loop
        Parallel.For(0, 5, i => 
        {
            Console.WriteLine($"Processing {i} on thread {Task.CurrentId}");
        });
        // Task continuation
        Task<int> task = Task.Run(() => 10);
        Task continuation = task.ContinueWith(t => 
        {
            Console.WriteLine($"Continued with result: {t.Result * 2}");
        });
        continuation.Wait();
    }
}
\`\`\`

Tips:
- Use **Parallel.For** for parallel iteration.
- Use **ContinueWith** for task chaining.
- Handle exceptions with **AggregateException**.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the Task Parallel Library (TPL) simplify in C#?",
        options: [
          "File I/O",
          "Parallel programming",
          "Database queries",
          "Web development",
        ],
        answer: 1,
      },
      {
        question: "What does `Task.Run` do in TPL?",
        options: [
          "Runs a task synchronously",
          "Executes code on a thread pool",
          "Cancels a task",
          "Queries a database",
        ],
        answer: 1,
      },
    ],
  },
};
