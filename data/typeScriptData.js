export const typeScriptData = {
  interfaces: {
    title: "TypeScript Interfaces",
    description:
      "Learn how to use interfaces in TypeScript for defining object shapes and contracts.",
    pages: [
      {
        title: "Introduction to Interfaces",
        content: `
# TypeScript Interfaces

Interfaces define the structure of objects in TypeScript, ensuring type safety.

\`\`\`typescript
// Defining an interface
interface User {
  name: string;
  age: number;
}
// Using an interface
const user: User = { name: "Alice", age: 25 };
console.log(user.name); // Output: "Alice"
\`\`\`

Key concepts:
- **Type safety**: Enforces object properties and types.
- **Reusable**: Can be used across multiple objects.
- **Optional properties**: Use \`?\` for non-required fields.
        `,
      },
      {
        title: "Interface Operations",
        content: `
# Interface Operations

Interfaces support extending, optional properties, and readonly fields.

\`\`\`typescript
interface Point {
  x: number;
  y: number;
  readonly id: string;
}
// Extending an interface
interface ColoredPoint extends Point {
  color: string;
}
const point: ColoredPoint = { x: 10, y: 20, id: "p1", color: "blue" };
// Optional property
interface Config {
  timeout?: number;
}
const config: Config = {}; // Valid
\`\`\`

Common uses:
- **extends**: Inherit properties from another interface.
- **readonly**: Prevent property modification after initialization.
- **Optional properties**: Allow flexibility in object shapes.
        `,
      },
      {
        title: "Interfaces vs Types",
        content: `
# Interfaces vs Types

Interfaces are often compared to type aliases in TypeScript.

\`\`\`typescript
// Interface
interface Animal {
  name: string;
}
// Type alias
type Creature = {
  name: string;
};
// Both can be used similarly
const dog: Animal = { name: "Rex" };
const cat: Creature = { name: "Whiskers" };
// Extending with type
type Bird = Creature & { canFly: boolean };
\`\`\`

Tips:
- Use interfaces for object shapes and extensibility.
- Use types for unions, intersections, or primitives.
- Interfaces can be merged via declaration merging.
        `,
      },
    ],
    quiz: [
      {
        question: "How do you mark a property as optional in an interface?",
        options: [
          "property: type!",
          "property?: type",
          "property: type?",
          "property: optional type",
        ],
        answer: 1,
      },
      {
        question: "What keyword extends an interface?",
        options: ["implements", "extends", "inherits", "with"],
        answer: 1,
      },
      {
        question: "Can interfaces be used for primitive types?",
        options: [
          "Yes, like string or number",
          "No, only for objects",
          "Only with type aliases",
          "Only with unions",
        ],
        answer: 1,
      },
    ],
  },
  types: {
    title: "TypeScript Types",
    description:
      "Master TypeScript type aliases for flexible and reusable type definitions.",
    pages: [
      {
        title: "Introduction to Types",
        content: `
# TypeScript Types

Type aliases allow you to define custom types for variables, objects, or unions.

\`\`\`typescript
// Defining a type alias
type ID = string | number;
const userId: ID = "abc123";
console.log(userId); // Output: "abc123"
// Object type
type Product = {
  name: string;
  price: number;
};
const item: Product = { name: "Book", price: 20 };
\`\`\`

Key features:
- **Flexible**: Supports unions, intersections, and primitives.
- **Reusable**: Can be applied to multiple variables.
- **Explicit**: Improves code clarity and maintainability.
        `,
      },
      {
        title: "Union and Intersection Types",
        content: `
# Union and Intersection Types

Types can combine multiple types using unions (\`|\`) or intersections (\`&\`).

\`\`\`typescript
// Union type
type Status = "success" | "error" | "loading";
const currentStatus: Status = "success";
// Intersection type
type Named = { name: string };
type Priced = { price: number };
type Item = Named & Priced;
const product: Item = { name: "Pen", price: 5 };
\`\`\`

Notes:
- Use unions for values that can be one of several types.
- Use intersections to combine multiple type requirements.
- Combine with interfaces for complex structures.
        `,
      },
      {
        title: "Utility Types",
        content: `
# Utility Types

TypeScript provides built-in utility types to transform types.

\`\`\`typescript
interface User {
  name: string;
  email: string;
}
// Partial makes all properties optional
type PartialUser = Partial<User>;
const partial: PartialUser = { name: "Bob" };
// Pick selects specific properties
type UserName = Pick<User, "name">;
const nameOnly: UserName = { name: "Alice" };
\`\`\`

Common utility types:
- **Partial<T>**: Makes all properties optional.
- **Pick<T, K>**: Selects specific properties.
- **Omit<T, K>**: Excludes specific properties.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `|` operator do in a type alias?",
        options: [
          "Intersects types",
          "Creates a union type",
          "Excludes types",
          "Merges interfaces",
        ],
        answer: 1,
      },
      {
        question: "Which utility type makes all properties optional?",
        options: ["Pick", "Omit", "Partial", "Required"],
        answer: 2,
      },
      {
        question: "What is the result of `type X = string | number`?",
        options: [
          "A type that is both string and number",
          "A type that is either string or number",
          "A type that excludes string and number",
          "A type that merges string and number",
        ],
        answer: 1,
      },
    ],
  },
  basicTypes: {
    title: "TypeScript Basic Types",
    description:
      "Learn the foundational type annotations in TypeScript for variables and functions.",
    pages: [
      {
        title: "Introduction to Basic Types",
        content: `
# Basic Types

TypeScript provides basic types to annotate variables and ensure type safety.

\`\`\`typescript
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;
let id: any = "xyz123"; // Avoid using any when possible
console.log(name, age, isActive, id);
\`\`\`

Key concepts:
- **string, number, boolean**: Common primitive types.
- **any**: Disables type checking (use sparingly).
- **Type inference**: TypeScript infers types when not explicitly annotated.
        `,
      },
    ],
    quiz: [
      {
        question: "Which type allows any value without type checking?",
        options: ["string", "number", "any", "void"],
        answer: 2,
      },
    ],
  },
  functions: {
    title: "TypeScript Functions",
    description:
      "Master function type annotations in TypeScript for safer code.",
    pages: [
      {
        title: "Introduction to Function Types",
        content: `
# Function Types

TypeScript allows you to specify types for function parameters and return values.

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}
const result: number = add(5, 3); // 8
// Function expression
const multiply: (x: number, y: number) => number = (x, y) => x * y;
\`\`\`

Key concepts:
- **Parameter types**: Ensure correct input types.
- **Return type**: Specify what the function returns.
- **Arrow function types**: Use for function expressions.
        `,
      },
    ],
    quiz: [
      {
        question:
          "What does the `: number` after a function's parameters specify?",
        options: [
          "Parameter count",
          "Return type",
          "Parameter type",
          "Function name",
        ],
        answer: 1,
      },
    ],
  },
  enums: {
    title: "TypeScript Enums",
    description:
      "Learn to use enums in TypeScript for defining a set of named constants.",
    pages: [
      {
        title: "Introduction to Enums",
        content: `
# Enums

Enums allow you to define a set of named constants, useful for fixed values.

\`\`\`typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
console.log(move); // 0 (numeric value)
enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}
let state: Status = Status.Success;
\`\`\`

Key concepts:
- **Numeric enums**: Assign numbers by default (0, 1, 2...).
- **String enums**: Use string values for clarity.
- **Compile to JavaScript**: Enums generate lookup objects.
        `,
      },
    ],
    quiz: [
      {
        question:
          "What is the default value of the first member in a numeric enum?",
        options: ["1", "0", "undefined", "null"],
        answer: 1,
      },
    ],
  },
  generics: {
    title: "TypeScript Generics",
    description:
      "Understand generics in TypeScript for reusable and type-safe code.",
    pages: [
      {
        title: "Introduction to Generics",
        content: `
# Generics

Generics allow you to create reusable components with flexible types.

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}
const num: number = identity<number>(42);
const str: string = identity<string>("Hello");
interface Box<T> {
  contents: T;
}
const numberBox: Box<number> = { contents: 100 };
\`\`\`

Key concepts:
- **Type parameter (T)**: Placeholder for a type.
- **Type safety**: Ensures consistent types.
- **Reusable**: Works with any type specified at usage.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a generic type parameter do?",
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
  typeAssertions: {
    title: "TypeScript Type Assertions",
    description:
      "Learn to use type assertions in TypeScript to override type inference.",
    pages: [
      {
        title: "Introduction to Type Assertions",
        content: `
# Type Assertions

Type assertions tell TypeScript to treat a value as a specific type.

\`\`\`typescript
let value: any = "Hello, TypeScript";
let strLength: number = (value as string).length;
console.log(strLength); // 16
// Angle-bracket syntax
let str: string = <string>value;
interface User {
  name: string;
}
let data: any = { name: "Bob" };
let user: User = data as User;
\`\`\`

Key concepts:
- **as syntax**: Common way to assert types.
- **Angle-bracket syntax**: Alternative, less common.
- **Use cautiously**: Can bypass type safety if misused.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a type assertion do?",
        options: [
          "Changes a value's type at runtime",
          "Tells TypeScript to treat a value as a specific type",
          "Creates a new type",
          "Removes type checking",
        ],
        answer: 1,
      },
    ],
  },
  typeNarrowing: {
    title: "TypeScript Type Narrowing",
    description:
      "Master type narrowing in TypeScript to refine types within code blocks.",
    pages: [
      {
        title: "Introduction to Type Narrowing",
        content: `
# Type Narrowing

Type narrowing refines a value's type within a specific scope using checks.

\`\`\`typescript
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // value is string here
  } else {
    console.log(value.toString().length); // value is number here
  }
}
// Using 'in' operator
interface Car { wheels: number }
interface Boat { sails: number }
function describe(vehicle: Car | Boat) {
  if ("wheels" in vehicle) {
    console.log(vehicle.wheels); // vehicle is Car
  }
}
\`\`\`

Key concepts:
- **typeof**: Narrows based on JavaScript types.
- **in operator**: Checks for property existence.
- **Discriminated unions**: Use a common property to narrow types.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `typeof` check do in type narrowing?",
        options: [
          "Checks for property existence",
          "Narrows based on JavaScript types",
          "Creates a union type",
          "Asserts a type",
        ],
        answer: 1,
      },
    ],
  },
  advancedTypes: {
    title: "TypeScript Advanced Types",
    description:
      "Explore advanced TypeScript types like conditional types and mapped types.",
    pages: [
      {
        title: "Introduction to Advanced Types",
        content: `
# Advanced Types

Conditional and mapped types enable complex type transformations.

\`\`\`typescript
// Conditional type
type IsString<T> = T extends string ? true : false;
type Result = IsString<"hello">; // true
// Mapped type
type ReadonlyProps<T> = {
  readonly [K in keyof T]: T[K];
};
interface User {
  name: string;
  age: number;
}
type ReadonlyUser = ReadonlyProps<User>;
const user: ReadonlyUser = { name: "Alice", age: 25 };
\`\`\`

Key concepts:
- **Conditional types**: Use \`\`extends\`\` for type logic.
- **Mapped types**: Transform properties dynamically.
- **keyof**: Gets keys of an object type.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a conditional type use to define type logic?",
        options: ["implements", "extends", "in", "as"],
        answer: 1,
      },
    ],
  },
  modules: {
    title: "TypeScript Modules",
    description:
      "Learn TypeScript module systems for organizing and typing code.",
    pages: [
      {
        title: "Introduction to Modules",
        content: `
# Modules

TypeScript supports ES modules for organizing code and type definitions.

\`\`\`typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
export interface MathResult {
  value: number;
}
// main.ts
import { add, MathResult } from "./math";
const result: MathResult = { value: add(5, 3) };
console.log(result.value); // 8
\`\`\`

Key concepts:
- **export/import**: Share and use code between files.
- **Type exports**: Include interfaces and types.
- **Module resolution**: Configured in tsconfig.json.
        `,
      },
    ],
    quiz: [
      {
        question: "What keyword exports a function in a TypeScript module?",
        options: ["module", "export", "import", "declare"],
        answer: 1,
      },
    ],
  },
  tuples: {
    title: "TypeScript Tuples",
    description:
      "Learn how to use tuples in TypeScript for fixed-length arrays with specific types.",
    pages: [
      {
        title: "Introduction to Tuples",
        content: `
# Tuples

Tuples are arrays with a fixed length and specific types for each element.

\`\`\`typescript
// Defining a tuple
type Point = [number, number];
const point: Point = [10, 20];
console.log(point[0]); // Output: 10
// Tuple with mixed types
type UserInfo = [string, number, boolean];
const user: UserInfo = ["Alice", 25, true];
\`\`\`

Key concepts:
- **Fixed length**: Tuples have a set number of elements.
- **Type safety**: Each position has a specific type.
- **Use case**: Represent structured data like coordinates or records.
        `,
      },
      {
        title: "Tuple Operations",
        content: `
# Tuple Operations

Tuples support array-like operations with type constraints.

\`\`\`typescript
type Coord = [number, number];
let coord: Coord = [5, 10];
// Destructuring
const [x, y] = coord; // x: number, y: number
console.log(x, y); // Output: 5, 10
// Optional elements
type OptionalCoord = [number, number?];
const single: OptionalCoord = [5]; // Valid
\`\`\`

Tips:
- Use destructuring to extract tuple elements.
- Support optional elements with \`?\` for flexibility.
- Avoid overusing tuples for complex data; consider interfaces.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a TypeScript tuple?",
        options: [
          "A dynamic array",
          "A fixed-length array with specific types",
          "A type alias for objects",
          "A union of types",
        ],
        answer: 1,
      },
      {
        question: "How do you make a tuple element optional?",
        options: ["element: type?", "element?: type", "[element?]", "element!"],
        answer: 1,
      },
    ],
  },
  decorators: {
    title: "TypeScript Decorators",
    description:
      "Master TypeScript decorators for adding metadata and modifying behavior.",
    pages: [
      {
        title: "Introduction to Decorators",
        content: `
# Decorators

Decorators are special functions that modify classes, methods, or properties.

\`\`\`typescript
function log(target: any, propertyKey: string) {
  console.log(\`\${propertyKey} was called\`);
}
class Example {
  @log
  greet(): void {
    console.log("Hello!");
  }
}
const ex = new Example();
ex.greet(); // Output: "greet was called", "Hello!"
\`\`\`

Key concepts:
- **Experimental**: Requires \`\`experimentalDecorators\`\` in tsconfig.json.
- **Use cases**: Logging, validation, or framework metadata.
- **Syntax**: Applied using \`\`@\`\` before a class, method, or property.
        `,
      },
      {
        title: "Decorator Factories",
        content: `
# Decorator Factories

Decorator factories are functions that return decorators for customization.

\`\`\`typescript
function configurable(value: boolean) {
  return function (target: any, propertyKey: string) {
    console.log(\`\${propertyKey} is \${value ? "on" : "off"}\`);
  };
}
class Config {
  @configurable(true)
  feature(): void {
    console.log("Feature active");
  }
}
const config = new Config();
config.feature(); // Output: "feature is on", "Feature active"
\`\`\`

Tips:
- Use factories for dynamic decorator behavior.
- Combine with metadata reflection for advanced use.
- Keep decorators simple to maintain readability.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a TypeScript decorator modify?",
        options: [
          "Variables",
          "Classes, methods, or properties",
          "Type aliases",
          "Interfaces",
        ],
        answer: 1,
      },
      {
        question: "What is required to use decorators in TypeScript?",
        options: [
          "strict mode",
          "experimentalDecorators in tsconfig.json",
          "module exports",
          "type assertions",
        ],
        answer: 1,
      },
    ],
  },
  typeGuards: {
    title: "TypeScript Type Guards",
    description:
      "Learn TypeScript type guards for safer type narrowing and runtime checks.",
    pages: [
      {
        title: "Introduction to Type Guards",
        content: `
# Type Guards

Type guards are functions or checks that narrow types at runtime.

\`\`\`typescript
// User-defined type guard
function isString(value: any): value is string {
  return typeof value === "string";
}
function process(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // value is string
  } else {
    console.log(value.toFixed(2)); // value is number
  }
}
process("hello"); // Output: "HELLO"
\`\`\`

Key concepts:
- **value is Type**: Syntax for type guard return.
- **Runtime checks**: Combine type safety with logic.
- **Built-in guards**: Use \`\`typeof\`\`, \`\`instanceof\`\`, or \`\`in\`\`.
        `,
      },
      {
        title: "Custom Type Guards",
        content: `
# Custom Type Guards

Create type guards for complex types or interfaces.

\`\`\`typescript
interface Dog { bark: () => void }
interface Cat { meow: () => void }
function isDog(pet: Dog | Cat): pet is Dog {
  return "bark" in pet;
}
function interact(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark(); // pet is Dog
  } else {
    pet.meow(); // pet is Cat
  }
}
\`\`\`

Tips:
- Use for discriminated unions or complex types.
- Ensure guards are reliable to avoid runtime errors.
- Combine with \`\`in\`\` or \`\`instanceof\`\` for clarity.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a type guard return to narrow a type?",
        options: ["boolean", "value is Type", "Type", "void"],
        answer: 1,
      },
      {
        question: "Which operator is commonly used in type guards?",
        options: ["as", "in", "extends", "keyof"],
        answer: 1,
      },
    ],
  },
  declarationFiles: {
    title: "TypeScript Declaration Files",
    description:
      "Understand TypeScript declaration files for typing JavaScript code.",
    pages: [
      {
        title: "Introduction to Declaration Files",
        content: `
# Declaration Files

Declaration files (\`\`.d.ts\`\`) provide type information for JavaScript code.

\`\`\`typescript
// myLib.d.ts
declare function greet(name: string): string;
declare interface Config {
  enabled: boolean;
}
// main.ts
import { greet, Config } from "./myLib";
const message: string = greet("Alice");
const config: Config = { enabled: true };
console.log(message); // Output: "Alice"
\`\`\`

Key concepts:
- **declare**: Marks types without implementation.
- **.d.ts files**: Contain only type information.
- **Use case**: Type JavaScript libraries or modules.
        `,
      },
      {
        title: "Using DefinitelyTyped",
        content: `
# Using DefinitelyTyped

DefinitelyTyped provides community-maintained declaration files.

\`\`\`typescript
// Install types for a library (e.g., lodash)
import _ from "lodash";
const shuffled: number[] = _.shuffle([1, 2, 3, 4]);
console.log(shuffled); // e.g., [3, 1, 4, 2]
// Types installed via npm (e.g., @types/lodash)
\`\`\`

Tips:
- Install types with \`\`npm install @types/<library>\`\`.
- Use for untyped JavaScript libraries.
- Contribute to DefinitelyTyped for missing types.
        `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of a \`.d.ts\` file?",
        options: [
          "Run JavaScript code",
          "Provide type information",
          "Compile TypeScript",
          "Define classes",
        ],
        answer: 1,
      },
      {
        question: "Where are community-maintained types typically found?",
        options: [
          "TypeScript core",
          "DefinitelyTyped",
          "npm core",
          "JavaScript runtime",
        ],
        answer: 1,
      },
    ],
  },
};
