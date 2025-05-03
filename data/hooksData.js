export const hooksData = {
  useState: {
    title: "useState Hook",
    description:
      "React useState is a Hook that lets you add state to function components.",
    pages: [
      {
        title: "Introduction to useState",
        content: `
# useState Hook

The useState hook lets you add state to functional components. It returns a pair: the current state value and a function that lets you update it.

\`\`\`jsx
const [state, setState] = useState(initialState);
\`\`\`

useState can be used for:
- Storing form input values
- Toggling UI elements
- Counting or tracking values
- Managing component state
        `,
      },
      {
        title: "Using useState",
        content: `
# Using useState

Here's a simple counter example:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

Remember:
- The setState function completely replaces the previous state
- You can use functional updates: \`setCount(prevCount => prevCount + 1)\`
- You can use multiple useState hooks in one component
        `,
      },
      {
        title: "Rules of useState",
        content: `
# Rules of useState

- Only call useState at the top level of your component
- Don't call useState inside loops, conditions, or nested functions
- Always provide an initial state value
- useState can take a function as initial state for lazy initialization

\`\`\`jsx
// Lazy initialization
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation();
  return initialState;
});
\`\`\`
        `,
      },
    ],
    quiz: [
      {
        question: "What does useState return?",
        options: [
          "A single state value",
          "A state value and a function to update it",
          "A function to get and set state",
          "An object with state properties",
        ],
        answer: 1,
      },
      {
        question: "Where should you call useState?",
        options: [
          "Anywhere in your component",
          "Inside nested functions",
          "Only at the top level of your component",
          "Inside conditionals for better performance",
        ],
        answer: 2,
      },
      {
        question: "How do you update state based on previous state?",
        options: [
          "setState(state + 1)",
          "setState(prevState => prevState + 1)",
          "setState.update(prevState + 1)",
          "state = state + 1",
        ],
        answer: 1,
      },
    ],
  },
  useEffect: {
    title: "useEffect Hook",
    description:
      "React useEffect lets you perform side effects in function components.",
    pages: [
      {
        title: "Introduction to useEffect",
        content: `
# useEffect Hook

The useEffect hook handles side effects like data fetching, subscriptions, or DOM manipulation.

\`\`\`jsx
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    document.title = 'My App';
  });
  return <div>Hello, World!</div>;
}
\`\`\`

Key concepts:
- Runs after every render by default
- Can clean up effects with a return function
- Accepts a dependency array to control when it runs
        `,
      },
      {
        title: "Using useEffect with Dependencies",
        content: `
# Using useEffect with Dependencies

Control when useEffect runs using a dependency array.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

Tips:
- Empty array (\`\`[]\`\`) runs effect once on mount
- Include all dependencies used in the effect
- Return a cleanup function to avoid memory leaks
        `,
      },
    ],
    quiz: [
      {
        question: "When does useEffect run by default?",
        options: [
          "Only on mount",
          "After every render",
          "Only on unmount",
          "When state changes",
        ],
        answer: 1,
      },
    ],
  },
  useRef: {
    title: "useRef Hook",
    description:
      "React useRef provides a mutable reference object that persists across renders.",
    pages: [
      {
        title: "Introduction to useRef",
        content: `
# useRef Hook

useRef creates a mutable object that persists for the lifetime of the component.

\`\`\`jsx
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
\`\`\`

Key concepts:
- **.current**: Holds the mutable value
- Commonly used for DOM references
- Does not cause re-renders when changed
        `,
      },
    ],
    quiz: [
      {
        question: "What is a common use case for useRef?",
        options: [
          "Managing state",
          "Accessing DOM elements",
          "Fetching data",
          "Handling events",
        ],
        answer: 1,
      },
    ],
  },
  useContext: {
    title: "useContext Hook",
    description:
      "React useContext allows you to access context values in function components.",
    pages: [
      {
        title: "Introduction to useContext",
        content: `
# useContext Hook

useContext lets you subscribe to React context without nesting components.

\`\`\`jsx
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return <button className={theme}>Click me</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

Key concepts:
- Avoids prop drilling
- Requires a context created with \`\`createContext\`\`
- Updates when context value changes
        `,
      },
    ],
    quiz: [
      {
        question: "What does useContext help avoid?",
        options: [
          "State management",
          "Prop drilling",
          "Side effects",
          "Re-renders",
        ],
        answer: 1,
      },
    ],
  },
  useReducer: {
    title: "useReducer Hook",
    description:
      "React useReducer manages complex state logic with a reducer function.",
    pages: [
      {
        title: "Introduction to useReducer",
        content: `
# useReducer Hook

useReducer is an alternative to useState for complex state logic.

\`\`\`jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
\`\`\`

Key concepts:
- **Reducer**: Pure function that updates state
- **Dispatch**: Triggers state changes
- Suitable for complex state transitions
        `,
      },
    ],
    quiz: [
      {
        question: "What does the dispatch function do in useReducer?",
        options: [
          "Fetches data",
          "Triggers state changes",
          "Renders components",
          "Manages context",
        ],
        answer: 1,
      },
    ],
  },
  useCallback: {
    title: "useCallback Hook",
    description:
      "React useCallback memoizes callback functions to prevent unnecessary re-renders.",
    pages: [
      {
        title: "Introduction to useCallback",
        content: `
# useCallback Hook

useCallback returns a memoized callback function that only changes if dependencies change.

\`\`\`jsx
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`

Key concepts:
- Prevents creating new function instances on every render
- Requires a dependency array
- Useful for passing callbacks to child components
        `,
      },
    ],
    quiz: [
      {
        question: "Why is useCallback used?",
        options: [
          "To manage state",
          "To memoize callback functions",
          "To fetch data",
          "To access context",
        ],
        answer: 1,
      },
    ],
  },
  useMemo: {
    title: "useMemo Hook",
    description:
      "React useMemo memoizes expensive computations to optimize performance.",
    pages: [
      {
        title: "Introduction to useMemo",
        content: `
# useMemo Hook

useMemo returns a memoized value, recomputing only when dependencies change.

\`\`\`jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  
  const expensiveCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  
  return (
    <div>
      <p>Sum: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

Key concepts:
- Optimizes performance for costly computations
- Requires a dependency array
- Returns a value, not a function
        `,
      },
    ],
    quiz: [
      {
        question: "What does useMemo return?",
        options: [
          "A memoized function",
          "A memoized value",
          "A state updater",
          "A context value",
        ],
        answer: 1,
      },
    ],
  },
  useTransition: {
    title: "useTransition Hook",
    description:
      "React useTransition manages concurrent updates for smoother UI transitions.",
    pages: [
      {
        title: "Introduction to useTransition",
        content: `
# useTransition Hook

useTransition lets you mark updates as non-urgent to keep the UI responsive.

\`\`\`jsx
import React, { useState, useTransition } from 'react';

function SearchList() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  
  const handleChange = (e) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };
  
  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
      {isPending ? <p>Loading...</p> : <p>Results for: {query}</p>}
    </div>
  );
}
\`\`\`

Key concepts:
- **isPending**: Indicates if transition is in progress
- **startTransition**: Marks updates as non-blocking
- Improves responsiveness for heavy updates
        `,
      },
    ],
    quiz: [
      {
        question: "What does startTransition do in useTransition?",
        options: [
          "Fetches data",
          "Marks updates as non-blocking",
          "Memoizes functions",
          "Manages state",
        ],
        answer: 1,
      },
    ],
  },
  customHooks: {
    title: "Custom Hooks",
    description: "Learn to create custom React hooks for reusable logic.",
    pages: [
      {
        title: "Introduction to Custom Hooks",
        content: `
# Custom Hooks

Custom hooks are functions that use React hooks to share logic between components.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

function App() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window size: {width} x {height}</p>
    </div>
  );
}
\`\`\`

Key concepts:
- Name starts with "use" by convention
- Can combine multiple hooks
- Encapsulates reusable logic
        `,
      },
    ],
    quiz: [
      {
        question: "What is a custom hook?",
        options: [
          "A new React component",
          "A function using React hooks",
          "A context provider",
          "A state manager",
        ],
        answer: 1,
      },
    ],
  },
  useId: {
    title: "useId Hook",
    description:
      "React useId generates unique IDs for accessibility attributes in components.",
    pages: [
      {
        title: "Introduction to useId",
        content: `
# useId Hook

useId generates a unique ID for associating HTML elements, useful for accessibility.

\`\`\`jsx
import React, { useId } from 'react';

function FormInput() {
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </div>
  );
}
\`\`\`

Key concepts:
- Generates stable, unique IDs across renders
- Ideal for accessibility attributes like \`htmlFor\` and \`id\`
- Automatically handles server-side rendering compatibility
        `,
      },
      {
        title: "Using Multiple IDs",
        content: `
# Using Multiple IDs

You can use useId to generate multiple unique IDs in a component.

\`\`\`jsx
import React, { useId } from 'react';

function Form() {
  const nameId = useId();
  const emailId = useId();
  
  return (
    <div>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input id={nameId} type="text" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" />
      </div>
    </div>
  );
}
\`\`\`

Tips:
- Call useId multiple times for different elements
- Avoid using useId for non-accessibility purposes
- IDs are prefixed to ensure uniqueness across components
        `,
      },
    ],
    quiz: [
      {
        question: "What is the primary use of useId?",
        options: [
          "Managing state",
          "Generating unique IDs for accessibility",
          "Handling side effects",
          "Memoizing values",
        ],
        answer: 1,
      },
      {
        question: "What attribute is commonly used with useId in forms?",
        options: ["className", "htmlFor", "onClick", "value"],
        answer: 1,
      },
    ],
  },
  useLayoutEffect: {
    title: "useLayoutEffect Hook",
    description:
      "React useLayoutEffect runs synchronously after DOM updates but before painting.",
    pages: [
      {
        title: "Introduction to useLayoutEffect",
        content: `
# useLayoutEffect Hook

useLayoutEffect is similar to useEffect but runs synchronously after DOM updates, ideal for measuring layout.

\`\`\`jsx
import React, { useLayoutEffect, useRef } from 'react';

function MeasureElement() {
  const divRef = useRef(null);
  
  useLayoutEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      console.log(\`Width: \${width}, Height: \${height}\`);
    }
  }, []);
  
  return <div ref={divRef} style={{ width: '200px', height: '100px' }}>Measure me</div>;
}
\`\`\`

Key concepts:
- Runs before browser paints the screen
- Useful for DOM measurements
- Same API as useEffect (dependency array, cleanup)
        `,
      },
      {
        title: "When to Use useLayoutEffect",
        content: `
# When to Use useLayoutEffect

Use useLayoutEffect for updates that must happen before the user sees the UI.

\`\`\`jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

function ScrollToTop() {
  const containerRef = useRef(null);
  const [itemCount, setItemCount] = useState(1);
  
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [itemCount]);
  
  return (
    <div>
      <button onClick={() => setItemCount(itemCount + 1)}>Add Item</button>
      <div ref={containerRef} style={{ height: '100px', overflow: 'auto' }}>
        {Array(itemCount).fill().map((_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
    </div>
  );
}
\`\`\`

Tips:
- Prefer useEffect unless layout measurements are needed
- Avoid heavy computations to prevent blocking paint
- Cleanup functions work the same as in useEffect
        `,
      },
    ],
    quiz: [
      {
        question: "When does useLayoutEffect run compared to useEffect?",
        options: [
          "After browser paints",
          "Before DOM updates",
          "Synchronously after DOM updates",
          "Asynchronously after render",
        ],
        answer: 2,
      },
      {
        question: "What is a common use case for useLayoutEffect?",
        options: [
          "Fetching data",
          "DOM measurements",
          "Managing state",
          "Memoizing callbacks",
        ],
        answer: 1,
      },
    ],
  },
  useDeferredValue: {
    title: "useDeferredValue Hook",
    description:
      "React useDeferredValue defers updates to improve UI responsiveness.",
    pages: [
      {
        title: "Introduction to useDeferredValue",
        content: `
# useDeferredValue Hook

useDeferredValue creates a deferred version of a value that updates after high-priority tasks.

\`\`\`jsx
import React, { useState, useDeferredValue } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  
  const results = useMemo(() => {
    // Simulate expensive computation
    return Array(1000).fill().map((_, i) => \`\${deferredQuery} - \${i}\`);
  }, [deferredQuery]);
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.slice(0, 10).map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

Key concepts:
- Defers non-critical updates to keep UI responsive
- Useful for expensive rendering tasks
- Works well with useMemo or useTransition
        `,
      },
      {
        title: "Combining with useTransition",
        content: `
# Combining with useTransition

Use useDeferredValue with useTransition for better control over updates.

\`\`\`jsx
import React, { useState, useDeferredValue, useTransition } from 'react';

function SearchApp() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [isPending, startTransition] = useTransition();
  
  const handleChange = (e) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };
  
  const results = useMemo(() => {
    return Array(1000).fill().map((_, i) => \`\${deferredQuery} - \${i}\`);
  }, [deferredQuery]);
  
  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
      {isPending ? <p>Loading...</p> : (
        <ul>
          {results.slice(0, 10).map((result, i) => (
            <li key={i}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

Tips:
- Use for heavy computations tied to user input
- Combine with useTransition for loading states
- Deferred value lags behind the actual value
        `,
      },
    ],
    quiz: [
      {
        question: "What does useDeferredValue do?",
        options: [
          "Memoizes functions",
          "Defers non-critical updates",
          "Manages context",
          "Generates unique IDs",
        ],
        answer: 1,
      },
      {
        question: "What is useDeferredValue best used for?",
        options: [
          "DOM measurements",
          "Expensive rendering tasks",
          "State management",
          "Event handling",
        ],
        answer: 1,
      },
    ],
  },
  useSyncExternalStore: {
    title: "useSyncExternalStore Hook",
    description:
      "React useSyncExternalStore synchronizes external stores with React state.",
    pages: [
      {
        title: "Introduction to useSyncExternalStore",
        content: `
# useSyncExternalStore Hook

useSyncExternalStore allows React to subscribe to external stores safely.

\`\`\`jsx
import React, { useSyncExternalStore } from 'react';

function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();
  return {
    getState: () => state,
    setState: (newState) => {
      state = newState;
      listeners.forEach(listener => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const store = createStore({ count: 0 });

function Counter() {
  const count = useSyncExternalStore(
    store.subscribe,
    store.getState
  );
  
  return (
    <div>
      <p>Count: {count.count}</p>
      <button onClick={() => store.setState({ count: count.count + 1 })}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

Key concepts:
- Synchronizes external state with React
- Requires subscribe and getState functions
- Prevents tearing in concurrent rendering
        `,
      },
      {
        title: "Using with External Libraries",
        content: `
# Using with External Libraries

Integrate useSyncExternalStore with libraries like Redux.

\`\`\`jsx
import React, { useSyncExternalStore } from 'react';
import { createStore } from 'redux';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const reduxStore = createStore(reducer);

function Counter() {
  const state = useSyncExternalStore(
    (callback) => reduxStore.subscribe(callback),
    () => reduxStore.getState()
  );
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => reduxStore.dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

Tips:
- Use for integrating non-React state management
- Ensure subscribe returns an unsubscribe function
- Avoid overuse for simple state needs
        `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of useSyncExternalStore?",
        options: [
          "Managing local state",
          "Synchronizing external stores",
          "Deferring updates",
          "Generating IDs",
        ],
        answer: 1,
      },
      {
        question: "What does useSyncExternalStore require?",
        options: [
          "A dependency array",
          "Subscribe and getState functions",
          "A reducer function",
          "A context provider",
        ],
        answer: 1,
      },
    ],
  },
  useImperativeHandle: {
    title: "useImperativeHandle Hook",
    description:
      "React useImperativeHandle customizes the instance value exposed to parent components.",
    pages: [
      {
        title: "Introduction to useImperativeHandle",
        content: `
# useImperativeHandle Hook

useImperativeHandle customizes the ref exposed to parent components when using forwardRef.

\`\`\`jsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focusAndClear: () => {
      inputRef.current.focus();
      inputRef.current.value = '';
    },
  }));
  
  return <input ref={inputRef} type="text" />;
});

function App() {
  const inputRef = useRef();
  
  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusAndClear()}>
        Clear and Focus
      </button>
    </div>
  );
}
\`\`\`

Key concepts:
- Used with forwardRef to expose custom methods
- Limits what the parent can access via ref
- Requires a dependency array for updates
        `,
      },
      {
        title: "Advanced Usage with Dependencies",
        content: `
# Advanced Usage with Dependencies

Control when the imperative handle updates with dependencies.

\`\`\`jsx
import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const CustomInput = forwardRef(({ prefix }, ref) => {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  
  useImperativeHandle(ref, () => ({
    reset: () => {
      setValue('');
      inputRef.current.focus();
    },
    getPrefixedValue: () => \`\${prefix}\${value}\`,
  }), [prefix, value]);
  
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

function App() {
  const inputRef = useRef();
  
  return (
    <div>
      <CustomInput ref={inputRef} prefix="ID-" />
      <button onClick={() => console.log(inputRef.current.getPrefixedValue())}>
        Log Value
      </button>
      <button onClick={() => inputRef.current.reset()}>
        Reset
      </button>
    </div>
  );
}
\`\`\`

Tips:
- Use sparingly to avoid breaking React's declarative model
- Include all dependencies used in the handle
- Combine with useRef for internal DOM access
        `,
      },
    ],
    quiz: [
      {
        question: "What does useImperativeHandle customize?",
        options: [
          "Component state",
          "Ref exposed to parents",
          "Context values",
          "Deferred updates",
        ],
        answer: 1,
      },
      {
        question: "What is useImperativeHandle typically used with?",
        options: ["useState", "useEffect", "forwardRef", "useContext"],
        answer: 2,
      },
    ],
  },
};
