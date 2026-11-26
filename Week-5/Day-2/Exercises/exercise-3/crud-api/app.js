const express = require("express");
const { fetchPosts } = require("./data/dataService.js");

const app = express();
const PORT = 5000;

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data has been successfully retrieved and sent as a response.");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts from JSONPlaceholder" });
  }
});

app.listen(PORT, () => {
  console.log(`CRUD API with Axios running on http://localhost:${PORT}`);
});