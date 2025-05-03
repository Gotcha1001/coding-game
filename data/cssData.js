export const cssData = {
  flexbox: {
    title: "Flexbox",
    description: "Learn how to use CSS Flexbox for flexible layouts.",
    pages: [
      {
        title: "Introduction to Flexbox",
        content: `
  # Flexbox
  
  Flexbox is a CSS layout module designed to make it easier to create flexible and responsive layouts.
  
  \`\`\`css
  .container {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .item {
    flex: 1;
  }
  \`\`\`
  
  Key concepts:
  - **Flex Container**: The parent element with \`display: flex\`.
  - **Flex Items**: The children of the flex container.
  - **Main Axis**: Determined by \`flex-direction\` (row or column).
          `,
      },
      {
        title: "Flexbox Properties",
        content: `
  # Flexbox Properties
  
  Flexbox provides properties to control alignment, spacing, and sizing.
  
  \`\`\`css
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .item {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
  }
  \`\`\`
  
  Important properties:
  - **justify-content**: Aligns items along the main axis.
  - **align-items**: Aligns items along the cross axis.
  - **flex-wrap**: Controls whether items wrap to new lines.
          `,
      },
      {
        title: "Advanced Flexbox",
        content: `
  # Advanced Flexbox
  
  Use Flexbox for complex layouts and responsive designs.
  
  \`\`\`css
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .header, .footer {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 0 auto;
  }
  \`\`\`
  
  Tips:
  - Combine \`flex: 1\` for full-width items.
  - Use media queries for responsive adjustments.
  - Avoid overusing Flexbox when simpler solutions exist.
          `,
      },
    ],
    quiz: [
      {
        question: "What does `display: flex` do?",
        options: [
          "Creates a grid layout",
          "Makes an element a flex container",
          "Hides the element",
          "Sets the element to inline",
        ],
        answer: 1,
      },
      {
        question: "Which property aligns items along the main axis?",
        options: [
          "align-items",
          "justify-content",
          "flex-wrap",
          "align-content",
        ],
        answer: 1,
      },
      {
        question: "What does `flex: 1` shorthand mean?",
        options: [
          "flex-grow: 1, flex-shrink: 1, flex-basis: 0%",
          "flex-grow: 0, flex-shrink: 1, flex-basis: auto",
          "flex-grow: 1, flex-shrink: 0, flex-basis: 100%",
          "flex-grow: 0, flex-shrink: 0, flex-basis: 1%",
        ],
        answer: 0,
      },
    ],
  },
  tailwindUtilities: {
    title: "Tailwind Utilities",
    description: "Master Tailwind CSS utility classes for rapid styling.",
    pages: [
      {
        title: "Introduction to Tailwind Utilities",
        content: `
  # Tailwind Utilities
  
  Tailwind CSS is a utility-first framework that provides pre-defined classes for styling.
  
  \`\`\`html
  <div class="bg-blue-500 text-white p-4 rounded-lg">
    Hello, Tailwind!
  </div>
  \`\`\`
  
  Key features:
  - **Utility Classes**: Apply styles directly in HTML (e.g., \`bg-blue-500\` for background color).
  - **Responsive Design**: Use prefixes like \`md:\` for breakpoints.
  - **Customization**: Extend via \`tailwind.config.js\`.
          `,
      },
      {
        title: "Using Tailwind Classes",
        content: `
  # Using Tailwind Classes
  
  Tailwind classes are composable and cover most CSS properties.
  
  \`\`\`html
  <div class="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    <button class="px-6 py-2 bg-white text-black rounded hover:bg-gray-200">
      Click Me
    </button>
  </div>
  \`\`\`
  
  Common utilities:
  - **Layout**: \`flex\`, \`grid\`, \`justify-center\`, \`items-center\`.
  - **Spacing**: \`p-4\`, \`m-2\`, \`gap-4\`.
  - **Typography**: \`text-xl\`, \`font-bold\`, \`text-center\`.
          `,
      },
      {
        title: "Tailwind Customization",
        content: `
  # Tailwind Customization
  
  Customize Tailwind via the configuration file to match your design system.
  
  \`\`\`js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          custom: '#123456',
        },
      },
    },
  };
  \`\`\`
  
  \`\`\`html
  <div class="bg-custom text-white p-4">
    Custom Color
  </div>
  \`\`\`
  
  Tips:
  - Use \`@apply\` in CSS for reusable styles.
  - Leverage plugins for advanced functionality.
  - Optimize with PurgeCSS for production.
          `,
      },
    ],
    quiz: [
      {
        question: "What is Tailwind CSS primarily known for?",
        options: [
          "Component-based styling",
          "Utility-first styling",
          "Inline CSS only",
          "CSS preprocessor",
        ],
        answer: 1,
      },
      {
        question: "How do you apply padding in Tailwind?",
        options: ["padding: 4px", "pad-4", "p-4", "padding-4"],
        answer: 2,
      },
      {
        question: "Where do you customize Tailwind's theme?",
        options: [
          "style.css",
          "tailwind.config.js",
          "package.json",
          "index.html",
        ],
        answer: 1,
      },
    ],
  },
  cssGrid: {
    title: "CSS Grid",
    description: "Learn how to create two-dimensional layouts with CSS Grid.",
    pages: [
      {
        title: "Introduction to CSS Grid",
        content: `
  # CSS Grid
  
  CSS Grid is a layout system for creating complex, two-dimensional layouts with rows and columns.
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .item {
    background-color: #e2e8f0;
    padding: 10px;
  }
  \`\`\`
  
  Key concepts:
  - **Grid Container**: Element with \`display: grid\`.
  - **Grid Items**: Children of the grid container.
  - **Grid Tracks**: Rows and columns defined by \`grid-template-columns\` and \`grid-template-rows\`.
          `,
      },
      {
        title: "Grid Properties",
        content: `
  # Grid Properties
  
  CSS Grid offers properties to control layout, alignment, and spacing.
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 15px;
    justify-content: center;
    align-items: start;
  }
  .item {
    grid-column: span 2;
  }
  \`\`\`
  
  Important properties:
  - **grid-template-columns/rows**: Define the size of tracks.
  - **gap**: Sets spacing between grid items.
  - **grid-column/row**: Controls item placement.
          `,
      },
      {
        title: "Responsive Grids",
        content: `
  # Responsive Grids
  
  Use CSS Grid with media queries for responsive layouts.
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
  \`\`\`
  
  Tips:
  - Use \`auto-fit\` or \`auto-fill\` for dynamic columns.
  - Combine with \`minmax\` for flexible sizing.
  - Test layouts across screen sizes.
          `,
      },
    ],
    quiz: [
      {
        question: "What does `display: grid` do?",
        options: [
          "Creates a flex container",
          "Makes an element a grid container",
          "Hides the element",
          "Sets the element to block",
        ],
        answer: 1,
      },
      {
        question: "Which property defines the number of columns in a grid?",
        options: [
          "grid-template-rows",
          "grid-template-columns",
          "gap",
          "justify-content",
        ],
        answer: 1,
      },
      {
        question: "What does `repeat(auto-fit, minmax(200px, 1fr))` do?",
        options: [
          "Creates fixed 200px columns",
          "Fills the grid with as many 200px+ columns as possible",
          "Sets a single column",
          "Disables grid layout",
        ],
        answer: 1,
      },
    ],
  },
  animations: {
    title: "CSS Animations",
    description:
      "Master CSS animations and transitions for dynamic UI effects.",
    pages: [
      {
        title: "Introduction to Transitions",
        content: `
  # CSS Transitions
  
  Transitions allow smooth changes to CSS properties over time.
  
  \`\`\`css
  .button {
    background-color: #3b82f6;
    transition: background-color 0.3s ease;
  }
  .button:hover {
    background-color: #1d4ed8;
  }
  \`\`\`
  
  Key concepts:
  - **transition-property**: Specifies which properties to animate.
  - **transition-duration**: Sets the duration of the transition.
  - **transition-timing-function**: Controls the animation speed curve.
          `,
      },
      {
        title: "Creating Animations",
        content: `
  # CSS Animations
  
  Anim   Animations use keyframes to define complex sequences.
  
  \`\`\`css
  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  .box {
    animation: slideIn 1s ease-in-out;
  }
  \`\`\`
  
  Important properties:
  - **@keyframes**: Defines the animation sequence.
  - **animation-name**: Links to a keyframe.
  - **animation-duration**: Sets the duration.
          `,
      },
      {
        title: "Advanced Animations",
        content: `
  # Advanced Animations
  
  Combine transitions and animations for complex effects.
  
  \`\`\`css
  .card {
    transform: scale(1);
    transition: transform 0.2s ease;
  }
  .card:hover {
    transform: scale(1.05);
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  \`\`\`
  
  Tips:
  - Use \`animation-fill-mode\` to control post-animation state.
  - Optimize with \`will-change\` for performance.
  - Avoid animating properties that trigger reflows.
          `,
      },
    ],
    quiz: [
      {
        question: "What does a CSS transition do?",
        options: [
          "Changes properties instantly",
          "Smoothly changes properties over time",
          "Defines keyframes",
          "Hides an element",
        ],
        answer: 1,
      },
      {
        question: "How do you define an animation sequence in CSS?",
        options: [
          "transition",
          "@keyframes",
          "animation-duration",
          "transform",
        ],
        answer: 1,
      },
      {
        question: "Which property optimizes animation performance?",
        options: [
          "will-change",
          "transition-timing-function",
          "animation-fill-mode",
          "display",
        ],
        answer: 0,
      },
    ],
  },
  responsiveDesign: {
    title: "Responsive Design",
    description: "Learn techniques for building responsive layouts with CSS.",
    pages: [
      {
        title: "Introduction to Responsive Design",
        content: `
  # Responsive Design
  
  Responsive design ensures websites adapt to different screen sizes.
  
  \`\`\`css
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .container {
      padding: 0 10px;
    }
  }
  \`\`\`
  
  Key concepts:
  - **Media Queries**: Apply styles based on screen size.
  - **Relative Units**: Use \`vw\`, \`vh\`, \`rem\`, \`em\`, or \`%\`.
  - **Fluid Layouts**: Avoid fixed widths.
          `,
      },
      {
        title: "Media Queries",
        content: `
  # Media Queries
  
  Media queries allow conditional styling based on device characteristics.
  
  \`\`\`css
  .sidebar {
    width: 25%;
  }
  @media (max-width: 600px) {
    .sidebar {
      width: 100%;
      display: none;
    }
  }
  \`\`\`
  
  Common breakpoints:
  - Mobile: \`max-width: 600px\`
  - Tablet: \`max-width: 768px\`
  - Desktop: \`min-width: 1024px\`
          `,
      },
      {
        title: "Advanced Responsive Techniques",
        content: `
  # Advanced Responsive Techniques
  
  Use modern CSS for responsive layouts.
  
  \`\`\`css
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
  \`\`\`
  
  Tips:
  - Use \`aspect-ratio\` for consistent media sizing.
  - Leverage CSS variables for reusable values.
  - Test with real devices for accuracy.
          `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of responsive design?",
        options: [
          "Increase page load speed",
          "Adapt layouts to different screen sizes",
          "Add animations",
          "Change fonts",
        ],
        answer: 1,
      },
      {
        question: "Which CSS unit is relative to the viewport width?",
        options: ["px", "rem", "vw", "em"],
        answer: 2,
      },
      {
        question: "What does a media query do?",
        options: [
          "Changes the HTML structure",
          "Applies styles based on conditions",
          "Animates elements",
          "Sets font sizes",
        ],
        answer: 1,
      },
    ],
  },
  cssVariables: {
    title: "CSS Variables",
    description:
      "Learn to use custom properties for reusable and maintainable styles.",
    pages: [
      {
        title: "Introduction to CSS Variables",
        content: `
  # CSS Variables
  
  CSS Variables (custom properties) allow you to define reusable values in CSS.
  
  \`\`\`css
  :root {
    --primary-color: #2563eb;
    --padding: 16px;
  }
  .button {
    background-color: var(--primary-color);
    padding: var(--padding);
  }
  \`\`\`
  
  Key concepts:
  - **Syntax**: Define with \`--name\` and use with \`var(--name)\`.
  - **Scope**: Use \`:root\` for global variables or local selectors.
  - **Dynamic Updates**: Change variables with JavaScript.
          `,
      },
      {
        title: "Using CSS Variables",
        content: `
  # Using CSS Variables
  
  CSS Variables simplify theming and maintainability.
  
  \`\`\`css
  :root {
    --text-color: #1f2937;
    --font-size: 1rem;
  }
  .card {
    color: var(--text-color);
    font-size: var(--font-size);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #f3f4f6;
    }
  }
  \`\`\`
  
  Common uses:
  - **Theming**: Switch colors for light/dark modes.
  - **Consistency**: Reuse values across styles.
  - **Responsive Design**: Adjust variables in media queries.
          `,
      },
      {
        title: "Advanced CSS Variables",
        content: `
  # Advanced CSS Variables
  
  Combine variables with fallbacks and calculations.
  
  \`\`\`css
  :root {
    --base-size: 10px;
    --multiplier: 1.5;
  }
  .element {
    font-size: calc(var(--base-size) * var(--multiplier));
    background: var(--accent-color, #60a5fa);
  }
  \`\`\`
  
  Tips:
  - Use fallbacks in \`var()\` for undefined variables.
  - Combine with \`calc()\` for dynamic values.
  - Update variables dynamically with JavaScript for interactive UIs.
          `,
      },
    ],
    quiz: [
      {
        question: "How do you define a CSS variable?",
        options: [
          "$variable: value;",
          "--variable: value;",
          "variable: value;",
          "@variable: value;",
        ],
        answer: 1,
      },
      {
        question: "Where are global CSS variables typically defined?",
        options: [".container", ":root", "body", "#app"],
        answer: 1,
      },
      {
        question: "What does `var(--color, #000)` provide?",
        options: [
          "A default color if --color is undefined",
          "A second color option",
          "A color animation",
          "A color override",
        ],
        answer: 0,
      },
    ],
  },
  pseudoClassesElements: {
    title: "Pseudo-Classes and Elements",
    description:
      "Master styling with pseudo-classes and pseudo-elements in CSS.",
    pages: [
      {
        title: "Introduction to Pseudo-Classes",
        content: `
  # Pseudo-Classes
  
  Pseudo-classes style elements based on their state or position.
  
  \`\`\`css
  a:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
  li:first-child {
    font-weight: bold;
  }
  \`\`\`
  
  Key pseudo-classes:
  - **:hover**: Styles on mouse hover.
  - **:first-child**: Targets the first child element.
  - **:focus**: Styles when an element is focused.
          `,
      },
      {
        title: "Pseudo-Elements",
        content: `
  # Pseudo-Elements
  
  Pseudo-elements style specific parts of an element.
  
  \`\`\`css
  p::before {
    content: "★ ";
    color: #f59e0b;
  }
  h1::first-line {
    color: #4b5563;
  }
  \`\`\`
  
  Common pseudo-elements:
  - **::before**: Inserts content before the element.
  - **::after**: Inserts content after the element.
  - **::first-line**: Styles the first line of text.
          `,
      },
      {
        title: "Advanced Pseudo Techniques",
        content: `
  # Advanced Pseudo Techniques
  
  Combine pseudo-classes and elements for creative effects.
  
  \`\`\`css
  .tooltip {
    position: relative;
  }
  .tooltip:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    background: #1f2937;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
  }
  \`\`\`
  
  Tips:
  - Use \`attr()\` for dynamic content.
  - Combine with transitions for smooth effects.
  - Avoid overuse to maintain performance.
          `,
      },
    ],
    quiz: [
      {
        question: "What does the `:hover` pseudo-class do?",
        options: [
          "Styles the first child",
          "Styles an element on mouse hover",
          "Styles focused elements",
          "Styles the last child",
        ],
        answer: 1,
      },
      {
        question: "Which pseudo-element adds content before an element?",
        options: ["::after", "::first-line", "::before", "::selection"],
        answer: 2,
      },
      {
        question: "How can you style a tooltip using pseudo-elements?",
        options: [
          "Use `:tooltip`",
          "Use `::after` with `content`",
          "Use `:hover` alone",
          "Use `::first-child`",
        ],
        answer: 1,
      },
    ],
  },
  tailwindComponents: {
    title: "Tailwind Components",
    description: "Build reusable components using Tailwind’s utility classes.",
    pages: [
      {
        title: "Introduction to Tailwind Components",
        content: `
  # Tailwind Components
  
  Tailwind components are reusable UI elements built with utility classes.
  
  \`\`\`html
  <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
    Submit
  </button>
  \`\`\`
  
  Key concepts:
  - **Utility-First**: Combine classes for styling.
  - **Reusability**: Define components in HTML or frameworks.
  - **Consistency**: Use repeated classes for uniform design.
          `,
      },
      {
        title: "Creating Components",
        content: `
  # Creating Components
  
  Structure components for modularity and reuse.
  
  \`\`\`html
  <div class="card bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
    <p class="text-gray-600">This is a reusable card component.</p>
  </div>
  \`\`\`
  
  Common components:
  - **Cards**: Containers for content.
  - **Buttons**: Interactive elements.
  - **Navbars**: Site navigation.
          `,
      },
      {
        title: "Advanced Component Techniques",
        content: `
  # Advanced Component Techniques
  
  Use Tailwind with frameworks for dynamic components.
  
  \`\`\`jsx
  // React component
  const Card = ({ title, content }) => (
    <div className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
  \`\`\`
  
  Tips:
  - Extract classes to constants for reuse.
  - Use \`@apply\` in CSS for complex components.
  - Optimize with Tailwind’s JIT compiler.
          `,
      },
    ],
    quiz: [
      {
        question: "What is a Tailwind component?",
        options: [
          "A pre-built CSS framework",
          "A reusable UI element made with utility classes",
          "A JavaScript function",
          "A CSS animation",
        ],
        answer: 1,
      },
      {
        question: "How do you make a Tailwind button reusable?",
        options: [
          "Write inline CSS",
          "Use consistent utility classes",
          "Add a media query",
          "Use a pseudo-class",
        ],
        answer: 1,
      },
      {
        question: "What can `@apply` do in Tailwind?",
        options: [
          "Apply utility classes in CSS",
          "Generate new utilities",
          "Remove classes",
          "Add animations",
        ],
        answer: 0,
      },
    ],
  },
  tailwindResponsiveUtilities: {
    title: "Tailwind Responsive Utilities",
    description: "Use Tailwind’s responsive prefixes for adaptive designs.",
    pages: [
      {
        title: "Introduction to Responsive Utilities",
        content: `
  # Tailwind Responsive Utilities
  
  Tailwind’s responsive prefixes apply styles at specific breakpoints.
  
  \`\`\`html
  <div class="text-base md:text-lg lg:text-xl">
    Responsive Text
  </div>
  \`\`\`
  
  Key concepts:
  - **Breakpoints**: \`sm\`, \`md\`, \`lg\`, \`xl\`, \`2xl\`.
  - **Prefixes**: Apply styles like \`md:text-lg\` for medium screens.
  - **Mobile-First**: Default styles apply to all screens, prefixes override.
          `,
      },
      {
        title: "Using Responsive Prefixes",
        content: `
  # Using Responsive Prefixes
  
  Combine prefixes for flexible layouts.
  
  \`\`\`html
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-blue-500 p-4">Item 1</div>
    <div class="bg-blue-500 p-4">Item 2</div>
    <div class="bg-blue-500 p-4">Item 3</div>
  </div>
  \`\`\`
  
  Common uses:
  - **Layout**: Adjust \`grid-cols\`, \`flex\`, or \`display\`.
  - **Typography**: Scale text with \`text-sm\`, \`text-lg\`.
  - **Spacing**: Modify \`p-\`, \`m-\`, or \`gap-\`.
          `,
      },
      {
        title: "Advanced Responsive Design",
        content: `
  # Advanced Responsive Design
  
  Use utilities for complex responsive behaviors.
  
  \`\`\`html
  <div class="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-100">
    <img src="image.jpg" class="w-full lg:w-1/3 rounded-lg" alt="Image" />
    <div class="mt-4 lg:mt-0 lg:ml-6">
      <h2 class="text-2xl font-bold">Responsive Section</h2>
      <p class="text-gray-600">Adapts to screen size.</p>
    </div>
  </div>
  \`\`\`
  
  Tips:
  - Use \`hidden\` and \`block\` for visibility control.
  - Combine with custom breakpoints in \`tailwind.config.js\`.
  - Test across devices for accuracy.
          `,
      },
    ],
    quiz: [
      {
        question: "What does `md:text-lg` do in Tailwind?",
        options: [
          "Applies text-lg to mobile screens",
          "Applies text-lg to medium and larger screens",
          "Disables text sizing",
          "Applies text-lg to all screens",
        ],
        answer: 1,
      },
      {
        question: "What is Tailwind’s default approach to responsive design?",
        options: [
          "Desktop-first",
          "Tablet-first",
          "Mobile-first",
          "Fixed-width",
        ],
        answer: 2,
      },
      {
        question: "How do you hide an element on small screens in Tailwind?",
        options: [
          "sm:display-none",
          "sm:hidden",
          "hidden:sm",
          "display-none:sm",
        ],
        answer: 1,
      },
    ],
  },
  cssTransforms: {
    title: "CSS Transforms",
    description: "Learn to manipulate elements with CSS transforms for dynamic visuals.",
    pages: [
      {
        title: "Introduction to Transforms",
        content: `
  # CSS Transforms
  
  CSS transforms allow you to rotate, scale, translate, or skew elements.
  
  \`\`\`css
  .box {
    transform: translate(50px, 100px);
  }
  .box:hover {
    transform: scale(1.2);
  }
  \`\`\`
  
  Key concepts:
  - **Transform Functions**: \`translate()\`, \`rotate()\`, \`scale()\`, \`skew()\`.
  - **2D and 3D**: Supports both 2D and 3D transformations.
  - **Performance**: Hardware-accelerated for smooth rendering.
          `,
      },
      {
        title: "Transform Properties",
        content: `
  # Transform Properties
  
  Combine multiple transform functions for complex effects.
  
  \`\`\`css
  .card {
    transform: rotate(5deg) scale(0.9) translateX(20px);
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: rotate(0deg) scale(1) translateX(0);
  }
  \`\`\`
  
  Important properties:
  - **transform-origin**: Sets the pivot point for transforms.
  - **transform**: Applies multiple transformations.
  - **transition**: Smooths transform changes.
          `,
      },
      {
        title: "3D Transforms",
        content: `
  # 3D Transforms
  
  Use 3D transforms for depth and perspective.
  
  \`\`\`css
  .container {
    perspective: 1000px;
  }
  .cube {
    transform: rotateY(45deg) translateZ(100px);
    transform-style: preserve-3d;
  }
  \`\`\`
  
  Tips:
  - **perspective**: Adds depth to 3D effects.
  - **transform-style**: Controls 3D rendering of child elements.
  - **Backface-visibility**: Hides back sides of rotated elements.
          `,
      },
    ],
    quiz: [
      {
        question: "What does the `transform: scale(2)` property do?",
        options: [
          "Moves the element",
          "Rotates the element",
          "Doubles the element’s size",
          "Skews the element",
        ],
        answer: 2,
      },
      {
        question: "Which property sets the pivot point for transforms?",
        options: [
          "transform-origin",
          "transform-style",
          "perspective",
          "transition",
        ],
        answer: 0,
      },
      {
        question: "What is required for 3D transforms to appear with depth?",
        options: [
          "transform: rotateZ",
          "perspective",
          "scale3d",
          "translateZ",
        ],
        answer: 1,
      },
    ],
  },
  cssFilters: {
    title: "CSS Filters",
    description: "Apply visual effects to elements using CSS filters.",
    pages: [
      {
        title: "Introduction to Filters",
        content: `
  # CSS Filters
  
  CSS filters apply graphical effects like blur, brightness, or color shifts to elements.
  
  \`\`\`css
  .image {
    filter: blur(5px);
  }
  .image:hover {
    filter: none;
  }
  \`\`\`
  
  Key concepts:
  - **Filter Functions**: \`blur()\`, \`brightness()\`, \`contrast()\`, etc.
  - **Stackable**: Combine multiple filters in one property.
  - **Performance**: Hardware-accelerated for smooth effects.
          `,
      },
      {
        title: "Common Filter Effects",
        content: `
  # Common Filter Effects
  
  Use filters to enhance or modify visuals.
  
  \`\`\`css
  .photo {
    filter: grayscale(80%) sepia(20%);
    transition: filter 0.3s ease;
  }
  .photo:hover {
    filter: grayscale(0%) sepia(0%);
  }
  \`\`\`
  
  Popular filters:
  - **grayscale()**: Converts to monochrome.
  - **sepia()**: Adds a warm, vintage tone.
  - **opacity()**: Adjusts transparency.
          `,
      },
      {
        title: "Advanced Filter Techniques",
        content: `
  # Advanced Filter Techniques
  
  Combine filters for creative effects and animations.
  
  \`\`\`css
  .element {
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.2);
  }
  .element:hover {
    filter: drop-shadow(6px 6px 12px rgba(0, 0, 0, 0.5)) brightness(1.4);
    transition: filter 0.2s ease;
  }
  \`\`\`
  
  Tips:
  - Use \`drop-shadow()\` for realistic shadows.
  - Combine with transitions for dynamic effects.
  - Avoid overuse to maintain performance.
          `,
      },
    ],
    quiz: [
      {
        question: "What does `filter: blur(5px)` do?",
        options: [
          "Sharpens the element",
          "Blurs the element",
          "Changes the color",
          "Adds a shadow",
        ],
        answer: 1,
      },
      {
        question: "Which filter creates a monochrome effect?",
        options: [
          "sepia()",
          "grayscale()",
          "brightness()",
          "contrast()",
        ],
        answer: 1,
      },
      {
        question: "How can you apply multiple filters?",
        options: [
          "Separate with commas",
          "List in a single `filter` property",
          "Use multiple `filter` properties",
          "Apply with pseudo-classes",
        ],
        answer: 1,
      },
    ],
  },
  cssClipPath: {
    title: "CSS Clip Path",
    description: "Create custom shapes and cutouts using CSS clip-path.",
    pages: [
      {
        title: "Introduction to Clip Path",
        content: `
  # CSS Clip Path
  
  The clip-path property creates a clipping region to shape elements.
  
  \`\`\`css
  .shape {
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  }
  \`\`\`
  
  Key concepts:
  - **Shapes**: Use \`polygon()\`, \`circle()\`, \`ellipse()\`, or \`path()\`.
  - **Clipping**: Only the area inside the path is visible.
  - **Dynamic**: Combine with transitions or animations.
          `,
      },
      {
        title: "Clip Path Shapes",
        content: `
  # Clip Path Shapes
  
  Create various shapes using clip-path functions.
  
  \`\`\`css
  .circle {
    clip-path: circle(50% at 50% 50%);
  }
  .triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  \`\`\`
  
  Common shapes:
  - **polygon()**: Define custom shapes with points.
  - **circle()**: Create circular clips.
  - **ellipse()**: Create oval clips.
          `,
      },
      {
        title: "Animating Clip Paths",
        content: `
  # Animating Clip Paths
  
  Use transitions or animations for dynamic clip effects.
  
  \`\`\`css
  .element {
    clip-path: circle(30% at 50% 50%);
    transition: clip-path 0.5s ease;
  }
  .element:hover {
    clip-path: circle(50% at 50% 50%);
  }
  \`\`\`
  
  Tips:
  - Ensure consistent shape types for smooth transitions.
  - Use SVG paths for complex shapes.
  - Test across browsers for compatibility.
          `,
      },
    ],
    quiz: [
      {
        question: "What does the `clip-path` property do?",
        options: [
          "Changes element color",
          "Creates a clipping region",
          "Rotates the element",
          "Adds a shadow",
        ],
        answer: 1,
      },
      {
        question: "Which clip-path function creates a circular shape?",
        options: [
          "polygon()",
          "ellipse()",
          "circle()",
          "path()",
        ],
        answer: 2,
      },
      {
        question: "What is required for smooth clip-path transitions?",
        options: [
          "Different shape types",
          "Consistent shape types",
          "Multiple clip-path properties",
          "No transitions",
        ],
        answer: 1,
      },
    ],
  },
  cssBackgrounds: {
    title: "CSS Backgrounds",
    description: "Master background properties for styling element backgrounds.",
    pages: [
      {
        title: "Introduction to Backgrounds",
        content: `
  # CSS Backgrounds
  
  CSS background properties style element backgrounds with colors, images, or gradients.
  
  \`\`\`css
  .element {
    background-color: #f3f4f6;
    background-image: url('image.jpg');
    background-size: cover;
  }
  \`\`\`
  
  Key concepts:
  - **background-color**: Sets a solid color.
  - **background-image**: Applies images or gradients.
  - **background-size**: Controls image scaling.
          `,
      },
      {
        title: "Background Properties",
        content: `
  # Background Properties
  
  Use multiple properties for flexible background styling.
  
  \`\`\`css
  .hero {
    background: linear-gradient(to right, #3b82f6, #8b5cf6) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  \`\`\`
  
  Important properties:
  - **background-position**: Sets image placement.
  - **background-repeat**: Controls image tiling.
  - **background-attachment**: Fixes or scrolls the background.
          `,
      },
      {
        title: "Multiple Backgrounds",
        content: `
  # Multiple Backgrounds
  
  Layer multiple backgrounds for complex effects.
  
  \`\`\`css
  .layered {
    background: 
      url('pattern.png') repeat,
      linear-gradient(45deg, #f59e0b, #ef4444) no-repeat center;
    background-size: auto, cover;
  }
  \`\`\`
  
  Tips:
  - Separate layers with commas.
  - Order matters: First background is topmost.
  - Use with transparency for layered effects.
          `,
      },
    ],
    quiz: [
      {
        question: "What does `background-size: cover` do?",
        options: [
          "Repeats the background",
          "Scales the image to fill the element",
          "Fixes the background",
          "Centers the image",
        ],
        answer: 1,
      },
      {
        question: "Which property controls background image tiling?",
        options: [
          "background-position",
          "background-repeat",
          "background-attachment",
          "background-size",
        ],
        answer: 1,
      },
      {
        question: "How do you apply multiple backgrounds?",
        options: [
          "Use multiple `background` properties",
          "Separate with commas in one `background` property",
          "Use pseudo-elements",
          "Apply with media queries",
        ],
        answer: 1,
      },
    ],
  },
  cssTypography: {
    title: "CSS Typography",
    description: "Learn to style text with CSS typography properties.",
    pages: [
      {
        title: "Introduction to Typography",
        content: `
  # CSS Typography
  
  CSS typography properties control text appearance and layout.
  
  \`\`\`css
  .text {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  \`\`\`
  
  Key concepts:
  - **font-family**: Sets the typeface.
  - **font-size**: Controls text size.
  - **line-height**: Adjusts spacing between lines.
          `,
      },
      {
        title: "Text Styling",
        content: `
  # Text Styling
  
  Enhance text with styling properties.
  
  \`\`\`css
  .heading {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }
  \`\`\`
  
  Common properties:
  - **font-weight**: Sets text thickness.
  - **text-transform**: Changes text case.
  - **text-align**: Aligns text horizontally.
          `,
      },
      {
        title: "Advanced Typography",
        content: `
  # Advanced Typography
  
  Use modern properties for refined text control.
  
  \`\`\`css
  .paragraph {
    font-variant: small-caps;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  \`\`\`
  
  Tips:
  - Use \`text-overflow\` for truncated text.
  - Leverage web fonts for custom typography.
  - Test readability across devices.
          `,
      },
    ],
    quiz: [
      {
        question: "Which property sets the typeface of text?",
        options: [
          "font-size",
          "font-family",
          "line-height",
          "text-align",
        ],
        answer: 1,
      },
      {
        question: "What does `text-transform: uppercase` do?",
        options: [
          "Aligns text to the center",
          "Converts text to all caps",
          "Increases font size",
          "Adds spacing between letters",
        ],
        answer: 1,
      },
      {
        question: "Which property truncates overflowing text?",
        options: [
          "text-overflow",
          "white-space",
          "font-variant",
          "letter-spacing",
        ],
        answer: 0,
      },
    ],
  },
};