const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: "First Blog Post", content: "Welcome to my blog!" },
  { id: 2, title: "Learning Express", content: "Express makes Node.js easy." },
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Blog post not found" });
  }
  res.status(200).json(post);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  posts[index] = {
    id: posts[index].id,
    title: req.body.title || posts[index].title,
    content: req.body.content || posts[index].content,
  };
  res.status(200).json(posts[index]);
});

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  posts.splice(index, 1);
  res.status(200).json({ message: "Blog post deleted successfully" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Blog API server running on http://localhost:${PORT}`);
});