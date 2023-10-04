// routes/blogSearchRoute.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Middleware to implement search functionality
router.get('/', async (req, res) => {
  try {
    // Get the query parameter from the request
    const query = req.query.query;

    // Make the provided curl request to fetch blog data
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
      }
    });

    // Get the blog data from the response
    const blogData = response.data.blogs;

    // Implement search functionality that filters blogs based on the provided query string
    const filteredBlogs = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );

    // Modify the response data to format keys with spaces
    const formattedData = filteredBlogs.map((blog) => ({
      'Blog ID': blog.id,
      'Image URL': blog.image_url,
      'Blog Title': blog.title,
    }));

    // Respond with the modified response data as beautified JSON
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(formattedData, null, 2));
  } catch (error) {
    // Handle errors, e.g., network issues or invalid API response
    console.error('Error fetching or searching blog data:', error);
    res.status(500).json({ error: 'Failed to fetch or search blog data' });
  }
});

module.exports = router;
