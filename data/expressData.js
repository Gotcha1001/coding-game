export const expressData = {
  routes: {
    title: "Express Routes",
    description:
      "Learn how to define and handle routes in Express.js for API development.",
    pages: [
      {
        title: "Introduction to Express Routes",
        content: `
# Express Routes

Routes in Express.js define how an application responds to client requests at specific endpoints.

\`\`\`javascript
const express = require('express');
const app = express();

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

Key concepts:
- **HTTP Methods**: GET, POST, PUT, DELETE, etc.
- **Path**: The URL endpoint (e.g., \`/users\`, \`/api\`)
- **Handler**: Function to process the request and send a response
        `,
      },
      {
        title: "Route Parameters and Queries",
        content: `
# Route Parameters and Queries

Express allows dynamic routes using parameters and query strings.

\`\`\`javascript
const express = require('express');
const app = express();

// Route with parameter
app.get('/users/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

// Route with query string
app.get('/search', (req, res) => {
  const query = req.query.q || 'none';
  res.send(\`Search query: \${query}\`);
});

app.listen(3000);
\`\`\`

Tips:
- **Parameters**: Defined with \`:param\` in the route path
- **Query Strings**: Accessed via \`req.query\`
- **Dynamic Routing**: Useful for RESTful APIs
        `,
      },
      {
        title: "Route Middleware",
        content: `
# Route Middleware

Middleware functions process requests before the final handler.

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware to log requests
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
};

app.use(logger);

// Route using middleware
app.get('/protected', (req, res) => {
  res.send('Protected route accessed');
});

app.listen(3000);
\`\`\`

Key points:
- **Middleware**: Executes before route handlers
- **next()**: Passes control to the next middleware or handler
- **app.use()**: Applies middleware globally or to specific paths
        `,
      },
    ],
    quiz: [
      {
        question: "Which HTTP method is used for retrieving data in Express?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: 1,
      },
      {
        question: "How do you access a route parameter named 'id'?",
        options: ["req.query.id", "req.params.id", "req.body.id", "req.url.id"],
        answer: 1,
      },
      {
        question: "What does the 'next' function do in middleware?",
        options: [
          "Sends the response",
          "Ends the request",
          "Calls the next middleware or handler",
          "Logs the request",
        ],
        answer: 2,
      },
    ],
  },
  middleware: {
    title: "Express Middleware",
    description:
      "Master middleware in Express.js to handle requests and responses efficiently.",
    pages: [
      {
        title: "Introduction to Middleware",
        content: `
# Express Middleware

Middleware functions have access to the request, response, and next function.

\`\`\`javascript
const express = require('express');
const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log('Request received');
  next();
});

app.get('/', (req, res) => {
  res.send('Home page');
});

app.listen manoeuvre3000);
\`\`\`

Features:
- **Order**: Middleware executes in the order it’s defined
- **Global vs Route**: Apply to all routes or specific ones
- **Error Handling**: Can catch and handle errors
        `,
      },
      {
        title: "Built-in and Third-party Middleware",
        content: `
# Built-in and Third-party Middleware

Express includes built-in middleware, and third-party options are available.

\`\`\`javascript
const express = require('express');
const app = express();

// Built-in middleware for JSON parsing
app.use(express.json());

// Third-party middleware (e.g., CORS)
const cors = require('cors');
app.use(cors());

app.post('/data', (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000);
\`\`\`

Common middleware:
- **express.json()**: Parses JSON request bodies
- **cors**: Enables cross-origin requests
- **morgan**: Logs HTTP requests
        `,
      },
      {
        title: "Error Handling Middleware",
        content: `
# Error Handling Middleware

Special middleware handles errors in Express applications.

\`\`\`javascript
const express = require('express');
const app = express();

// Regular route
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong');
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000);
\`\`\`

Notes:
- **Four Arguments**: Error middleware uses (err, req, res, next)
- **Position**: Place at the end of middleware stack
- **Custom Errors**: Pass errors via next(err)
        `,
      },
    ],
    quiz: [
      {
        question: "Which middleware parses JSON request bodies?",
        options: [
          "express.json()",
          "express.urlencoded()",
          "cors()",
          "morgan()",
        ],
        answer: 0,
      },
      {
        question: "How many arguments does an error handling middleware take?",
        options: ["2", "3", "4", "5"],
        answer: 2,
      },
      {
        question: "Where should error handling middleware be placed?",
        options: [
          "Before routes",
          "After routes",
          "In the route handler",
          "In app.listen()",
        ],
        answer: 1,
      },
    ],
  },
  templating: {
    title: "Express Templating",
    description:
      "Learn to use templating engines with Express.js for dynamic HTML rendering.",
    pages: [
      {
        title: "Introduction to Templating",
        content: `
# Express Templating

Templating engines generate dynamic HTML on the server.

\`\`\`javascript
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route rendering a template
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.listen(3000);
\`\`\`

**index.ejs** file:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= title %></h1>
</body>
</html>
\`\`\`

Key concepts:
- **View Engine**: Configures the templating engine (e.g., EJS, Pug)
- **res.render()**: Renders a template with data
- **Dynamic Content**: Inject data into HTML
        `,
      },
    ],
    quiz: [
      {
        question: "What method renders a template in Express?",
        options: ["res.send()", "res.render()", "res.json()", "res.redirect()"],
        answer: 1,
      },
    ],
  },
  staticFiles: {
    title: "Express Static Files",
    description:
      "Learn to serve static files like images, CSS, and JavaScript in Express.js.",
    pages: [
      {
        title: "Introduction to Static Files",
        content: `
# Static Files

Express can serve static files like CSS, images, and JavaScript from a directory.

\`\`\`javascript
const express = require('express');
const app = express();

// Serve static files from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<html><body><img src="/images/logo.png"></body></html>');
});

app.listen(3000);
\`\`\`

Directory structure:
\`\`\`
project/
├── public/
│   ├── images/
│   │   └── logo.png
│   └── css/
│       └── style.css
├── index.js
\`\`\`

Key concepts:
- **express.static()**: Middleware to serve files
- **Public Directory**: Stores static assets
- **Relative Paths**: Access files via URL paths
        `,
      },
    ],
    quiz: [
      {
        question: "Which middleware serves static files in Express?",
        options: [
          "express.json()",
          "express.static()",
          "express.urlencoded()",
          "cors()",
        ],
        answer: 1,
      },
    ],
  },
  authentication: {
    title: "Express Authentication",
    description:
      "Implement basic authentication in Express.js using middleware.",
    pages: [
      {
        title: "Introduction to Authentication",
        content: `
# Authentication

Authentication middleware verifies user credentials before granting access.

\`\`\`javascript
const express = require('express');
const app = express();

// Simple authentication middleware
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === 'Bearer my-secret-token') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/protected', auth, (req, res) => {
  res.send('Welcome to the protected route!');
});

app.listen(3000);
\`\`\`

Key concepts:
- **Middleware**: Checks credentials
- **Authorization Header**: Common for token-based auth
- **401 Status**: Indicates unauthorized access
        `,
      },
    ],
    quiz: [
      {
        question: "What HTTP status code indicates unauthorized access?",
        options: ["200", "401", "404", "500"],
        answer: 1,
      },
    ],
  },
  databaseIntegration: {
    title: "Express Database Integration",
    description:
      "Connect Express.js to a database like MongoDB for data persistence.",
    pages: [
      {
        title: "Introduction to Database Integration",
        content: `
# Database Integration

Connect Express to MongoDB using Mongoose for data persistence.

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });

// Define a schema
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

// Route to create a user
app.post('/users', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
});

app.listen(3000);
\`\`\`

Key concepts:
- **Mongoose**: ORM for MongoDB
- **Schema**: Defines data structure
- **Async/Await**: Handles database operations
        `,
      },
    ],
    quiz: [
      {
        question: "What is Mongoose used for in Express?",
        options: [
          "Serving static files",
          "Handling authentication",
          "Interfacing with MongoDB",
          "Rendering templates",
        ],
        answer: 2,
      },
    ],
  },
  restfulApis: {
    title: "Express RESTful APIs",
    description:
      "Build RESTful APIs in Express.js for structured, scalable applications.",
    pages: [
      {
        title: "Introduction to RESTful APIs",
        content: `
# RESTful APIs

RESTful APIs use HTTP methods and endpoints to manage resources.

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

const items = [];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/items', (req, res) => {
  const item = { id: items.length + 1, name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

// GET a specific item
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

app.listen(3000);
\`\`\`

Key concepts:
- **CRUD**: Create (POST), Read (GET), Update (PUT), Delete (DELETE)
- **Status Codes**: 200 (OK), 201 (Created), 404 (Not Found)
- **Resource-Based**: Endpoints represent resources
        `,
      },
    ],
    quiz: [
      {
        question: "Which HTTP method creates a new resource in a RESTful API?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 1,
      },
    ],
  },
  websockets: {
    title: "Express WebSockets",
    description:
      "Implement real-time communication in Express.js using WebSockets.",
    pages: [
      {
        title: "Introduction to WebSockets",
        content: `
# WebSockets

WebSockets enable real-time, bidirectional communication using the ws library.

\`\`\`javascript
const express = require('express');
const { Server } = require('ws');
const app = express();

app.use(express.static('public'));

const server = app.listen(3000);
const wss = new Server({ server });

// WebSocket connection
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('Received:', message.toString());
    ws.send('Echo: ' + message);
  });
});
\`\`\`

**public/index.html**:
\`\`\`html
<!DOCTYPE html>
<html>
<body>
  <script>
    const ws = new WebSocket('ws://localhost:3000');
    ws.onmessage = event => console.log(event.data);
    ws.onopen = () => ws.send('Hello, WebSocket!');
  </script>
</body>
</html>
\`\`\`

Key concepts:
- **ws Library**: Handles WebSocket connections
- **Real-Time**: Bidirectional communication
- **Events**: Handle connection, message, and close events
        `,
      },
    ],
    quiz: [
      {
        question: "What does a WebSocket enable in an Express app?",
        options: [
          "Static file serving",
          "Real-time communication",
          "Database queries",
          "Template rendering",
        ],
        answer: 1,
      },
    ],
  },
  requestHandling: {
    title: "Express Request Handling",
    description: "Understand how to process incoming requests in Express.js.",
    pages: [
      {
        title: "Introduction to Request Handling",
        content: `
# Request Handling

Express.js provides tools to handle incoming HTTP requests efficiently.

\`\`\`javascript
const express = require('express');
const app = express();

// Handling a basic POST request
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

Key concepts:
- **req Object**: Contains request data (headers, body, etc.)
- **res Object**: Used to send responses
- **HTTP Methods**: Define the type of request (GET, POST, etc.)
        `,
      },
      {
        title: "Accessing Request Data",
        content: `
# Accessing Request Data

Extract data from requests using req.body, req.params, and req.query.

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// Accessing body, params, and query
app.post('/data/:type', (req, res) => {
  const { type } = req.params;
  const { name } = req.body;
  const { filter } = req.query;
  res.json({ type, name, filter });
});

app.listen(3000);
\`\`\`

Tips:
- **req.body**: Requires middleware like express.json()
- **req.params**: For URL parameters
- **req.query**: For query string values
        `,
      },
    ],
    quiz: [
      {
        question: "Which object contains the request body in Express?",
        options: ["req.params", "req.body", "req.query", "res.body"],
        answer: 1,
      },
      {
        question: "What middleware is needed to parse JSON request bodies?",
        options: ["express.static()", "express.json()", "cors()", "morgan()"],
        answer: 1,
      },
    ],
  },
  responseFormatting: {
    title: "Express Response Formatting",
    description: "Learn to format and send responses in Express.js.",
    pages: [
      {
        title: "Introduction to Response Formatting",
        content: `
# Response Formatting

Express allows sending various response types like JSON, HTML, or files.

\`\`\`javascript
const express = require('express');
const app = express();

// Sending different response types
app.get('/response', (req, res) => {
  res.json({ message: 'JSON response' });
});

app.get('/html', (req, res) => {
  res.send('<h1>HTML response</h1>');
});

app.listen(3000);
\`\`\`

Key methods:
- **res.json()**: Sends JSON data
- **res.send()**: Sends text or HTML
- **res.status()**: Sets HTTP status code
        `,
      },
      {
        title: "Custom Status Codes and Headers",
        content: `
# Custom Status Codes and Headers

Customize responses with status codes and headers.

\`\`\`javascript
const express = require('express');
const app = express();

// Custom status and headers
app.get('/custom', (req, res) => {
  res.status(201)
     .set('X-Custom-Header', 'CustomValue')
     .json({ message: 'Created' });
});

app.listen(3000);
\`\`\`

Notes:
- **Status Codes**: 200 (OK), 201 (Created), 404 (Not Found), etc.
- **Headers**: Set via res.set() or res.header()
- **Chaining**: Methods like res.status() and res.json() can be chained
        `,
      },
    ],
    quiz: [
      {
        question: "Which method sends a JSON response in Express?",
        options: ["res.send()", "res.json()", "res.render()", "res.redirect()"],
        answer: 1,
      },
      {
        question: "What does res.status(201) indicate?",
        options: ["OK", "Created", "Not Found", "Unauthorized"],
        answer: 1,
      },
    ],
  },
  sessionManagement: {
    title: "Express Session Management",
    description: "Implement session handling in Express.js for user state.",
    pages: [
      {
        title: "Introduction to Session Management",
        content: `
# Session Management

Sessions maintain user state across requests using cookies.

\`\`\`javascript
const express = require('express');
const session = require('express-session');
const app = express();

// Configure session middleware
app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false
}));

// Using session
app.get('/visit', (req, res) => {
  req.session.visits = (req.session.visits || 0) + 1;
  res.send(\`Visits: \${req.session.visits}\`);
});

app.listen(3000);
\`\`\`

Key concepts:
- **express-session**: Middleware for session management
- **req.session**: Stores session data
- **Secret**: Signs the session cookie
        `,
      },
      {
        title: "Session Configuration",
        content: `
# Session Configuration

Customize session behavior with options.

\`\`\`javascript
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));

app.get('/user', (req, res) => {
  req.session.user = req.session.user || 'Guest';
  res.send(\`User: \${req.session.user}\`);
});

app.listen(3000);
\`\`\`

Options:
- **resave**: Forces session save even if unmodified
- **saveUninitialized**: Saves uninitialized sessions
- **cookie.maxAge**: Sets session duration
        `,
      },
    ],
    quiz: [
      {
        question: "Which middleware is used for sessions in Express?",
        options: ["express.json()", "express-session", "cors()", "morgan()"],
        answer: 1,
      },
      {
        question: "What does req.session store?",
        options: [
          "Request headers",
          "Session data",
          "Query parameters",
          "Response data",
        ],
        answer: 1,
      },
    ],
  },
  fileUploads: {
    title: "Express File Uploads",
    description: "Handle file uploads in Express.js using middleware.",
    pages: [
      {
        title: "Introduction to File Uploads",
        content: `
# File Uploads

Use middleware like multer to handle file uploads in Express.

\`\`\`javascript
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

// Single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send(\`File uploaded: \${req.file.filename}\`);
});

app.listen(3000);
\`\`\`

**index.html**:
\`\`\`html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
  <button type="submit">Upload</button>
</form>
\`\`\`

Key concepts:
- **multer**: Middleware for file uploads
- **req.file**: Contains uploaded file info
- **enctype**: Must be multipart/form-data
        `,
      },
      {
        title: "Multiple File Uploads",
        content: `
# Multiple File Uploads

Handle multiple files using multer's array or fields methods.

\`\`\`javascript
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

// Multiple files upload
app.post('/uploads', upload.array('files', 5), (req, res) => {
  const filenames = req.files.map(file => file.filename);
  res.json({ uploaded: filenames });
});

app.listen(3000);
\`\`\`

Notes:
- **upload.array()**: Handles multiple files for a single field
- **Max Count**: Limits number of files
- **req.files**: Array of uploaded files
        `,
      },
    ],
    quiz: [
      {
        question: "Which middleware handles file uploads in Express?",
        options: ["express.json()", "multer", "cors()", "express-session"],
        answer: 1,
      },
      {
        question:
          "What is the purpose of the enctype='multipart/form-data' in a file upload form?",
        options: [
          "Parses JSON data",
          "Handles file uploads",
          "Enables CORS",
          "Sets session data",
        ],
        answer: 1,
      },
    ],
  },
  securityPractices: {
    title: "Express Security Practices",
    description:
      "Implement security best practices in Express.js applications.",
    pages: [
      {
        title: "Introduction to Security Practices",
        content: `
# Security Practices

Secure Express apps against common vulnerabilities.

\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet for security headers
app.use(helmet());

// Basic route
app.get('/', (req, res) => {
  res.send('Secure app');
});

app.listen(3000);
\`\`\`

Key concepts:
- **helmet**: Sets secure HTTP headers
- **Input Validation**: Prevent injection attacks
- **HTTPS**: Use TLS for secure communication
        `,
      },
      {
        title: "Preventing Common Attacks",
        content: `
# Preventing Common Attacks

Protect against XSS, CSRF, and SQL injection.

\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.json());

// Input validation
app.post('/user', (req, res) => {
  const { username } = req.body;
  if (typeof username !== 'string' || username.length > 50) {
    return res.status(400).send('Invalid username');
  }
  res.json({ username });
});

app.listen(3000);
\`\`\`

Techniques:
- **Sanitization**: Clean user input
- **CSRF Tokens**: Prevent cross-site request forgery
- **Content Security Policy**: Mitigate XSS
        `,
      },
    ],
    quiz: [
      {
        question: "Which middleware adds secure HTTP headers in Express?",
        options: ["multer", "helmet", "express-session", "cors"],
        answer: 1,
      },
      {
        question: "What does a Content Security Policy help prevent?",
        options: ["SQL injection", "XSS", "CSRF", "DDoS"],
        answer: 1,
      },
    ],
  },
};
