const state = {
  currentCategory: "All",
  searchQuery: "",
  sortBy: "default",
  favorites: JSON.parse(localStorage.getItem("fraja_favorites")) || [],
  theme: localStorage.getItem("fraja_theme") || "dark"
};

const cardsGrid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-select");
const favCounter = document.getElementById("fav-counter");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalRating = document.getElementById("modal-rating");
const modalYear = document.getElementById("modal-year");
const modalTitle = document.getElementById("modal-title");
const modalDuration = document.getElementById("modal-duration");
const modalStory = document.getElementById("modal-story");

function applyTheme() {
  if (state.theme === "light") {
    document.body.classList.add("light-theme");
    themeToggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("light-theme");
    themeToggleBtn.textContent = "🌙";
  }
}

themeToggleBtn.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("fraja_theme", state.theme);
  applyTheme();
});

function toggleFavorite(id, e) {
  e.stopPropagation(); 
  const index = state.favorites.indexOf(id);
  if (index > -1) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(id);
  }

  localStorage.setItem("fraja_favorites", JSON.stringify(state.favorites));
  updateFavCounter();
  applyFiltersAndSort();
}

function updateFavCounter() {
  if (favCounter) {
    favCounter.textContent = state.favorites.length;
  }
}

function renderCards(items) {
  cardsGrid.innerHTML = "";

  if (items.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  items.forEach(item => {
    const isFav = state.favorites.includes(item.id);
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("data-id", item.id);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
        <div class="card-badges-overlay">
          <span class="badge badge-category" data-category="${item.category}">${item.category}</span>
          <span class="badge badge-rating">${item.metric}</span>
        </div>
      </div>

      <div class="card-content">
        <h2 class="card-title">${item.title}</h2>
        <p class="card-description">${item.shortDescription}</p>
        
        <div class="card-footer">
          <span class="card-year">${item.fullDetails.releaseYear}</span>
          <button class="fav-btn" title="Toggle Favorite" aria-label="Favorite">${isFav ? "❤️" : "🤍"}</button>
          <span class="view-btn">Details &rarr;</span>
        </div>
      </div>
    `;

    const favBtn = card.querySelector(".fav-btn");
    favBtn.addEventListener("click", (e) => toggleFavorite(item.id, e));

    card.addEventListener("click", () => openModal(item));

    cardsGrid.appendChild(card);
  });
}

function applyFiltersAndSort() {
  let result = [...catalogItems];

  if (state.currentCategory === "Favorites") {
    result = result.filter(item => state.favorites.includes(item.id));
  } else if (state.currentCategory !== "All") {
    result = result.filter(item => item.category === state.currentCategory);
  }

  if (state.searchQuery.trim() !== "") {
    const query = state.searchQuery.toLowerCase();
    result = result.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.shortDescription.toLowerCase().includes(query)
    );
  }

  switch (state.sortBy) {
    case "rating-desc":
      result.sort((a, b) => b.ratingScore - a.ratingScore);
      break;
    case "title-asc":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      result.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  renderCards(result);
}

function openModal(item) {
  modalImg.src = item.image;
  modalImg.alt = item.title;
  modalCategory.textContent = item.category;
  modalCategory.setAttribute("data-category", item.category);
  modalRating.textContent = item.metric;
  modalYear.textContent = item.fullDetails.releaseYear;
  modalTitle.textContent = item.title;
  modalDuration.textContent = item.fullDetails.durationOrSeasons;
  modalStory.textContent = item.fullDetails.story;

  modalContainer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalContainer.classList.add("hidden");
  document.body.style.overflow = "auto";
}

searchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  applyFiltersAndSort();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    state.currentCategory = button.getAttribute("data-category");
    applyFiltersAndSort();
  });
});

sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  applyFiltersAndSort();
});

modalCloseBtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalContainer.classList.contains("hidden")) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  updateFavCounter();
  applyFiltersAndSort();
});