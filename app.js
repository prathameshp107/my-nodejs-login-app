const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up body parser
app.use(express.urlencoded({ extended: true }));

// Require and use the route.js for routing
const route = require('./routes/route');

// Middleware to allow access to specific routes without login
app.use((req, res, next) => {
    const allowedRoutes = ['/login', '/register']; // Add any other allowed routes
    if (allowedRoutes.includes(req.path)) {
      next(); // Allow access to allowed routes
    } else {
      res.redirect('/login'); // Redirect to login page for other routes
    }
  });

app.use('/', route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
