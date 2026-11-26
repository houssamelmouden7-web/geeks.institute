let currentEmoji = "";
let score = 0;
let streak = 0;

const emojiDisplay = document.getElementById("emoji-display");
const optionsContainer = document.getElementById("options-container");
const guessForm = document.getElementById("guess-form");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const leaderboardList = document.getElementById("leaderboard-list");
const saveScoreBtn = document.getElementById("save-score-btn");
const playerNameInput = document.getElementById("player-name");

async function loadQuestion() {
  const res = await fetch("/api/question");
  const data = await res.json();

  currentEmoji = data.emoji;
  emojiDisplay.textContent = currentEmoji;
  optionsContainer.innerHTML = "";

  data.options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "option-label";
    label.innerHTML = `
      <input type="radio" name="guess" value="${option}" required />
      <span>${option}</span>
    `;
    optionsContainer.appendChild(label);
  });
}

guessForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const selected = document.querySelector('input[name="guess"]:checked');
  if (!selected) return;

  const res = await fetch("/api/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      emoji: currentEmoji,
      guess: selected.value,
    }),
  });

  const result = await res.json();
  feedbackEl.textContent = result.message;

  if (result.correct) {
    score++;
    streak++;
    feedbackEl.style.color = "#4ade80";
  } else {
    streak = 0;
    feedbackEl.style.color = "#f87171";
  }

  scoreEl.textContent = score;
  streakEl.textContent = streak;

  setTimeout(() => {
    feedbackEl.textContent = "";
    loadQuestion();
  }, 1200);
});

async function loadLeaderboard() {
  const res = await fetch("/api/leaderboard");
  const topScores = await res.json();

  leaderboardList.innerHTML = "";
  topScores.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.player} — ${entry.score} pts`;
    leaderboardList.appendChild(li);
  });
}

saveScoreBtn.addEventListener("click", async () => {
  const player = playerNameInput.value.trim();
  if (!player) return alert("Kteb smiytk b3da!");

  const res = await fetch("/api/leaderboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player, score }),
  });

  if (res.ok) {
    playerNameInput.value = "";
    loadLeaderboard();
  }
});

loadQuestion();
loadLeaderboard();