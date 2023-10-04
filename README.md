# Express.js Blog Analytics and Search Tool

This is a blog analytics and search tool built using Express.js and Lodash. The tool fetches data from a third-party blog API, performs analytics on the data, and allows users to search for blogs based on a query string.

## Features

1. **Data Retrieval**:
   - Use Express to create a route at `/api/blog-stats`.
   - When a GET request is made to this route, the middleware fetches blog data from the third-party API.

2. **Data Analysis**:
   - After fetching the data, Lodash is used to perform the following analytics:
     - Calculate the total number of blogs fetched.
     - Find the blog with the longest title.
     - Determine the number of blogs with titles containing the word "privacy."
     - Create an array of unique blog titles (no duplicates).

3. **Blog Search**:
   - Implement a route at `/api/blog-search`.
   - This route accepts a query parameter, e.g., `/api/blog-search?query=privacy`.
   - It provides a search functionality that filters blogs based on the provided query string (case-insensitive).

4. **Error Handling**:
   - The tool handles errors that may occur during data retrieval, analysis, or search.
   - If the third-party API is unavailable or returns an error, it responds with appropriate error messages.

5. **Caching Mechanism**:
   - The tool uses Lodash's `memoize` function to cache analytics results and search results for a certain period.
   - If the same requests are made within the caching period, it returns the cached results instead of re-fetching and re-analyzing the data.

6. **Formatting JSON Output**:
   - JSON output is formatted with human-readable keys.
   - Keys with multiple words are formatted with spaces between them for better readability.

## Usage

1. Clone this repository to your local machine.

2. Install dependencies:

3. Start the Express server:

4. Access the tool:
- Blog Analytics: [http://localhost:3000/api/blog-stats](http://localhost:3000/api/blog-stats)
- Blog Search: [http://localhost:3000/api/blog-search?query=your_query_here](http://localhost:3000/api/blog-search?query=your_query_here)

## Dependencies

- Express.js: Web application framework for creating the server and routes.
- Axios: HTTP client for making requests to the third-party API.
- Lodash: Utility library for data manipulation and analytics.

## Contributors

- Shivam Verma

