// routes/blogStatsRoute.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const _ = require('lodash');

// Middleware to fetch and analyze blog data using Axios and Lodash
router.get('/', async (req, res) => {
  try {
    // Make the provided curl request to fetch blog data
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
      }
    });

    // Get the blog data from the response
    const blogData = response.data.blogs;

    // Calculate the total number of blogs
    const totalBlogs = blogData.length;

    // Find the blog with the longest title
    const blogWithLongestTitle = _.maxBy(blogData, (blog) => blog.title.length);

    // Determine the number of blogs with titles containing the word "privacy"
    const blogsWithPrivacyTitle = _.filter(blogData, (blog) =>
      blog.title.toLowerCase().includes('privacy')
    );

    // Create an array of unique blog titles (no duplicates)
    const uniqueBlogTitles = _.uniq(_.map(blogData, 'title'));

    // Modify the response data to format keys with spaces
    const formattedData = {
      'Total Blogs': totalBlogs,
      'Blog with Longest Title': blogWithLongestTitle,
      'Number of Blogs with Privacy Title': blogsWithPrivacyTitle.length,
      'Unique Blog Titles': uniqueBlogTitles,
    };

    // Respond with the modified response data as beautified JSON
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(formattedData, null, 2));
  } catch (error) {
    // Handle errors, e.g., network issues or invalid API response
    console.error('Error fetching or analyzing blog data:', error);
    res.status(500).json({ error: 'Failed to fetch or analyze blog data' });
  }
});

module.exports = router;
