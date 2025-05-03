export const javaData = {
  classes: {
    title: "Java Classes",
    description:
      "Learn how to define and use classes in Java for object-oriented programming.",
    pages: [
      {
        title: "Introduction to Classes",
        content: `
# Java Classes

Classes are the foundation of object-oriented programming in Java, defining objects with properties and behaviors.

\`\`\`java
// Defining a class
public class Car {
    String model;
    int speed;
    
    // Constructor
    public Car(String model, int speed) {
        this.model = model;
        this.speed = speed;
    }
}

// Creating an object
Car myCar = new Car("Toyota", 60);
System.out.println(myCar.model); // Output: Toyota
\`\`\`

Key concepts:
- **Class**: Blueprint for objects.
- **Object**: Instance of a class.
- **Constructor**: Initializes objects.
        `,
      },
      {
        title: "Class Methods",
        content: `
# Class Methods

Methods define the behaviors of a class, allowing objects to perform actions.

\`\`\`java
public class Car {
    String model;
    int speed;
    
    public Car(String model, int speed) {
        this.model = model;
        this.speed = speed;
    }
    
    // Method
    public void accelerate(int increment) {
        speed += increment;
    }
}

Car myCar = new Car("Toyota", 60);
myCar.accelerate(20);
System.out.println(myCar.speed); // Output: 80
\`\`\`

Common practices:
- **Methods**: Define actions like getters, setters, or custom behaviors.
- **this**: Refers to the current object.
- **Encapsulation**: Use private fields with public methods.
        `,
      },
      {
        title: "Inheritance",
        content: `
# Inheritance

Inheritance allows a class to inherit properties and methods from another class.

\`\`\`java
// Parent class
public class Vehicle {
    String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
}

// Child class
public class Car extends Vehicle {
    int speed;
    
    public Car(String brand, int speed) {
        super(brand);
        this.speed = speed;
    }
}

Car myCar = new Car("Toyota", 60);
System.out.println(myCar.brand); // Output: Toyota
\`\`\`

Tips:
- Use **extends** to inherit.
- **super**: Calls the parent class constructor or methods.
- Keep inheritance hierarchies simple.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you create an instance of a class in Java?",
        options: [
          "class MyClass()",
          "new MyClass()",
          "MyClass.create()",
          "MyClass.new()",
        ],
        answer: 1,
      },
      {
        question: "What keyword is used to inherit a class?",
        options: ["implements", "extends", "super", "this"],
        answer: 1,
      },
      {
        question: "What does the `super` keyword do?",
        options: [
          "Creates a new object",
          "Calls the parent class constructor",
          "Defines a method",
          "Accesses private fields",
        ],
        answer: 1,
      },
    ],
  },
  encapsulation: {
    title: "Java Encapsulation",
    description: "Learn how to use encapsulation to protect data in Java.",
    pages: [
      {
        title: "Introduction to Encapsulation",
        content: `
# Encapsulation

Encapsulation hides data using private fields and public methods.

\`\`\`java
public class BankAccount {
    private double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}

BankAccount account = new BankAccount(1000);
account.deposit(500);
System.out.println(account.getBalance()); // Output: 1500
\`\`\`

Key concepts:
- **Private Fields**: Restrict direct access.
- **Public Methods**: Provide controlled access (getters/setters).
- **Data Protection**: Ensures valid data modifications.
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which access modifier is used to hide fields in encapsulation?",
        options: ["public", "private", "protected", "default"],
        answer: 1,
      },
    ],
  },
  interfaces: {
    title: "Java Interfaces",
    description: "Understand how to define and implement interfaces in Java.",
    pages: [
      {
        title: "Introduction to Interfaces",
        content: `
# Interfaces

Interfaces define contracts that classes must implement.

\`\`\`java
public interface Drivable {
    void drive();
}

public class Car implements Drivable {
    public void drive() {
        System.out.println("Car is driving");
    }
}

Car car = new Car();
car.drive(); // Output: Car is driving
\`\`\`

Key concepts:
- **Interface**: Specifies methods to implement.
- **implements**: Used to adopt an interface.
- **Polymorphism**: Use interface type for flexibility.
        `,
      },
    ],
    quiz: [
      {
        question: "What keyword is used to implement an interface in Java?",
        options: ["extends", "implements", "super", "interface"],
        answer: 1,
      },
    ],
  },
  arrays: {
    title: "Java Arrays",
    description:
      "Learn to work with arrays in Java for storing multiple values.",
    pages: [
      {
        title: "Introduction to Arrays",
        content: `
# Arrays

Arrays store multiple values of the same type in a fixed-size collection.

\`\`\`java
public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        for (int num : numbers) {
            System.out.println(num);
        }
        // Accessing an element
        System.out.println(numbers[0]); // Output: 1
    }
}
\`\`\`

Key concepts:
- **Declaration**: Specify type and size.
- **Initialization**: Assign values.
- **Enhanced for loop**: Simplifies array iteration.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you declare an array in Java?",
        options: ["int array[]", "int[] array", "array int[]", "int array()"],
        answer: 1,
      },
    ],
  },
  collections: {
    title: "Java Collections",
    description:
      "Master the Java Collections Framework for dynamic data structures.",
    pages: [
      {
        title: "Introduction to Collections",
        content: `
# Collections

The Collections Framework provides dynamic data structures like lists and sets.

\`\`\`java
import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
\`\`\`

Key concepts:
- **ArrayList**: Dynamic array for storing elements.
- **add()**: Appends elements.
- **Generics**: Ensure type safety.
        `,
      },
    ],
    quiz: [
      {
        question: "Which class represents a dynamic array in Java?",
        options: ["List", "ArrayList", "Set", "Map"],
        answer: 1,
      },
    ],
  },
  exceptions: {
    title: "Java Exception Handling",
    description: "Learn to handle errors in Java using try-catch blocks.",
    pages: [
      {
        title: "Introduction to Exceptions",
        content: `
# Exception Handling

Exceptions handle runtime errors using try-catch blocks.

\`\`\`java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Key concepts:
- **try-catch**: Captures and handles exceptions.
- **Exception Types**: Checked vs. unchecked.
- **throw**: Manually throws an exception.
        `,
      },
    ],
    quiz: [
      {
        question: "Which block handles exceptions in Java?",
        options: ["try", "catch", "finally", "throw"],
        answer: 1,
      },
    ],
  },
  generics: {
    title: "Java Generics",
    description: "Understand generics in Java for type-safe, reusable code.",
    pages: [
      {
        title: "Introduction to Generics",
        content: `
# Generics

Generics enable type-safe, reusable classes and methods.

\`\`\`java
public class GenericBox<T> {
    private T item;
    
    public void setItem(T item) {
        this.item = item;
    }
    
    public T getItem() {
        return item;
    }
}

GenericBox<String> box = new GenericBox<>();
box.setItem("Hello");
System.out.println(box.getItem()); // Output: Hello
\`\`\`

Key concepts:
- **Type Parameter (T)**: Placeholder for a type.
- **Type Safety**: Prevents runtime type errors.
- **Bounded Types**: Restrict allowed types.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a generic type parameter do in Java?",
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
  streams: {
    title: "Java Streams",
    description: "Master Java Streams for functional-style data processing.",
    pages: [
      {
        title: "Introduction to Streams",
        content: `
# Streams

Streams provide a functional approach to process collections.

\`\`\`java
import java.util.Arrays;
import java.util.List;

public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
    }
}
\`\`\`

Key concepts:
- **Stream**: Processes data in a pipeline.
- **filter**: Selects elements based on a condition.
- **forEach**: Performs an action for each element.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `filter` method do in a Java Stream?",
        options: [
          "Sorts elements",
          "Selects elements based on a condition",
          "Maps elements",
          "Reduces elements",
        ],
        answer: 1,
      },
    ],
  },
  multithreading: {
    title: "Java Multithreading",
    description:
      "Learn to create and manage threads in Java for concurrent execution.",
    pages: [
      {
        title: "Introduction to Multithreading",
        content: `
# Multithreading

Threads enable concurrent execution of tasks.

\`\`\`java
public class ThreadExample extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
    
    public static void main(String[] args) {
        ThreadExample thread = new ThreadExample();
        thread.start();
    }
}
\`\`\`

Key concepts:
- **Thread**: Unit of execution.
- **start()**: Begins thread execution.
- **run()**: Defines thread's task.
        `,
      },
    ],
    quiz: [
      {
        question: "What method starts a thread in Java?",
        options: ["run()", "start()", "execute()", "begin()"],
        answer: 1,
      },
    ],
  },
  lambda: {
    title: "Java Lambda Expressions",
    description:
      "Understand lambda expressions in Java for concise functional programming.",
    pages: [
      {
        title: "Introduction to Lambda Expressions",
        content: `
# Lambda Expressions

Lambda expressions provide a concise way to implement functional interfaces.

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.forEach(name -> System.out.println(name));
    }
}
\`\`\`

Key concepts:
- **Lambda Syntax**: (args) -> expression.
- **Functional Interface**: Interface with one abstract method.
- **Conciseness**: Simplifies anonymous classes.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a lambda expression used for in Java?",
        options: [
          "Defining classes",
          "Implementing functional interfaces",
          "Handling exceptions",
          "Creating threads",
        ],
        answer: 1,
      },
    ],
  },
  annotations: {
    title: "Java Annotations",
    description:
      "Learn to use annotations in Java for metadata and code processing.",
    pages: [
      {
        title: "Introduction to Annotations",
        content: `
# Annotations

Annotations provide metadata for code elements.

\`\`\`java
public class AnnotationExample {
    @Override
    public String toString() {
        return "Custom toString";
    }
    
    public static void main(String[] args) {
        AnnotationExample obj = new AnnotationExample();
        System.out.println(obj); // Output: Custom toString
    }
}
\`\`\`

Key concepts:
- **Metadata**: Adds information to code.
- **Built-in Annotations**: Like \`\`@Override\`\`.
- **Custom Annotations**: Define your own metadata.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `@Override` annotation indicate in Java?",
        options: [
          "Method is deprecated",
          "Method overrides a parent method",
          "Method is static",
          "Method throws an exception",
        ],
        answer: 1,
      },
    ],
  },
  stringHandling: {
    title: "Java String Handling",
    description: "Learn to manipulate strings in Java using String methods.",
    pages: [
      {
        title: "Introduction to String Handling",
        content: `
# String Handling

Strings are immutable objects used to store and manipulate text.

\`\`\`java
public class StringExample {
    public static void main(String[] args) {
        String text = "Hello, Java!";
        System.out.println(text.toUpperCase()); // Output: HELLO, JAVA!
        System.out.println(text.substring(7)); // Output: Java!
        System.out.println(text.length()); // Output: 12
    }
}
\`\`\`

Key concepts:
- **Immutable**: Strings cannot be changed after creation.
- **String Methods**: toUpperCase(), substring(), length(), etc.
- **Concatenation**: Use + or concat() to join strings.
        `,
      },
      {
        title: "StringBuilder for Efficient Manipulation",
        content: `
# StringBuilder

StringBuilder provides mutable strings for efficient manipulation.

\`\`\`java
public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(", Java!");
        sb.insert(5, " World");
        System.out.println(sb.toString()); // Output: Hello World, Java!
    }
}
\`\`\`

Tips:
- **StringBuilder**: Use for frequent modifications.
- **Methods**: append(), insert(), delete().
- **Performance**: Faster than String for concatenation in loops.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a characteristic of Java Strings?",
        options: ["Mutable", "Immutable", "Dynamic", "Resizable"],
        answer: 1,
      },
      {
        question: "Which class is used for efficient string manipulation?",
        options: ["String", "StringBuilder", "StringBuffer", "CharArray"],
        answer: 1,
      },
    ],
  },
  fileIO: {
    title: "Java File I/O",
    description: "Learn to read from and write to files in Java.",
    pages: [
      {
        title: "Introduction to File I/O",
        content: `
# File I/O

Java provides classes to read from and write to files.

\`\`\`java
import java.io.*;

public class FileIOExample {
    public static void main(String[] args) {
        try {
            // Writing to a file
            FileWriter writer = new FileWriter("output.txt");
            writer.write("Hello, Java!");
            writer.close();
            
            // Reading from a file
            FileReader reader = new FileReader("output.txt");
            BufferedReader bufferedReader = new BufferedReader(reader);
            String line = bufferedReader.readLine();
            System.out.println(line); // Output: Hello, Java!
            bufferedReader.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Key concepts:
- **FileWriter**: Writes to files.
- **FileReader/BufferedReader**: Reads from files.
- **IOException**: Handle file-related errors.
        `,
      },
      {
        title: "Using Files Class",
        content: `
# Files Class

The Files class simplifies file operations with modern APIs.

\`\`\`java
import java.nio.file.*;
import java.io.IOException;

public class FilesExample {
    public static void main(String[] args) {
        try {
            // Write to file
            Files.writeString(Path.of("output.txt"), "Hello, Java!");
            
            // Read from file
            String content = Files.readString(Path.of("output.txt"));
            System.out.println(content); // Output: Hello, Java!
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Notes:
- **Files.writeString**: Writes text to a file.
- **Files.readString**: Reads text from a file.
- **Path**: Represents file system paths.
        `,
      },
    ],
    quiz: [
      {
        question: "Which class is used to write text to a file in Java?",
        options: ["FileReader", "FileWriter", "BufferedReader", "Files"],
        answer: 1,
      },
      {
        question: "What exception is thrown during file operations?",
        options: [
          "FileNotFoundException",
          "IOException",
          "NullPointerException",
          "ClassNotFoundException",
        ],
        answer: 1,
      },
    ],
  },
  jdbc: {
    title: "Java JDBC",
    description: "Connect to databases in Java using JDBC.",
    pages: [
      {
        title: "Introduction to JDBC",
        content: `
# JDBC

JDBC (Java Database Connectivity) enables database interactions.

\`\`\`java
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:sample.db";
        try (Connection conn = DriverManager.getConnection(url)) {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");
            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Key concepts:
- **Connection**: Establishes database connection.
- **Statement**: Executes SQL queries.
- **ResultSet**: Holds query results.
        `,
      },
      {
        title: "Prepared Statements",
        content: `
# Prepared Statements

Prepared statements prevent SQL injection and improve performance.

\`\`\`java
import java.sql.*;

public class PreparedStatementExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:sample.db";
        try (Connection conn = DriverManager.getConnection(url)) {
            String sql = "INSERT INTO users(name) VALUES(?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, "Alice");
            pstmt.executeUpdate();
            System.out.println("User added");
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Notes:
- **PreparedStatement**: Precompiles SQL queries.
- **setString**: Sets parameter values.
- **executeUpdate**: Executes insert/update queries.
        `,
      },
    ],
    quiz: [
      {
        question: "What does JDBC stand for in Java?",
        options: [
          "Java Database Connectivity",
          "Java Data Control",
          "Java Dynamic Connection",
          "Java Database Compiler",
        ],
        answer: 0,
      },
      {
        question: "Which class executes SQL queries in JDBC?",
        options: ["Connection", "Statement", "ResultSet", "DriverManager"],
        answer: 1,
      },
    ],
  },
  reflection: {
    title: "Java Reflection",
    description:
      "Use Java Reflection to inspect and modify classes at runtime.",
    pages: [
      {
        title: "Introduction to Reflection",
        content: `
# Reflection

Reflection allows inspection and modification of classes at runtime.

\`\`\`java
import java.lang.reflect.*;

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("java.util.ArrayList");
            Method[] methods = cls.getDeclaredMethods();
            for (Method method : methods) {
                System.out.println(method.getName());
            }
        } catch (ClassNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Key concepts:
- **Class.forName**: Loads a class dynamically.
- **getDeclaredMethods**: Retrieves class methods.
- **Runtime Inspection**: Access fields, methods, and constructors.
        `,
      },
      {
        title: "Invoking Methods",
        content: `
# Invoking Methods

Reflection can invoke methods dynamically.

\`\`\`java
import java.lang.reflect.*;

public class MethodInvokeExample {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("java.util.ArrayList");
            Object list = cls.getDeclaredConstructor().newInstance();
            Method addMethod = cls.getMethod("add", Object.class);
            addMethod.invoke(list, "Hello");
            System.out.println(list); // Output: [Hello]
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

Notes:
- **invoke**: Calls a method on an object.
- **getMethod**: Retrieves a public method.
- **Performance**: Reflection is slower than direct calls.
        `,
      },
    ],
    quiz: [
      {
        question: "What does Class.forName do in Java Reflection?",
        options: [
          "Creates a new class",
          "Loads a class dynamically",
          "Deletes a class",
          "Compiles a class",
        ],
        answer: 1,
      },
      {
        question: "Which method is used to call a method dynamically?",
        options: ["call", "invoke", "execute", "run"],
        answer: 1,
      },
    ],
  },
  concurrencyUtilities: {
    title: "Java Concurrency Utilities",
    description: "Master Java's concurrency utilities for advanced threading.",
    pages: [
      {
        title: "Introduction to Concurrency Utilities",
        content: `
# Concurrency Utilities

Java's concurrency utilities simplify thread management.

\`\`\`java
import java.util.concurrent.*;

public class ExecutorExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        executor.submit(() -> System.out.println("Task 1 running"));
        executor.submit(() -> System.out.println("Task 2 running"));
        executor.shutdown();
    }
}
\`\`\`

Key concepts:
- **ExecutorService**: Manages a pool of threads.
- **submit**: Executes a task asynchronously.
- **shutdown**: Stops the executor gracefully.
        `,
      },
      {
        title: "Using CompletableFuture",
        content: `
# CompletableFuture

CompletableFuture enables asynchronous programming.

\`\`\`java
import java.util.concurrent.*;

public class CompletableFutureExample {
    public static void main(String[] args) {
        CompletableFuture.supplyAsync(() -> "Hello")
            .thenApply(s -> s + ", Java!")
            .thenAccept(System.out::println); // Output: Hello, Java!
    }
}
\`\`\`

Notes:
- **supplyAsync**: Runs a task asynchronously.
- **thenApply**: Transforms the result.
- **thenAccept**: Consumes the final result.
        `,
      },
    ],
    quiz: [
      {
        question: "What does ExecutorService manage in Java?",
        options: ["Files", "Threads", "Databases", "Annotations"],
        answer: 1,
      },
      {
        question: "What is CompletableFuture used for?",
        options: [
          "Synchronous tasks",
          "Asynchronous programming",
          "File I/O",
          "Database queries",
        ],
        answer: 1,
      },
    ],
  },
};
