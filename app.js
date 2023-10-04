// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import route handlers
const blogStatsRoute = require('./routes/blogStatsRoute');
const blogSearchRoute = require('./routes/blogSearchRoute');

// Use route handlers
app.use('/api/blog-stats', blogStatsRoute);
app.use('/api/blog-search', blogSearchRoute);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
