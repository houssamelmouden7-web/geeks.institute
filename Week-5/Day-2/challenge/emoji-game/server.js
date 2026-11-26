const express = require("express");
const path = require("path");
const emojis = require("./data/emojis.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let leaderboard = [
  { player: "Ali", score: 8 },
  { player: "Sara", score: 6 },
  { player: "Youssef", score: 4 },
];

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];

  const distractors = emojis
    .filter((item) => item.name !== correctEmoji.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((item) => item.name);

  const options = [...distractors, correctEmoji.name].sort(
    () => 0.5 - Math.random()
  );

  return {
    emoji: correctEmoji.emoji,
    options,
  };
}

app.get("/api/question", (req, res) => {
  const question = getRandomQuestion();
  res.json(question);
});

app.post("/api/guess", (req, res) => {
  const { emoji, guess } = req.body;
  const found = emojis.find((item) => item.emoji === emoji);

  if (!found) {
    return res.status(400).json({ error: "Invalid emoji" });
  }

  const isCorrect = found.name.toLowerCase() === guess.toLowerCase();

  res.json({
    correct: isCorrect,
    correctAnswer: found.name,
    message: isCorrect
      ? `🎉 S7i7a! Hadak howa "${found.name}".`
      : `❌ Ghalet! L-jawaba s-s7i7a hiya "${found.name}".`,
  });
});

app.get("/api/leaderboard", (req, res) => {
  const topScores = [...leaderboard]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  res.json(topScores);
});

app.post("/api/leaderboard", (req, res) => {
  const { player, score } = req.body;
  if (!player || typeof score !== "number") {
    return res.status(400).json({ error: "Player name and score required" });
  }

  leaderboard.push({ player: player.trim(), score });
  const topScores = [...leaderboard]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  res.status(201).json(topScores);
});

app.listen(PORT, () => {
  console.log(`Emoji Game running at http://localhost:${PORT}`);
});