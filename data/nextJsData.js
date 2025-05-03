export const nextJsData = {
  serverComponents: {
    title: "Server Components",
    description:
      "Server Components allow you to render components on the server, reducing client-side JavaScript.",
    pages: [
      {
        title: "Introduction to Server Components",
        content: `
  # Server Components
  
  Server Components are a Next.js feature that enables rendering React components on the server. They reduce the amount of JavaScript sent to the client, improving performance.
  
  \`\`\`jsx
  // app/page.js
  export default function Page() {
    return <h1>Hello from a Server Component!</h1>;
  }
  \`\`\`
  
  Key benefits:
  - Zero client-side JavaScript by default
  - Direct access to server-side resources (e.g., databases)
  - Improved SEO and initial page load
          `,
      },
      {
        title: "Using Server Components",
        content: `
  # Using Server Components
  
  Server Components are defined in the \`app\` directory and are server-rendered by default. They can fetch data directly from the server.
  
  \`\`\`jsx
  // app/users/page.js
  async function getUsers() {
    const res = await fetch('https://api.example.com/users');
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
    return (
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
  \`\`\`
  
  Notes:
  - Use \`async/await\` for data fetching
  - Server Components cannot use client-side hooks (e.g., useState)
  - Mark client components with "use client"
          `,
      },
      {
        title: "Rules of Server Components",
        content: `
  # Rules of Server Components
  
  - Server Components are the default in the \`app\` router
  - They cannot use client-side interactivity (e.g., onClick, useState)
  - Use Client Components for interactivity with "use client" directive
  - Server Components can import Client Components, but not vice versa
  
  \`\`\`jsx
  // app/client-component.js
  "use client";
  
  import { useState } from 'react';
  
  export default function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  \`\`\`
          `,
      },
    ],
    quiz: [
      {
        question: "What is a key benefit of Server Components?",
        options: [
          "They enable client-side state management",
          "They reduce client-side JavaScript",
          "They require more client-side rendering",
          "They cannot fetch data",
        ],
        answer: 1,
      },
      {
        question: "How do you mark a Client Component?",
        options: [
          '"use server"',
          '"use client"',
          '"client: true"',
          '"server: false"',
        ],
        answer: 1,
      },
      {
        question: "Can Server Components use useState?",
        options: [
          "Yes, always",
          "Only in the app router",
          "No, they are server-rendered",
          "Only with a special directive",
        ],
        answer: 2,
      },
    ],
  },
  appRouter: {
    title: "App Router",
    description:
      "The App Router is Next.js's new routing system based on file-system conventions.",
    pages: [
      {
        title: "Introduction to App Router",
        content: `
  # App Router
  
  The App Router is a file-system-based router introduced in Next.js 13, located in the \`app\` directory.
  
  \`\`\`jsx
  // app/page.js
  export default function Home() {
    return <h1>Welcome to Next.js!</h1>;
  }
  \`\`\`
  
  Features:
  - File-based routing
  - Support for layouts and nested routes
  - Server Components by default
          `,
      },
      {
        title: "Dynamic Routes",
        content: `
  # Dynamic Routes
  
  Dynamic routes are created using folder names in square brackets.
  
  \`\`\`jsx
  // app/blog/[slug]/page.js
  export default function BlogPost({ params }) {
    return <h1>Blog Post: {params.slug}</h1>;
  }
  \`\`\`
  
  Example:
  - File: \`app/blog/[slug]/page.js\`
  - URL: \`/blog/my-post\`
  - params: \`{ slug: 'my-post' }\`
          `,
      },
      {
        title: "Layouts",
        content: `
  # Layouts
  
  Layouts are shared UI components that wrap pages or nested routes.
  
  \`\`\`jsx
  // app/layout.js
  export default function RootLayout({ children }) {
    return (
      <html>
        <body>{children}</body>
      </html>
    );
  }
  \`\`\`
  
  Rules:
  - Defined in \`layout.js\`
  - Apply to all pages in the same or nested directories
  - Can be nested for specific route segments
          `,
      },
    ],
    quiz: [
      {
        question: "Where is the App Router defined?",
        options: [
          "In the pages directory",
          "In the app directory",
          "In the public directory",
          "In the components directory",
        ],
        answer: 1,
      },
      {
        question: "How do you create a dynamic route?",
        options: [
          "Use curly braces {}",
          "Use square brackets []",
          "Use parentheses ()",
          "Use angle brackets <>",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of layout.js?",
        options: [
          "Define page content",
          "Handle API routes",
          "Share UI across pages",
          "Manage dynamic routes",
        ],
        answer: 2,
      },
    ],
  },
  dataFetching: {
    title: "Data Fetching",
    description:
      "Next.js provides multiple ways to fetch data, optimized for server and client.",
    pages: [
      {
        title: "Server-Side Data Fetching",
        content: `
  # Server-Side Data Fetching
  
  Next.js supports data fetching in Server Components using async/await.
  
  \`\`\`jsx
  // app/products/page.js
  async function getProducts() {
    const res = await fetch('https://api.example.com/products');
    return res.json();
  }
  
  export default async function ProductsPage() {
    const products = await getProducts();
    return (
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
    );
  }
  \`\`\`
  
  Methods:
  - fetch() with extended options
  - Direct database queries in Server Components
          `,
      },
      {
        title: "Static Site Generation (SSG)",
        content: `
  # Static Site Generation (SSG)
  
  SSG pre-renders pages at build time.
  
  \`\`\`jsx
  // app/blog/page.js
  export async function generateStaticParams() {
    const posts = await fetchPosts();
    return posts.map(post => ({ slug: post.slug }));
  }
  
  export default async function BlogPage({ params }) {
    const post = await fetchPost(params.slug);
    return <h1>{post.title}</h1>;
  }
  \`\`\`
  
  Use cases:
  - Blogs and documentation
  - E-commerce product pages
          `,
      },
      {
        title: "Client-Side Fetching",
        content: `
  # Client-Side Fetching
  
  Use SWR or fetch in Client Components for dynamic data.
  
  \`\`\`jsx
  // app/client-data.js
  "use client";
  
  import useSWR from 'swr';
  
  const fetcher = url => fetch(url).then(res => res.json());
  
  export default function ClientData() {
    const { data, error } = useSWR('/api/data', fetcher);
    if (error) return <div>Error</div>;
    if (!data) return <div>Loading...</div>;
    return <div>Data: {data.name}</div>;
  }
  \`\`\`
          `,
      },
    ],
    quiz: [
      {
        question: "How do Server Components fetch data?",
        options: [
          "Using useState",
          "Using async/await",
          "Using useEffect",
          "Using getServerSideProps",
        ],
        answer: 1,
      },
      {
        question: "What is SSG used for?",
        options: [
          "Real-time data updates",
          "Pre-rendering at build time",
          "Client-side rendering",
          "Server-side authentication",
        ],
        answer: 1,
      },
      {
        question: "Which library is used for client-side fetching?",
        options: ["React Query", "SWR", "Axios", "Redux"],
        answer: 1,
      },
    ],
  },
  serverlessFunctions: {
    title: "Serverless Functions",
    description:
      "Next.js API Routes allow you to build serverless functions that run on-demand.",
    pages: [
      {
        title: "Introduction to API Routes",
        content: `
# API Routes

API Routes provide a solution to build API endpoints inside a Next.js application. They run as serverless functions that are deployed to edge servers.

\`\`\`jsx
// app/api/hello/route.js
export async function GET() {
  return Response.json({ message: 'Hello World!' });
}
\`\`\`

Key benefits:
- Serverless deployment
- Automatic scaling
- Reduced operational complexity
- No need for separate backend
        `,
      },
      {
        title: "Dynamic API Routes",
        content: `
# Dynamic API Routes

API Routes can use the same file-based routing with dynamic segments as pages.

\`\`\`jsx
// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const { id } = params;
  // Fetch user with the given ID
  return Response.json({ id, name: 'John Doe' });
}
\`\`\`

HTTP Methods:
- GET, POST, PUT, DELETE, etc.
- Handle different methods in the same file
- Access request data via the Request object
        `,
      },
      {
        title: "API Route Handlers",
        content: `
# API Route Handlers

Route handlers provide fine-grained control over requests and responses.

\`\`\`jsx
// app/api/upload/route.js
export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');
  
  // Process file upload
  
  return Response.json(
    { success: true },
    { status: 201 }
  );
}
\`\`\`

Features:
- Form data handling
- File uploads
- Custom headers and status codes
- CORS configuration
        `,
      },
    ],
    quiz: [
      {
        question: "Where are API Routes defined in Next.js?",
        options: [
          "In the app/api directory",
          "In the pages/api directory (Pages Router) or app/api directory (App Router)",
          "In the public/api directory",
          "In the server directory",
        ],
        answer: 1,
      },
      {
        question: "How do you handle a POST request in an API Route?",
        options: [
          "Use the post() function",
          "Export a POST() function",
          "Use router.post()",
          "Use app.post()",
        ],
        answer: 1,
      },
      {
        question: "What is a key benefit of API Routes?",
        options: [
          "They require a separate backend server",
          "They only work with SQL databases",
          "They run as serverless functions",
          "They only support GET requests",
        ],
        answer: 2,
      },
    ],
  },
  routing: {
    title: "Advanced Routing",
    description:
      "Next.js offers advanced routing features beyond basic page navigation.",
    pages: [
      {
        title: "Parallel Routes",
        content: `
# Parallel Routes

Parallel routes allow you to simultaneously render multiple pages in the same layout.

\`\`\`jsx
// app/@dashboard/page.js
export default function DashboardPage() {
  return <div>Dashboard Content</div>;
}

// app/@analytics/page.js
export default function AnalyticsPage() {
  return <div>Analytics Content</div>;
}

// app/layout.js
export default function Layout({ children, dashboard, analytics }) {
  return (
    <div>
      <div className="main">{children}</div>
      <div className="dashboard">{dashboard}</div>
      <div className="analytics">{analytics}</div>
    </div>
  );
}
\`\`\`

Use cases:
- Split screen layouts
- Modals and dialogs
- Conditional rendering of UI sections
        `,
      },
      {
        title: "Intercepting Routes",
        content: `
# Intercepting Routes

Intercepting routes allow you to load a different route while preserving the context of the current page.

\`\`\`jsx
// app/feed/page.js
import Link from 'next/link';

export default function Feed() {
  return (
    <div>
      <h1>Feed</h1>
      <Link href="/photos/1">View Photo</Link>
    </div>
  );
}

// app/photos/[id]/page.js
export default function Photo({ params }) {
  return <div>Photo {params.id}</div>;
}

// app/feed/@modal/(.)photos/[id]/page.js
export default function PhotoModal({ params }) {
  return <div className="modal">Photo {params.id} in Modal</div>;
}
\`\`\`

Patterns:
- (.) - Intercept same level
- (..) - Intercept one level above
- (..)(..) - Intercept two levels above
- (...) - Intercept from root
        `,
      },
      {
        title: "Route Groups",
        content: `
# Route Groups

Route groups allow you to organize routes without affecting the URL path structure.

\`\`\`jsx
// app/(marketing)/about/page.js
export default function AboutPage() {
  return <h1>About Us</h1>;
}

// app/(marketing)/contact/page.js
export default function ContactPage() {
  return <h1>Contact Us</h1>;
}

// app/(marketing)/layout.js
export default function MarketingLayout({ children }) {
  return (
    <div>
      <nav>Marketing Navigation</nav>
      {children}
    </div>
  );
}
\`\`\`

Benefits:
- Organizational structure
- Shared layouts for specific routes
- No impact on the URL structure
        `,
      },
    ],
    quiz: [
      {
        question: "What do parallel routes enable in Next.js?",
        options: [
          "Faster page loading",
          "Simultaneously rendering multiple pages in the same layout",
          "Automatic code splitting",
          "Better SEO",
        ],
        answer: 1,
      },
      {
        question: "What symbol is used to intercept routes at the same level?",
        options: ["(+)", "(!)", "(.)", "(~)"],
        answer: 2,
      },
      {
        question: "How do route groups affect the URL path?",
        options: [
          "They add the group name to the URL",
          "They don't affect the URL path",
          "They add a prefix to the URL",
          "They change the URL to a hash-based format",
        ],
        answer: 1,
      },
    ],
  },
  middleware: {
    title: "Next.js Middleware",
    description:
      "Middleware allows you to run code before requests are completed.",
    pages: [
      {
        title: "Introduction to Middleware",
        content: `
# Next.js Middleware

Middleware runs before a request is completed, allowing you to modify responses, redirect, or rewrite URLs.

\`\`\`jsx
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Example: Check for authentication token
  const token = request.cookies.get('token');

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
\`\`\`

Key features:
- Runs before rendering
- Access to request and response
- URL rewriting and redirects
- Cookie and header manipulation
        `,
      },
      {
        title: "Middleware Matchers",
        content: `
# Middleware Matchers

Configure which paths trigger your middleware.

\`\`\`jsx
// middleware.js
export const config = {
  matcher: [
    // Match specific paths
    '/about/:path*',
    '/dashboard/:path*',
    
    // Match paths with named parameters
    '/blog/:category/:slug',
    
    // Use regex with named groups
    {
      source: '/((?!api|_next/static|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'x-middleware-bypass' }
      ]
    }
  ],
};
\`\`\`

Configuration options:
- Path matching
- Negative lookaheads
- Header-based conditions
- Exclusions and bypasses
        `,
      },
      {
        title: "Advanced Middleware Techniques",
        content: `
# Advanced Middleware Techniques

Implement complex logic in middleware for various use cases.

\`\`\`jsx
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // A/B testing
  if (request.nextUrl.pathname === '/') {
    const bucket = Math.random() < 0.5 ? 'A' : 'B';
    const response = NextResponse.next();
    response.cookies.set('bucket', bucket);
    return response;
  }
  
  // Rate limiting
  if (request.nextUrl.pathname.startsWith('/api')) {
    // Check rate limit logic here
    // If rate limit exceeded:
    // return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }
  
  // Geolocation routing
  const country = request.geo?.country || 'US';
  if (request.nextUrl.pathname === '/products') {
    // Redirect to country-specific page
    return NextResponse.rewrite(new URL(\`/products/\${country.toLowerCase()}\`, request.url));
  }
  
  return NextResponse.next();
}
\`\`\`

Use cases:
- A/B testing
- Rate limiting
- Geolocation routing
- Bot protection
- Custom authentication
        `,
      },
    ],
    quiz: [
      {
        question: "When does Next.js middleware run?",
        options: [
          "After server rendering",
          "Before a request is completed",
          "Only on static pages",
          "After client-side hydration",
        ],
        answer: 1,
      },
      {
        question: "How do you specify which paths should trigger middleware?",
        options: [
          "Using the pages property",
          "Using the matcher property",
          "Using the middleware.config.js file",
          "Using the routes array",
        ],
        answer: 1,
      },
      {
        question: "Which is NOT a common use case for middleware?",
        options: [
          "Authentication",
          "Redirects",
          "Server-side rendering",
          "A/B testing",
        ],
        answer: 2,
      },
    ],
  },
  caching: {
    title: "Data Caching",
    description:
      "Next.js provides powerful data caching mechanisms to optimize performance.",
    pages: [
      {
        title: "Fetch API Caching",
        content: `
# Fetch API Caching

Next.js extends the native fetch API with caching capabilities.

\`\`\`jsx
// app/products/page.js
async function getProducts() {
  // Default: cached indefinitely
  const res = await fetch('https://api.example.com/products');
  return res.json();
}

async function getUpdatedProducts() {
  // Revalidate every 60 seconds
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }
  });
  return res.json();
}

async function getDynamicProducts() {
  // No cache, fetch on every request
  const res = await fetch('https://api.example.com/products', {
    cache: 'no-store'
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductList products={products} />;
}
\`\`\`

Caching options:
- Default: permanent cache (static data)
- Revalidate: time-based revalidation
- No-store: dynamic data (no caching)
        `,
      },
      {
        title: "Request Memoization",
        content: `
# Request Memoization

Next.js automatically deduplicates fetch requests with the same URL and options.

\`\`\`jsx
// This function is called multiple times across components
async function getUser(id) {
  const res = await fetch(\`https://api.example.com/users/\${id}\`);
  return res.json();
}

// app/user/[id]/profile/page.js
export default async function ProfilePage({ params }) {
  // First request
  const user = await getUser(params.id);
  return <UserProfile user={user} />;
}

// app/user/[id]/profile/@sidebar/page.js
export default async function SidebarPage({ params }) {
  // Deduplicated - doesn't trigger another request
  const user = await getUser(params.id);
  return <UserSidebar user={user} />;
}
\`\`\`

Benefits:
- Prevents duplicate API calls
- Improves performance
- Maintains data consistency
        `,
      },
      {
        title: "On-demand Revalidation",
        content: `
# On-demand Revalidation

Manually trigger revalidation for specific cache entries.

\`\`\`jsx
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { path, tag, secret } = await request.json();
  
  // Validate webhook secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }
  
  if (path) {
    // Revalidate a specific path
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  }
  
  if (tag) {
    // Revalidate a specific cache tag
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, tag });
  }
  
  return NextResponse.json({ error: 'No path or tag provided' }, { status: 400 });
}

// Usage in data fetching
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { tags: ['products'] }
  });
  return res.json();
}
\`\`\`

Methods:
- Path-based revalidation
- Tag-based revalidation
- Webhook-triggered revalidation
        `,
      },
    ],
    quiz: [
      {
        question: "What is the default caching behavior for fetch in Next.js?",
        options: [
          "No caching",
          "Cache for 5 minutes",
          "Cache indefinitely",
          "Cache based on HTTP headers",
        ],
        answer: 2,
      },
      {
        question:
          "How does Next.js handle multiple fetch requests with the same URL?",
        options: [
          "It executes each request independently",
          "It memoizes the request and reuses the result",
          "It batches all requests together",
          "It cancels duplicate requests",
        ],
        answer: 1,
      },
      {
        question: "How can you trigger on-demand revalidation for cached data?",
        options: [
          "Using setTimeout()",
          "Using revalidatePath() or revalidateTag()",
          "Refreshing the browser",
          "Rebuilding the application",
        ],
        answer: 1,
      },
    ],
  },
  deployment: {
    title: "Deployment and Optimization",
    description:
      "Learn how to deploy and optimize your Next.js application for production.",
    pages: [
      {
        title: "Deployment Options",
        content: `
# Deploying Next.js Applications

Next.js applications can be deployed to various platforms.

\`\`\`bash
# Build your application
npm run build

# Start the production server
npm run start
\`\`\`

Popular deployment platforms:
- Vercel (Created by the makers of Next.js)
- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted with Docker
        `,
      },
      {
        title: "Image Optimization",
        content: `
# Image Optimization

Next.js provides automatic image optimization with the Image component.

\`\`\`jsx
// app/components/OptimizedImage.js
import Image from 'next/image';

export default function OptimizedImage() {
  return (
    <div>
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={500}
        height={300}
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  );
}
\`\`\`

Benefits:
- Automatic WebP/AVIF conversion
- Responsive sizes
- Lazy loading by default
- Prevents layout shift with proper sizing
        `,
      },
      {
        title: "Performance Monitoring",
        content: `
# Performance Monitoring

Monitor and optimize your Next.js application's performance.

\`\`\`jsx
// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
};

// instrumentation.js
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./monitoring/nodejs');
  }
  
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./monitoring/edge');
  }
}
\`\`\`

Tools and metrics:
- Web Vitals measurement
- Server Timing headers
- Built-in analytics with Vercel
- OpenTelemetry support
- Custom instrumentation
        `,
      },
    ],
    quiz: [
      {
        question: "Which platform was created by the makers of Next.js?",
        options: ["Netlify", "Vercel", "Heroku", "AWS Amplify"],
        answer: 1,
      },
      {
        question: "What component does Next.js provide for image optimization?",
        options: ["<OptimizedImage>", "<NextImage>", "<Image>", "<ImgNext>"],
        answer: 2,
      },
      {
        question: "What are Web Vitals?",
        options: [
          "Database performance metrics",
          "Core web performance metrics",
          "Server response codes",
          "Security vulnerabilities",
        ],
        answer: 1,
      },
    ],
  },
  redux: {
    title: "Redux",
    description:
      "Redux is a state management library for JavaScript applications, helping you manage and centralize the application state for better predictability and easier debugging.",
    pages: [
      {
        title: "Introduction to Redux",
        content: `
# Redux

Redux is a predictable state container for JavaScript applications, often used with React. It centralizes the state management of your application, making state predictable and easier to debug.

### Key Concepts:
- **Actions**: Plain JavaScript objects that describe what happened.
- **Reducers**: Functions that specify how the state changes in response to an action.
- **Store**: The object that holds the application state.

\`\`\`jsx
// Example of an action
const increment = () => ({
  type: 'INCREMENT',
});

// Example of a reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};
\`\`\`

Benefits of using Redux:
- Predictable state management
- Easy to debug
- Centralized state storage

`,
      },
      {
        title: "Setting Up Redux in React",
        content: `
# Setting Up Redux in React

To integrate Redux into your React application, follow these steps to set up the Redux store and connect your React components.

### Steps to Set Up Redux:
1. Install Redux and React-Redux:
   \`\`\`
   npm install redux react-redux
   \`\`\`

2. Create the Redux store using \`createStore\`:
   \`\`\`jsx
   import { createStore } from 'redux';

   const store = createStore(counterReducer);
   \`\`\`

3. Wrap the entire application with \`Provider\` to make the Redux store available to all components:
   \`\`\`jsx
   import { Provider } from 'react-redux';
   
   function App() {
     return (
       <Provider store={store}>
         <Counter />
       </Provider>
     );
   }
   \`\`\`

4. Use \`useSelector\` and \`useDispatch\` hooks to connect your components:
   \`\`\`jsx
   import { useSelector, useDispatch } from 'react-redux';

   function Counter() {
     const count = useSelector(state => state);
     const dispatch = useDispatch();

     return (
       <div>
         <h1>{count}</h1>
         <button onClick={() => dispatch(increment())}>Increment</button>
       </div>
     );
   }
   \`\`\`

This setup connects your React app with Redux, allowing it to read from and dispatch actions to the Redux store.

`,
      },
      {
        title: "Advanced Redux: Middleware and Asynchronous Actions",
        content: `
# Advanced Redux: Middleware and Asynchronous Actions

In larger applications, you'll need to perform asynchronous actions, such as fetching data from an API. Middleware like **Redux Thunk** is commonly used for handling side effects.

### Setting Up Redux Thunk:
1. Install Redux Thunk:
   \`\`\`
   npm install redux-thunk
   \`\`\`

2. Apply Redux Thunk middleware to your store:
   \`\`\`jsx
   import { createStore, applyMiddleware } from 'redux';
   import thunk from 'redux-thunk';

   const store = createStore(counterReducer, applyMiddleware(thunk));
   \`\`\`

3. Create asynchronous actions:
   \`\`\`jsx
   const fetchUserData = () => {
     return async (dispatch) => {
       const response = await fetch('https://api.example.com/user');
       const data = await response.json();
       dispatch({ type: 'SET_USER', payload: data });
     };
   };
   \`\`\`

4. Dispatch asynchronous actions from components:
   \`\`\`jsx
   function UserData() {
     const dispatch = useDispatch();
     const user = useSelector(state => state.user);

     useEffect(() => {
       dispatch(fetchUserData());
     }, [dispatch]);

     return <div>{user ? user.name : 'Loading...'}</div>;
   }
   \`\`\`

Redux middleware like Thunk allows you to handle asynchronous logic outside of your React components, keeping them clean and easy to test.

`,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of Redux in an application?",
        options: [
          "To manage server-side data",
          "To manage and centralize the state of the application",
          "To handle component lifecycles",
          "To create UI components",
        ],
        answer: 1,
      },
      {
        question:
          "Which Redux library is used to connect React components to the store?",
        options: [
          "redux-thunk",
          "react-redux",
          "redux-persist",
          "react-router-redux",
        ],
        answer: 1,
      },
      {
        question:
          "Which hook is used to access the Redux state inside a React component?",
        options: ["useDispatch", "useState", "useSelector", "useContext"],
        answer: 2,
      },
      {
        question: "What does the \`useDispatch\` hook do in React-Redux?",
        options: [
          "Accesses the current state from the Redux store",
          "Dispatches an action to the Redux store",
          "Creates a new reducer function",
          "Applies middleware in Redux",
        ],
        answer: 1,
      },
      {
        question:
          "Which middleware is commonly used to handle asynchronous actions in Redux?",
        options: ["redux-thunk", "redux-saga", "redux-devtools", "react-redux"],
        answer: 0,
      },
    ],
  },
  browserCompatibility: {
    title: "Browser Compatibility with Babel",
    description:
      "Babel is a JavaScript compiler that helps ensure compatibility with different browsers by transpiling modern JavaScript to older versions that are widely supported.",
    pages: [
      {
        title: "Introduction to Browser Compatibility with Babel",
        content: `
  # Browser Compatibility with Babel
  
  Babel is a toolchain that allows you to write modern JavaScript code while ensuring compatibility with a wide range of browsers. It does this by converting your JavaScript code into an older, more widely supported version, allowing older browsers to run your code.
  
  ### Key Benefits:
  - **Cross-Browser Compatibility**: Babel helps ensure that your application works across all browsers, even older versions.
  - **ES6+ Support**: You can use the latest JavaScript features (e.g., arrow functions, async/await, classes) without worrying about browser support.
  - **Customization**: Babel allows you to configure which environments to support and which transformations to apply.
  
  ### Example Babel Configuration for Browser Compatibility:
  
  \`\`\`json
  // .babelrc
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": "> 0.25%, not dead"
        }
      ]
    ]
  }
  \`\`\`
  This configuration tells Babel to transpile the code for browsers with at least 0.25% market share, excluding dead browsers.
        `,
      },
      {
        title: "Using Babel Presets for Compatibility",
        content: `
  # Using Babel Presets for Browser Compatibility
  
  Babel uses presets to determine how to transpile the code. The most common preset for ensuring browser compatibility is \`@babel/preset-env\`.
  
  ### Example with \`@babel/preset-env\`:
  
  \`\`\`json
  // .babelrc
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": "last 2 versions"
        }
      ]
    ]
  }
  \`\`\`
  
  This tells Babel to target the last two versions of each major browser, ensuring compatibility with modern browsers.
  
  ### Options for \`@babel/preset-env\`:
  - **\`targets\`**: Specifies which environments (browsers, Node.js versions) to support. You can target specific versions or browsers based on usage statistics or custom queries.
  - **\`useBuiltIns\`**: Allows you to selectively polyfill features based on browser support.
  - **\`corejs\`**: Defines which version of \`core-js\` to use for polyfills.
        `,
      },
      {
        title: "Polyfilling with Babel for Older Browsers",
        content: `
  # Polyfilling with Babel for Older Browsers
  
  Polyfills are used to ensure that older browsers can understand features not natively supported, such as \`Promise\` or \`Array.from()\`.
  
  ### Example Polyfilling Setup in Babel:
  
  \`\`\`json
  // .babelrc
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry",
          "corejs": 3
        }
      ]
    ]
  }
  \`\`\`
  
  In this configuration, Babel will automatically import polyfills from \`core-js\` based on the environment you are targeting. The \`useBuiltIns: "entry"\` option means that polyfills will be added at the entry point of your application (e.g., in your main \`index.js\` file).
  
  ### Key Notes:
  - **Polyfills**: Essential for supporting newer JavaScript features in older browsers.
  - **Core-JS**: Babel uses \`core-js\` for polyfills. You can specify which version of \`core-js\` you want to use, depending on the level of compatibility you need.
        `,
      },
    ],
    quiz: [
      {
        question:
          "What is the main purpose of using Babel in terms of browser compatibility?",
        options: [
          "To ensure the application works on all platforms",
          "To transpile modern JavaScript into code compatible with older browsers",
          "To increase the application's performance",
          "To improve the styling of the application",
        ],
        answer: 1,
      },
      {
        question:
          "Which Babel preset is used for targeting specific browsers or environments?",
        options: [
          "@babel/preset-react",
          "@babel/preset-env",
          "@babel/preset-typescript",
          "@babel/preset-flow",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of polyfills in Babel?",
        options: [
          "To add browser-specific features",
          "To ensure compatibility with older browsers for features not natively supported",
          "To make the application run faster",
          "To enable client-side routing in React applications",
        ],
        answer: 1,
      },
    ],
  },
  unitTesting: {
    title: "Unit Testing in Next.js",
    description:
      "Unit testing ensures that individual components or functions work as expected. In Next.js, you can use tools like Jest and React Testing Library to write and run tests.",
    pages: [
      {
        title: "Introduction to Unit Testing",
        content: `
  # Unit Testing
  
  Unit testing involves testing individual units of code (such as functions or components) to ensure they work as expected. In Next.js, you can use testing frameworks like Jest and libraries like React Testing Library to test components.
  
  ### Key Benefits:
  - **Improved Code Quality**: Writing tests helps identify bugs early and ensures your components behave correctly.
  - **Faster Development**: Tests provide immediate feedback, allowing you to make changes confidently.
  - **Easier Refactoring**: With tests in place, you can refactor your code without worrying about breaking functionality.
  
  \`\`\`bash
  # Install Jest and React Testing Library
  npm install --save-dev jest @testing-library/react @testing-library/jest-dom
  \`\`\`
  
  ### Example:
  \`\`\`jsx
  import { render, screen } from '@testing-library/react';
  import MyComponent from './MyComponent';
  
  test('renders the correct text', () => {
    render(<MyComponent />);
    const element = screen.getByText(/Hello, World!/i);
    expect(element).toBeInTheDocument();
  });
  \`\`\`
        `,
      },
      {
        title: "Testing Components with React Testing Library",
        content: `
  # Testing Components with React Testing Library
  
  React Testing Library allows you to simulate user interactions and verify the UI state changes in response. It focuses on testing the component's behavior rather than its internal implementation.
  
  ### Example: Testing a Button Click
  
  \`\`\`jsx
  // MyButton.jsx
  export default function MyButton({ onClick, label }) {
    return <button onClick={onClick}>{label}</button>;
  }
  \`\`\`
  
  \`\`\`jsx
  // MyButton.test.js
  import { render, screen, fireEvent } from '@testing-library/react';
  import MyButton from './MyButton';
  
  test('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton onClick={handleClick} label="Click Me" />);
    
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  \`\`\`
  
  ### Key Notes:
  - **Rendering**: Use the \`render\` function to mount your component.
  - **Finding Elements**: Use \`screen.getByText\`, \`screen.getByRole\`, or other queries to locate elements in the rendered output.
  - **Simulating Events**: Use \`fireEvent\` to simulate user interactions, like clicks or typing.
        `,
      },
      {
        title: "Mocking API Calls in Unit Tests",
        content: `
  # Mocking API Calls in Unit Tests
  
  When testing components that make API calls, it's often helpful to mock those calls to avoid hitting real endpoints. Jest provides built-in support for mocking functions, including API calls.
  
  ### Example: Mocking an API Call
  
  \`\`\`jsx
  // fetchData.js
  export async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  \`\`\`
  
  \`\`\`jsx
  // fetchData.test.js
  import { fetchData } from './fetchData';
  
  jest.mock('./fetchData');
  
  test('fetchData calls the correct API endpoint', async () => {
    const mockResponse = { data: 'some data' };
    fetchData.mockResolvedValue(mockResponse);
    
    const result = await fetchData('https://api.example.com/data');
    
    expect(result).toEqual(mockResponse);
    expect(fetchData).toHaveBeenCalledWith('https://api.example.com/data');
  });
  \`\`\`
  
  ### Key Notes:
  - **jest.mock()**: Used to mock a module or function. In this case, we mock \`fetchData\` to prevent it from making real API calls.
  - **mockResolvedValue()**: Simulates a resolved promise from the mocked function, returning the mock data.
        `,
      },
    ],
    quiz: [
      {
        question: "What is the main purpose of unit testing?",
        options: [
          "To test how components interact with each other",
          "To test individual components or functions in isolation",
          "To test the end-to-end functionality of the app",
          "To test the performance of the app",
        ],
        answer: 1,
      },
      {
        question:
          "Which library is commonly used for testing React components?",
        options: ["Jest", "React Testing Library", "Mocha", "Enzyme"],
        answer: 1,
      },
      {
        question: "How do you mock an API call in Jest?",
        options: [
          "By using \`jest.fn()\` to mock the function",
          "By using \`jest.spyOn()\` to spy on the function",
          "By using \`jest.mock()\` to mock the module or function",
          "By using \`jest.mockResolvedValue()\` to simulate the return value",
        ],
        answer: 2,
      },
    ],
  },
  dynamicImports: {
    title: "Dynamic Imports in Next.js",
    description:
      "Dynamic Imports allow you to load components or libraries only when they are needed, improving performance by reducing the initial load time of your application.",
    pages: [
      {
        title: "Introduction to Dynamic Imports",
        content: `
  # Dynamic Imports in Next.js
  
  Dynamic imports allow you to split your code into smaller chunks and load them only when needed, reducing the initial JavaScript bundle size. This results in faster page load times, especially on larger applications.
  
  ### Key Benefits:
  - **Reduced Initial Load Time**: Only the necessary parts of your app are loaded initially.
  - **Code Splitting**: Helps you load different parts of the app when required, not all at once.
  - **Improved User Experience**: Loads content faster, improving overall page performance.
  
  \`\`\`jsx
  import dynamic from 'next/dynamic';
  
  const DynamicComponent = dynamic(() => import('./components/HeavyComponent'));
  
  export default function Home() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <DynamicComponent />
      </div>
    );
  }
  \`\`\`
        `,
      },
      {
        title: "Using Dynamic Imports with React Components",
        content: `
  # Using Dynamic Imports for React Components
  
  To dynamically import a React component in Next.js, use the \`dynamic\` function from the \`next/dynamic\` package. This helps to load the component only when it is required, improving performance.
  
  ### Example:
  \`\`\`jsx
  import dynamic from 'next/dynamic';
  
  const Chart = dynamic(() => import('./ChartComponent'), { ssr: false });
  
  export default function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Chart />
      </div>
    );
  }
  \`\`\`
  
  ### Key Notes:
  - By default, the component is server-side rendered (SSR). To disable SSR for the dynamically imported component, pass \`{ ssr: false }\` as an option.
  - Dynamic imports can be used with any React component or JavaScript library that isn't needed immediately.
  
  \`\`\`jsx
  const Map = dynamic(() => import('react-map-gl'), { ssr: false });
  \`\`\`
        `,
      },
      {
        title: "Advanced Use of Dynamic Imports",
        content: `
  # Advanced Use of Dynamic Imports
  
  Dynamic imports can also be used with React hooks, third-party libraries, or components that are large or seldom used, providing more control over performance optimization.
  
  ### Example: Using Dynamic Imports with Third-Party Libraries
  \`\`\`jsx
  import dynamic from 'next/dynamic';
  
  const SomeLibrary = dynamic(() => import('some-large-library'), { loading: () => <p>Loading...</p> });
  
  export default function Page() {
    return (
      <div>
        <h1>Page with Large Library</h1>
        <SomeLibrary />
      </div>
    );
  }
  \`\`\`
  
  ### Key Benefits:
  - **Custom Loading States**: You can specify a custom loading state while the component or library is being fetched.
  - **Conditional Loading**: Load only parts of the app that are needed on certain user actions or routes.
  
  \`\`\`jsx
  const DynamicButton = dynamic(() => import('./DynamicButton'), {
    loading: () => <p>Loading Button...</p>,
  });
  \`\`\`
  
  This approach gives you more control over how content is loaded in your app, improving user experience and performance.
        `,
      },
    ],
    quiz: [
      {
        question:
          "What is the main advantage of using dynamic imports in Next.js?",
        options: [
          "It allows code to be split and loaded only when required",
          "It forces all components to load at the same time",
          "It prevents any server-side rendering",
          "It only works with React hooks",
        ],
        answer: 0,
      },
      {
        question:
          "How do you disable server-side rendering for a dynamically imported component in Next.js?",
        options: [
          "By using \`{ ssr: true }\`",
          "By using \`{ ssr: false }\`",
          "By adding the \`useClient\` directive",
          "By adding a custom loading state",
        ],
        answer: 1,
      },
      {
        question: "Which of the following can you use dynamic imports for?",
        options: [
          "Only third-party libraries",
          "Only React components",
          "React components, third-party libraries, and large assets",
          "Only images",
        ],
        answer: 2,
      },
    ],
  },
  imageOptimization: {
    title: "Image Optimization in Next.js",
    description:
      "Image Optimization is a key technique in Next.js to reduce image sizes, improve performance, and deliver a better user experience across different devices.",
    pages: [
      {
        title: "Introduction to Image Optimization",
        content: `
  # Image Optimization in Next.js
  
  Next.js provides automatic image optimization by using the built-in \`<Image />\` component. This helps to serve images in the best format, optimize their size, and improve page load times.
  
  ### Key Benefits:
  - **Automatic Image Compression**: Next.js optimizes images for the best performance.
  - **Responsive Images**: It serves the appropriate image size for different screen resolutions and devices.
  - **Lazy Loading**: Images are only loaded when they are about to enter the viewport.
  
  \`\`\`jsx
  import Image from 'next/image';
  
  export default function Page() {
    return (
      <div>
        <h1>Optimized Image Example</h1>
        <Image
          src="/images/optimized.jpg"
          alt="An optimized image"
          width={800}
          height={600}
          priority
        />
      </div>
    );
  }
  \`\`\`
        `,
      },
      {
        title: "Using the Image Component for Optimization",
        content: `
  # Using the Next.js Image Component
  
  The Next.js \`<Image />\` component optimizes images automatically by default. You can also control the image size, quality, and formats it should be served in.
  
  ### Key Features:
  - **Automatic Format Conversion**: Images are served in modern formats like WebP if supported.
  - **Dynamic Resizing**: It ensures that the right image size is served based on the device's resolution.
  - **Lazy Loading**: By default, images are lazy-loaded as the user scrolls.
  
  \`\`\`jsx
  import Image from 'next/image';
  
  function Gallery() {
    return (
      <div>
        <Image
          src="/images/photo.jpg"
          alt="Gallery Image"
          width={600}
          height={400}
        />
      </div>
    );
  }
  \`\`\`
  
  ### Configuring External Images:
  To use external URLs for images, you need to configure allowed domains in \`next.config.js\`:
  \`\`\`js
  module.exports = {
    images: {
      domains: ['example.com'],
    },
  };
  \`\`\`
        `,
      },
      {
        title: "Manual Image Optimization Techniques",
        content: `
  # Manual Image Optimization
  
  Although Next.js automatically optimizes images, you may want to manually optimize images before uploading them to reduce file sizes even further.
  
  ### Manual Optimization Tools:
  - **TinyPNG**: A great online tool for compressing PNG and JPEG images.
  - **Squoosh**: A tool for compressing and converting images to different formats.
  - **ImageMagick**: A powerful CLI tool for batch image optimization.
  
  ### Example: Using ImageMagick
  To compress an image manually with ImageMagick, use this command:
  \`\`\`
  convert input.jpg -quality 85 output.jpg
  \`\`\`
  
  ### Controlling Image Quality in Next.js:
  You can control the compression level using the \`quality\` prop in the Next.js \`<Image />\` component:
  \`\`\`jsx
  <Image
    src="/images/large-image.jpg"
    alt="Optimized Image with Quality Control"
    width={1200}
    height={800}
    quality={50}  // Set image quality to 50%
  />
  \`\`\`
        `,
      },
    ],
    quiz: [
      {
        question:
          "What is the main advantage of using the `<Image />` component in Next.js?",
        options: [
          "It only supports JPEG images",
          "It automatically optimizes and serves images in the best format",
          "It requires manual compression for every image",
          "It does not support lazy loading",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following formats is Next.js likely to serve when optimizing images?",
        options: ["GIF", "PNG", "WebP", "BMP"],
        answer: 2,
      },
      {
        question: "How do you manually optimize an image using Next.js?",
        options: [
          "By compressing the image in the `next.config.js` file",
          "By using the `quality` prop in the `<Image />` component",
          "By editing the HTML tag manually",
          "By setting an image URL from an external source",
        ],
        answer: 1,
      },
    ],
  },
  pagination: {
    title: "Implementing Pagination",
    description:
      "Learn how to fetch and display large amounts of data efficiently using pagination techniques with serverless APIs and frontend UI.",
    pages: [
      {
        title: "Server-Side Pagination",
        content: `
  # Server-Side Pagination
  
  Instead of fetching all items at once, fetch a limited number per request.
  
  Example serverless function:
  
  \`\`\`javascript
  // pages/api/posts.js
  export default async function handler(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const start = (page - 1) * limit;
    
    try {
      const posts = await getPostsFromDatabase(start, limit);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  }
  \`\`\`
  
  Notes:
  - Use query parameters like \`page\` and \`limit\`
  - Calculate the starting index dynamically
        `,
      },
      {
        title: "Client-Side Pagination with Axios",
        content: `
  # Client-Side Pagination with Axios
  
  Use Axios to request a specific page from your API.
  
  Example:
  
  \`\`\`javascript
  // services/posts.js
  import axios from "axios";
  
  export async function fetchPosts(page = 1, limit = 10) {
    const response = await axios.get(\`/api/posts?page=\${page}&limit=\${limit}\`);
    return response.data;
  }
  \`\`\`
  
  React usage:
  
  \`\`\`jsx
  import { useState, useEffect } from "react";
  import { fetchPosts } from "../services/posts";
  
  export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      fetchPosts(page).then(setPosts);
    }, [page]);
  
    return (
      <div>
        {posts.map(post => <div key={post.id}>{post.title}</div>)}
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
    );
  }
  \`\`\`
  
  Tips:
  - Trigger new fetch when the page number changes
  - Show loading indicators if needed
        `,
      },
      {
        title: "Best Practices for Pagination",
        content: `
  # Best Practices for Pagination
  
  Good pagination improves performance and UX.
  
  Tips:
  - Show a loading spinner when fetching new pages
  - Handle "no more data" gracefully (disable "Next" button)
  - Consider using infinite scrolling for better UX on mobile
  
  Advanced Example:
  
  \`\`\`jsx
  {posts.length === 0 && <p>No posts found.</p>}
  {posts.map(post => (
    <div key={post.id}>{post.title}</div>
  ))}
  {hasMore && <button onClick={() => setPage(page + 1)}>Load More</button>}
  \`\`\`
  
  Key points:
  - Track if there's more data available
  - Avoid multiple requests at the same time
  - Pre-fetch next page in background for extra smoothness
        `,
      },
    ],
    quiz: [
      {
        question: "What query parameters are commonly used for pagination?",
        options: [
          "start and end",
          "page and limit",
          "count and total",
          "page and offset",
        ],
        answer: 1,
      },
      {
        question: "What should happen when there is no more data to fetch?",
        options: [
          "Continue fetching empty pages",
          "Show a 'No more data' message or disable the 'Next' button",
          "Reload the page",
          "Throw an error",
        ],
        answer: 1,
      },
      {
        question: "When should you trigger a new API call for more data?",
        options: [
          "When the page number changes",
          "When the user clicks the reload button",
          "After every 10 seconds automatically",
          "Only once at the beginning",
        ],
        answer: 0,
      },
    ],
  },
  errorHandling: {
    title: "Error Handling in Serverless APIs",
    description:
      "Learn how to properly catch and handle errors inside serverless functions to make your app reliable and user-friendly.",
    pages: [
      {
        title: "Basic Error Handling",
        content: `
  # Basic Error Handling
  
  In serverless functions, always wrap your logic in try/catch blocks.
  
  Example:
  
  \`\`\`javascript
  // pages/api/user.js
  export default async function handler(req, res) {
    try {
      const user = await getUserFromDatabase();
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }
  \`\`\`
  
  Notes:
  - Always send an appropriate status code (like \`500\` for server errors)
  - Log errors for debugging (but don't expose sensitive details to the client)
        `,
      },
      {
        title: "Custom Error Responses",
        content: `
  # Custom Error Responses
  
  You can create structured error messages to improve frontend handling.
  
  Example:
  
  \`\`\`javascript
  // pages/api/login.js
  export default async function handler(req, res) {
    try {
      if (!req.body.username) {
        return res.status(400).json({ error: "Username is required" });
      }
  
      // Login logic...
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
  \`\`\`
  
  Tips:
  - Use \`400\` for bad requests (client error)
  - Use \`401\` for unauthorized access
  - Use \`500\` for unexpected server issues
        `,
      },
      {
        title: "Frontend Error Handling with Axios",
        content: `
  # Frontend Error Handling with Axios
  
  Catch errors from your serverless APIs when making requests with Axios.
  
  Example:
  
  \`\`\`javascript
  // services/auth.js
  import axios from "axios";
  
  export async function loginUser(credentials) {
    try {
      const response = await axios.post("/api/login", credentials);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.error || "Server error");
      } else {
        throw new Error("Network error");
      }
    }
  }
  \`\`\`
  
  Good practices:
  - Check \`error.response\` to get API error messages
  - Show user-friendly messages based on the error
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which HTTP status code is appropriate for a client-side validation error?",
        options: ["500", "401", "400", "200"],
        answer: 2,
      },
      {
        question:
          "In a serverless function, where should you place your try/catch block?",
        options: [
          "Only around database calls",
          "Around the whole function logic",
          "Around the res.json call only",
          "It is not needed",
        ],
        answer: 1,
      },
      {
        question:
          "What should you avoid exposing to the client in your error response?",
        options: [
          "Friendly error messages",
          "Full server error stack traces",
          "Status codes",
          "Empty responses",
        ],
        answer: 1,
      },
    ],
  },
  fileUploads: {
    title: "File Uploads with Serverless and Axios",
    description:
      "Learn how to upload files like images and documents to your serverless API using Axios and FormData.",
    pages: [
      {
        title: "Uploading Files with Axios",
        content: `
  # Uploading Files with Axios
  
  To upload files from the frontend, use the \`FormData\` API along with Axios.
  
  Example:
  
  \`\`\`javascript
  // services/upload.js
  import axios from "axios";
  
  export async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  
    return res.data;
  }
  \`\`\`
  
  Notes:
  - Always set the \`Content-Type\` to \`multipart/form-data\`
  - Attach the file to the FormData before sending
        `,
      },
      {
        title: "Creating the Upload API Route",
        content: `
  # Creating the Upload API Route
  
  Example of a simple upload API endpoint:
  
  \`\`\`javascript
  // pages/api/upload.js
  import formidable from "formidable";
  import fs from "fs";
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default function handler(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return res.status(500).json({ error: "Upload failed." });
  
      console.log(files.file);
      res.status(200).json({ message: "File uploaded successfully!" });
    });
  }
  \`\`\`
  
  Tips:
  - Disable the default body parser
  - Use a library like \`formidable\` to parse the incoming file
        `,
      },
      {
        title: "Handling Upload Errors",
        content: `
  # Handling Upload Errors
  
  Things can go wrong during file uploads. Always handle errors properly.
  
  Example:
  
  \`\`\`javascript
  try {
    const response = await uploadFile(selectedFile);
    console.log(response.message);
  } catch (error) {
    console.error("Upload error:", error.response?.data?.error || error.message);
  }
  \`\`\`
  
  Best Practices:
  - Show user-friendly error messages
  - Validate file types and sizes before uploading
  - Securely store uploaded files
        `,
      },
    ],
    quiz: [
      {
        question:
          "What JavaScript object helps in sending files in a POST request?",
        options: ["Blob", "Buffer", "FormData", "Document"],
        answer: 2,
      },
      {
        question: "Which header must be set when uploading a file using Axios?",
        options: [
          "application/json",
          "application/xml",
          "multipart/form-data",
          "text/plain",
        ],
        answer: 2,
      },
      {
        question: "What should you do if a file upload fails?",
        options: [
          "Ignore the error",
          "Log it silently",
          "Show a user-friendly error message",
          "Force upload again automatically",
        ],
        answer: 2,
      },
    ],
  },
  apiOrganization: {
    title: "Organizing Serverless API Directories",
    description:
      "Learn how to organize your API routes and serverless functions for a scalable, maintainable project structure.",
    pages: [
      {
        title: "Grouping API Endpoints",
        content: `
  # Grouping API Endpoints
  
  When your app grows, organize your API routes into meaningful groups.
  
  Example folder structure:
  
  \`\`\`
  /pages
    /api
      /auth
        login.js
        register.js
      /posts
        create.js
        update.js
        delete.js
  \`\`\`
  
  Benefits:
  - Easier to maintain
  - Clear separation of concerns
  - Faster onboarding for new developers
        `,
      },
      {
        title: "Naming Conventions",
        content: `
  # Naming Conventions
  
  Use clear, consistent names for files and folders.
  
  Tips:
  - Use lowercase filenames (e.g., \`login.js\`)
  - Group by feature, not by technical type
  - Use verbs for actions (e.g., \`create.js\`, \`delete.js\`)
  
  Example:
  
  \`\`\`
  /api/products/create.js
  /api/products/update.js
  /api/users/login.js
  \`\`\`
  
  Avoid vague names like \`stuff.js\` or \`handler.js\`.
        `,
      },
      {
        title: "Connecting API to Frontend with Axios",
        content: `
  # Connecting API to Frontend with Axios
  
  Use Axios to call your serverless APIs from the frontend.
  
  Example:
  
  \`\`\`javascript
  // services/auth.js
  import axios from "axios";
  
  export async function loginUser(email, password) {
    const res = await axios.post("/api/auth/login", { email, password });
    return res.data;
  }
  \`\`\`
  
  Benefits:
  - Cleaner separation between UI and API logic
  - Easier to handle loading states and errors
  - Reusable API service functions
  
  Remember:
  - Handle errors gracefully
  - Show loading spinners when waiting for a response
        `,
      },
    ],
    quiz: [
      {
        question: "Why should you group API routes into folders?",
        options: [
          "It makes the project messy",
          "It makes the project easier to maintain",
          "It slows down deployment",
          "It hides routes from the frontend",
        ],
        answer: 1,
      },
      {
        question: "What is a good naming practice for serverless API files?",
        options: [
          "Use vague names like stuff.js",
          "Group by technical type like controllers",
          "Use lowercase and verbs",
          "Use random names to be unique",
        ],
        answer: 2,
      },
      {
        question:
          "What library can you use to call serverless APIs from the frontend?",
        options: ["Lodash", "Axios", "Moment.js", "Tailwind CSS"],
        answer: 1,
      },
    ],
  },
  serverlessSecurity: {
    title: "Serverless Security Best Practices",
    description:
      "Learn how to secure your serverless functions, protect sensitive data, and prevent common vulnerabilities.",
    pages: [
      {
        title: "Securing API Routes",
        content: `
  # Securing API Routes
  
  Always validate requests to your serverless API routes.
  
  Example: Check for authentication before returning data:
  
  \`\`\`javascript
  // pages/api/secure-data.js
  export default function handler(req, res) {
    const { authorization } = req.headers;
  
    if (!authorization || authorization !== \`Bearer \${process.env.API_SECRET}\`) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    res.status(200).json({ data: "Super secret data!" });
  }
  \`\`\`
  
  Tips:
  - Use tokens or API keys to protect routes
  - Respond with 401 Unauthorized when authentication fails
  - Always read secrets from \`process.env\`
        `,
      },
      {
        title: "Validating Input Data",
        content: `
  # Validating Input Data
  
  Never trust incoming data from users. Always validate and sanitize input.
  
  Example:
  
  \`\`\`javascript
  // pages/api/register.js
  export default function handler(req, res) {
    const { email, password } = req.body;
  
    if (!email.includes("@") || password.length < 8) {
      return res.status(400).json({ message: "Invalid input" });
    }
  
    // Save user to database (example)
    res.status(201).json({ message: "User created" });
  }
  \`\`\`
  
  Important:
  - Always validate format, length, and presence
  - Reject incomplete or suspicious data
  - Sanitize inputs to prevent injections
        `,
      },
      {
        title: "Protecting Sensitive Data",
        content: `
  # Protecting Sensitive Data
  
  Serverless functions often deal with sensitive data like passwords, API keys, and tokens.
  
  Best practices:
  - Never send sensitive data to the client
  - Encrypt sensitive fields in databases
  - Use HTTPS everywhere
  
  Example: Hiding server secrets:
  
  \`\`\`javascript
  // Accessing a secret token safely
  const secret = process.env.SECRET_API_TOKEN;
  \`\`\`
  
  Security reminder:
  - Secrets should ONLY live server-side
  - Use environment variables for all private keys
  - Rotate keys regularly
        `,
      },
    ],
    quiz: [
      {
        question:
          "How should you protect an API route in a serverless function?",
        options: [
          "Allow anyone to access it",
          "Check authorization headers",
          "Only check the user-agent",
          "Return 404 immediately",
        ],
        answer: 1,
      },
      {
        question: "What should you always do with user input?",
        options: [
          "Trust it by default",
          "Validate and sanitize it",
          "Store it without changes",
          "Forward it to external APIs without checks",
        ],
        answer: 1,
      },
      {
        question: "Where should secret API tokens be stored?",
        options: [
          "In the browser localStorage",
          "Hard-coded inside components",
          "In environment variables",
          "In public GitHub repositories",
        ],
        answer: 2,
      },
    ],
  },
  advancedServerFunctions: {
    title: "Advanced Serverless Techniques",
    description:
      "Learn about deploying serverless functions, environment variables, and error handling best practices.",
    pages: [
      {
        title: "Deploying Serverless Functions",
        content: `
  # Deploying Serverless Functions
  
  When deploying your project (e.g., to Vercel, Netlify), serverless functions inside the \`/api\` folder are automatically deployed as API endpoints.
  
  Example setup:
  
  \`\`\`
  /pages
    /api
      hello.js
  \`\`\`
  
  After deployment, you can access it via:
  
  \`\`\`
  https://yourdomain.com/api/hello
  \`\`\`
  
  Deployment tips:
  - Keep your serverless functions stateless
  - Test locally before deploying
  - Use environment variables for secrets (never hard-code them)
        `,
      },
      {
        title: "Using Environment Variables",
        content: `
  # Using Environment Variables
  
  Environment variables let you safely store secrets, like API keys or database URLs.
  
  Define them in a \`.env.local\` file:
  
  \`\`\`
  NEXT_PUBLIC_API_URL=https://api.example.com
  SECRET_API_KEY=abcdefg12345
  \`\`\`
  
  Use them in your app:
  
  \`\`\`javascript
  // Calling a public API URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  fetch(\`\${apiUrl}/posts\`);
  \`\`\`
  
  Important:
  - Prefix with \`NEXT_PUBLIC_\` to expose them to the browser
  - Without prefix, they stay server-side only (safer)
  - Never commit \`.env.local\` to GitHub
        `,
      },
      {
        title: "Error Handling in Serverless Functions",
        content: `
  # Error Handling in Serverless Functions
  
  Always handle errors properly inside your serverless functions to avoid crashes and help debugging.
  
  Example:
  
  \`\`\`javascript
  // pages/api/user.js
  export default async function handler(req, res) {
    try {
      if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
      }
      // Simulate database fetch
      const user = { id: 1, name: "Alice" };
      res.status(200).json(user);
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  \`\`\`
  
  Tips:
  - Always check request methods
  - Use try/catch around async logic
  - Log errors server-side, but send user-friendly error messages
        `,
      },
    ],
    quiz: [
      {
        question: "What happens to serverless functions during deployment?",
        options: [
          "They become static HTML pages",
          "They are bundled with your CSS",
          "They are deployed as API endpoints",
          "They disappear after build",
        ],
        answer: 2,
      },
      {
        question:
          "What prefix must environment variables have to be exposed to the browser?",
        options: [
          "SERVER_PUBLIC_",
          "PUBLIC_NEXT_",
          "NEXT_PUBLIC_",
          "CLIENT_ENV_",
        ],
        answer: 2,
      },
      {
        question:
          "Why should you use try/catch blocks in serverless functions?",
        options: [
          "To delay the response",
          "To automatically restart the server",
          "To handle and report errors cleanly",
          "To skip database validation",
        ],
        answer: 2,
      },
    ],
  },
  serverFunctions: {
    title: "Serverless Functions and Best Practices",
    description:
      "Learn how to connect serverless functions to your frontend, organize your project structure, and protect routes effectively.",
    pages: [
      {
        title: "Connecting Serverless Functions with UI using Axios",
        content: `
  # Connecting Serverless Functions with UI
  
  You can call serverless functions from your frontend using Axios. A typical serverless function lives in a \`/api\` folder, and can be accessed by sending HTTP requests.
  
  \`\`\`javascript
  // api/hello.js
  export default function handler(req, res) {
    res.status(200).json({ message: "Hello from the server!" });
  }
  \`\`\`
  
  Call it from your UI with Axios:
  
  \`\`\`javascript
  // components/HelloButton.jsx
  import axios from "axios";
  
  export default function HelloButton() {
    const sayHello = async () => {
      const res = await axios.get("/api/hello");
      alert(res.data.message);
    };
  
    return <button onClick={sayHello}>Say Hello</button>;
  }
  \`\`\`
  
  Key points:
  - Use relative paths like \`/api/your-function\`
  - Handle errors with \`try/catch\`
  - Make sure Axios is installed with \`npm install axios\`
        `,
      },
      {
        title: "Protecting Routes",
        content: `
  # Protecting Routes
  
  To protect pages from unauthorized access, you can use middleware or client-side checks to verify if a user is authenticated.
  
  Example client-side protection:
  
  \`\`\`javascript
  // pages/dashboard.jsx
  import { useEffect } from "react";
  import { useRouter } from "next/router";
  import { useAuth } from "../hooks/useAuth"; // hypothetical auth hook
  
  export default function Dashboard() {
    const { user } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);
  
    if (!user) return null; // or a loading spinner
  
    return <h1>Welcome to your dashboard</h1>;
  }
  \`\`\`
  
  Notes:
  - Always check authentication before showing sensitive data
  - Middleware can be used for server-side protection (in frameworks like Next.js)
  - Consider fallback UI while checking auth
        `,
      },
      {
        title: "Naming and Grouping Directories",
        content: `
  # Naming and Grouping Directories
  
  Good directory structure improves maintainability. Group related files together and use consistent naming conventions.
  
  Example:
  
  \`\`\`
  /components
    /Button
      Button.jsx
      Button.css
    /Navbar
      Navbar.jsx
      Navbar.css
  
  /pages
    /api
      hello.js
    /dashboard
      page.jsx
  
  /hooks
    useAuth.js
  \`\`\`
  
  Guidelines:
  - Use lowercase for folders, PascalCase for components
  - Group UI components together
  - Group serverless functions under \`/api\`
  - Keep hooks and utilities in separate folders
        `,
      },
    ],
    quiz: [
      {
        question: "How can you call a serverless function from the UI?",
        options: [
          "Using a direct database connection",
          "Using Axios to send HTTP requests",
          "Calling it through WebSockets",
          "Importing the serverless function directly",
        ],
        answer: 1,
      },
      {
        question: "Where should you place your serverless functions?",
        options: [
          "In the /utils folder",
          "In the /hooks folder",
          "In the /api directory",
          "Inside the /components directory",
        ],
        answer: 2,
      },
      {
        question: "What is a best practice when protecting routes?",
        options: [
          "Allow everyone to view and restrict later",
          "Check if the user is authenticated before rendering",
          "Only protect serverless functions, not pages",
          "Use sessionStorage without validation",
        ],
        answer: 1,
      },
    ],
  },
  internationalization: {
    title: "Internationalization",
    description:
      "Support for multiple languages and regions in Next.js applications through routing and localization.",
    pages: [
      {
        title: "Introduction to i18n",
        content: `# Internationalization (i18n)
  
  Internationalization in Next.js allows you to support multiple languages and regions in your application. The App Router provides built-in support for routing and localization.
  
  \`\`\`jsx
  // app/[lang]/layout.js
  export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'de' }];
  }
  
  export default function Layout({ children, params }) {
    const { lang } = params;
    
    return (
      <html lang={lang}>
        <body>{children}</body>
      </html>
    );
  }
  \`\`\`
  
  Core concepts:
  - Locale-based routing
  - Static generation of locale pages
  - Dynamic locale detection
        `,
      },
      {
        title: "Translation and Dictionaries",
        content: `# Translation and Dictionaries
  
  Managing translations in Next.js using dictionary files and dynamic imports.
  
  \`\`\`jsx
  // app/dictionaries/en.json
  {
    "products": {
      "title": "Products",
      "description": "Browse our products"
    }
  }
  
  // app/dictionaries/fr.json
  {
    "products": {
      "title": "Produits",
      "description": "Parcourir nos produits"
    }
  }
  
  // app/[lang]/dictionaries.js
  const dictionaries = {
    en: () => import('./dictionaries/en.json').then(module => module.default),
    fr: () => import('./dictionaries/fr.json').then(module => module.default)
  };
  
  export const getDictionary = async (locale) => dictionaries[locale]();
  
  // app/[lang]/products/page.js
  import { getDictionary } from '../dictionaries';
  
  export default async function ProductsPage({ params }) {
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    
    return (
      <div>
        <h1>{dictionary.products.title}</h1>
        <p>{dictionary.products.description}</p>
      </div>
    );
  }
  \`\`\`
  
  Implementation strategies:
  - JSON dictionary files
  - Server Components for translation loading
  - Client-side language switching
        `,
      },
      {
        title: "Middleware for Language Detection",
        content: `# Middleware for Language Detection
  
  Using middleware to detect user's preferred language and redirect accordingly.
  
  \`\`\`jsx
  // middleware.js
  import { NextResponse } from 'next/server';
  
  const defaultLocale = 'en';
  const locales = ['en', 'fr', 'de'];
  
  function getLocale(request) {
    // Check if there's a language in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameHasLocale = locales.some(
      locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
    );
  
    if (pathnameHasLocale) return pathname.split('/')[1];
    
    // Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const acceptedLocales = acceptLanguage.split(',').map(locale => locale.split(';')[0]);
      const matchedLocale = acceptedLocales.find(locale => 
        locales.includes(locale) || locales.includes(locale.split('-')[0])
      );
      if (matchedLocale) return matchedLocale.split('-')[0];
    }
    
    return defaultLocale;
  }
  
  export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
      locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
    );
    
    if (!pathnameHasLocale) {
      const locale = getLocale(request);
      return NextResponse.redirect(
        new URL(\`/\${locale}\${pathname.startsWith('/') ? pathname : \`/\${pathname}\`}\`, request.url)
      );
    }
  }
  
  export const config = {
    matcher: [
      // Skip all internal paths (_next)
      '/((?!_next|api|favicon.ico).*)',
    ],
  };
  \`\`\`
  
  Features:
  - Automatic language detection
  - Browser preference detection
  - Default language fallback
  - Locale-specific redirects
        `,
      },
    ],
    quiz: [
      {
        question: "How does Next.js App Router handle i18n routing?",
        options: [
          "Through special config in next.config.js only",
          "Using middleware and route parameters like [lang]",
          "Only with external libraries",
          "It doesn't support i18n natively",
        ],
        answer: 1,
      },
      {
        question: "What's a common approach to store translations in Next.js?",
        options: [
          "In the database only",
          "In environment variables",
          "In JSON dictionary files",
          "In CSS variables",
        ],
        answer: 2,
      },
      {
        question: "How can you detect a user's preferred language in Next.js?",
        options: [
          "Only with client-side JavaScript",
          "Only with server-side rendering",
          "Using the Accept-Language header in middleware",
          "It's not possible to detect automatically",
        ],
        answer: 2,
      },
    ],
  },
  edgeRuntime: {
    title: "Edge Runtime",
    description:
      "Next.js Edge Runtime enables running code at the edge, closer to users for faster responses and reduced latency.",
    pages: [
      {
        title: "Introduction to Edge Runtime",
        content: `# Edge Runtime
  
  The Edge Runtime in Next.js allows you to run code closer to users at the edge of the network, reducing latency and improving performance.
  
  \`\`\`jsx
  // app/api/edge/route.js
  export const runtime = 'edge';
  
  export async function GET() {
    return new Response(JSON.stringify({
      name: 'Edge API Route',
      timestamp: new Date().toISOString(),
    }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
  \`\`\`
  
  Key benefits:
  - Reduced latency with global distribution
  - Faster cold starts
  - Optimized for streaming responses
        `,
      },
      {
        title: "Edge vs. Node.js Runtime",
        content: `# Edge vs. Node.js Runtime
  
  The Edge Runtime provides a subset of Node.js APIs optimized for performance, while Node.js Runtime provides the full set of Node.js APIs.
  
  \`\`\`jsx
  // app/page.js
  export const runtime = 'edge'; // or 'nodejs' (default)
  
  export default function Page() {
    return (
      <div>
        <h1>This page runs on the Edge Runtime</h1>
      </div>
    );
  }
  \`\`\`
  
  Comparison:
  - Edge: Faster, limited API access, smaller bundle size
  - Node.js: Full API access, larger bundle size, supports more dependencies
  
  Edge Runtime limitations:
  - Limited Node.js APIs
  - Restricted native Node modules
  - Maximum 4MB response size (varies by provider)
        `,
      },
      {
        title: "Edge Middleware",
        content: `# Edge Middleware
  
  Edge Middleware runs before a request is completed, allowing for request transformation, redirection, or rewriting at the edge.
  
  \`\`\`jsx
  // middleware.js
  import { NextResponse } from 'next/server';
  
  export const config = {
    matcher: '/api/:path*',
  };
  
  export function middleware(request) {
    // Add headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-middleware-cache', 'no-cache');
    
    // Geolocation example
    const country = request.geo?.country || 'US';
    
    // Rewrite the request
    if (country === 'GB') {
      return NextResponse.rewrite(new URL('/api/gb-specific', request.url));
    }
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
  \`\`\`
  
  Use cases:
  - A/B testing
  - Feature flags
  - Authentication
  - Edge-based localization
  - Performance monitoring
        `,
      },
    ],
    quiz: [
      {
        question: "What is a key benefit of the Edge Runtime?",
        options: [
          "Full Node.js API access",
          "Reduced latency with global distribution",
          "Larger deployment bundle size",
          "Access to file system operations",
        ],
        answer: 1,
      },
      {
        question:
          "How do you specify that a route should use the Edge Runtime?",
        options: [
          "export const runtime = 'edge';",
          "export const mode = 'edge';",
          "export default { runtime: 'edge' };",
          "import { edge } from 'next/runtime';",
        ],
        answer: 0,
      },
      {
        question:
          "What is a limitation of the Edge Runtime compared to Node.js?",
        options: [
          "It's slower for most operations",
          "It can't use React components",
          "It has restricted access to Node.js APIs",
          "It doesn't support streaming",
        ],
        answer: 2,
      },
    ],
  },
  serverActions: {
    title: "Server Actions",
    description:
      "Server Actions allow you to define asynchronous functions that can be executed on the server directly from your components.",
    pages: [
      {
        title: "Introduction to Server Actions",
        content: `# Server Actions
  
  Server Actions are server-side functions that can be called directly from client components. They enable form submissions and data mutations without creating API endpoints.
  
  \`\`\`jsx
  // app/actions.js
  'use server';
  
  export async function addItem(formData) {
    const item = formData.get('item');
    
    // Add to database
    await db.items.create({ data: { name: item } });
    
    // Revalidate cache
    revalidatePath('/items');
  }
  \`\`\`
  
  Key features:
  - Progressive enhancement with native form support
  - Built-in CSRF protection
  - Direct database access
        `,
      },
      {
        title: "Using Server Actions with Forms",
        content: `# Using Server Actions with Forms
  
  Server Actions can be used directly with forms for a seamless server-client interaction.
  
  \`\`\`jsx
  // app/items/page.js
  import { addItem } from '../actions';
  
  export default function ItemsPage() {
    return (
      <div>
        <h1>Items</h1>
        <form action={addItem}>
          <input type="text" name="item" placeholder="Add new item" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
  \`\`\`
  
  Forms with Server Actions:
  - Can work without JavaScript (progressive enhancement)
  - Support formData API
  - Enable server-side validation
        `,
      },
      {
        title: "Advanced Server Actions",
        content: `# Advanced Server Actions
  
  Server Actions can be combined with React's useOptimistic for optimistic updates and error handling.
  
  \`\`\`jsx
  // app/items/client-page.js
  'use client';
  
  import { useOptimistic, useState } from 'react';
  import { addItem } from '../actions';
  
  export default function ItemsClient({ items }) {
    const [optimisticItems, addOptimisticItem] = useOptimistic(
      items,
      (state, newItem) => [...state, { id: 'temp-id', name: newItem }]
    );
    
    async function handleSubmit(formData) {
      const newItem = formData.get('item');
      
      // Add optimistically
      addOptimisticItem(newItem);
      
      // Submit the action
      await addItem(formData);
    }
    
    return (
      <div>
        <h1>Items</h1>
        <form action={handleSubmit}>
          <input type="text" name="item" placeholder="Add new item" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {optimisticItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  \`\`\`
  
  Advanced techniques:
  - Optimistic updates
  - Error handling and recovery
  - Integration with React Server Components
        `,
      },
    ],
    quiz: [
      {
        question: "What directive is used to mark a Server Action?",
        options: [
          "'use server'",
          "'use client'",
          "'server only'",
          "'api route'",
        ],
        answer: 0,
      },
      {
        question: "How do Server Actions enhance forms in Next.js?",
        options: [
          "They only work with JavaScript enabled",
          "They provide progressive enhancement and work without JavaScript",
          "They disable form validation",
          "They only work with API routes",
        ],
        answer: 1,
      },
      {
        question:
          "What React hook can be used with Server Actions for optimistic updates?",
        options: ["useEffect", "useReducer", "useOptimistic", "useTransition"],
        answer: 2,
      },
    ],
  },
  routeProtection: {
    title: "Route Protection",
    description:
      "Implementing authentication and authorization to protect routes in Next.js applications.",
    pages: [
      {
        title: "Introduction to Route Protection",
        content: `# Route Protection
  
  Route protection in Next.js allows you to restrict access to certain pages based on user authentication status or roles. This is essential for implementing secure applications.
  
  \`\`\`jsx
  // app/middleware.js
  import { NextResponse } from 'next/server';
  import { getToken } from 'next-auth/jwt';
  
  export async function middleware(req) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;
    
    if (!isAuthenticated && req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    return NextResponse.next();
  }
  \`\`\`
  
  Key concepts:
  - Middleware for global protection
  - Server-side validation
  - Client-side redirect guards
        `,
      },
      {
        title: "Role-Based Access Control",
        content: `# Role-Based Access Control
  
  Role-based access control (RBAC) restricts access based on user roles, providing granular control over what users can see or do.
  
  \`\`\`jsx
  // app/dashboard/admin/page.js
  import { getServerSession } from "next-auth/next";
  import { redirect } from "next/navigation";
  import { authOptions } from "@/app/api/auth/[...nextauth]/route";
  
  export default async function AdminPage() {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      redirect("/login");
    }
    
    if (session.user.role !== "admin") {
      redirect("/unauthorized");
    }
    
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin area</p>
      </div>
    );
  }
  \`\`\`
  
  Implementation strategies:
  - Server component checks
  - Route handlers for API protection
  - Higher-order components for client components
        `,
      },
      {
        title: "Authentication Patterns",
        content: `# Authentication Patterns
  
  Next.js supports various authentication patterns and providers through libraries like NextAuth.js.
  
  \`\`\`jsx
  // app/api/auth/[...nextauth]/route.js
  import NextAuth from "next-auth";
  import CredentialsProvider from "next-auth/providers/credentials";
  import GoogleProvider from "next-auth/providers/google";
  
  export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          // Verify credentials
          // Return user object or null
        }
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.role = user.role;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.role = token.role;
        return session;
      }
    }
  };
  
  const handler = NextAuth(authOptions);
  export { handler as GET, handler as POST };
  \`\`\`
  
  Best practices:
  - Store JWT securely
  - Use HTTPS in production
  - Implement CSRF protection
        `,
      },
    ],
    quiz: [
      {
        question:
          "What Next.js feature is commonly used for global route protection?",
        options: [
          "getServerSideProps",
          "Middleware",
          "Static Generation",
          "API Routes",
        ],
        answer: 1,
      },
      {
        question: "How can you protect routes within a Server Component?",
        options: [
          "Using useState and useEffect",
          "Using client-side redirects",
          "Using getServerSession and redirect",
          "Using localStorage",
        ],
        answer: 2,
      },
      {
        question:
          "What is the recommended way to store user roles in NextAuth.js?",
        options: [
          "In localStorage",
          "In the JWT token and session",
          "In URL parameters",
          "In cookies directly",
        ],
        answer: 1,
      },
    ],
  },
};
