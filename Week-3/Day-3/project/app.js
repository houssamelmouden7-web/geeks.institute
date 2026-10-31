// ==========================================
// 1. LUCIDE SVG ICONS DEFINITIONS
// ==========================================
const ICONS = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`,
  
  // Clean Outline Heart without any strike-through line
  // Uses currentColor: automatically white in dark mode, black in light mode!
  heartOutline: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  
  // Red Filled Heart when favorited
  heartFilled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ff2a44" stroke="#ff2a44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-filled"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
};

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
const customItems = JSON.parse(localStorage.getItem("fraja_custom_items")) || [];
let allCatalog = [...catalogItems, ...customItems];

const state = {
  currentCategory: "All",
  searchQuery: "",
  sortBy: "default",
  favorites: JSON.parse(localStorage.getItem("fraja_favorites")) || [],
  theme: localStorage.getItem("fraja_theme") || "dark",
  sliderIndex: 0,
  sliderInterval: null,
  featuredList: []
};

// ==========================================
// 3. DOM REFERENCES
// ==========================================
const brandHomeBtn = document.getElementById("brand-home-btn");
const cardsGrid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-select");
const favCounter = document.getElementById("fav-counter");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const btnHeartIcon = document.querySelector(".btn-heart-icon");
const catalogCountLabel = document.getElementById("catalog-count-label");

// Mini Stats
const statTotal = document.getElementById("stat-total");
const statAnime = document.getElementById("stat-anime");
const statSeries = document.getElementById("stat-series");
const statMovies = document.getElementById("stat-movies");

// Slider & Up Next Elements
const sliderImg = document.getElementById("slider-img");
const sliderCategory = document.getElementById("slider-category");
const sliderRating = document.getElementById("slider-rating");
const sliderTitle = document.getElementById("slider-title");
const sliderDesc = document.getElementById("slider-desc");
const sliderViewBtn = document.getElementById("slider-view-btn");
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");
const sliderDotsContainer = document.getElementById("slider-dots");
const upNextList = document.getElementById("up-next-list");

// Add to Vault Form
const vaultForm = document.getElementById("add-vault-form");
const vaultMsg = document.getElementById("vault-msg");

// Modal Elements
const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalRating = document.getElementById("modal-rating");
const modalYear = document.getElementById("modal-year");
const modalTitle = document.getElementById("modal-title");
const modalDuration = document.getElementById("modal-duration");
const modalStory = document.getElementById("modal-story");

// ==========================================
// 4. THEME TOGGLE
// ==========================================
function applyTheme() {
  if (state.theme === "light") {
    document.body.classList.add("light-theme");
    themeToggleBtn.innerHTML = ICONS.sun;
  } else {
    document.body.classList.remove("light-theme");
    themeToggleBtn.innerHTML = ICONS.moon;
  }
}

themeToggleBtn.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("fraja_theme", state.theme);
  applyTheme();
});

// ==========================================
// 5. BRAND LOGO -> CLICK TO HOME / RESET
// ==========================================
brandHomeBtn.addEventListener("click", (e) => {
  // Scroll smooth to top / hero
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Reset Category to All
  state.currentCategory = "All";
  state.searchQuery = "";
  searchInput.value = "";
  filterButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === "All");
  });
  applyFiltersAndSort();
});

// ==========================================
// 6. MINI STATS UPDATER
// ==========================================
function updateMiniStats() {
  const total = allCatalog.length;
  const animeCount = allCatalog.filter(i => i.category === "Anime").length;
  const seriesCount = allCatalog.filter(i => i.category === "Series").length;
  const moviesCount = allCatalog.filter(i => i.category === "Movies").length;

  if (statTotal) statTotal.textContent = total;
  if (statAnime) statAnime.textContent = animeCount;
  if (statSeries) statSeries.textContent = seriesCount;
  if (statMovies) statMovies.textContent = moviesCount;
}

// ==========================================
// 7. HERO SLIDER & RANDOM UP NEXT
// ==========================================
function initHeroSection() {
  const shuffled = [...allCatalog].sort(() => 0.5 - Math.random());
  state.featuredList = shuffled.slice(0, 5);
  const upNextItems = shuffled.slice(5, 8);

  sliderDotsContainer.innerHTML = "";
  state.featuredList.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("slider-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(i);
      resetSliderTimer();
    });
    sliderDotsContainer.appendChild(dot);
  });

  updateSlideDisplay();
  renderUpNext(upNextItems);
  startSliderAutoPlay();
}

function updateSlideDisplay() {
  const current = state.featuredList[state.sliderIndex];
  if (!current) return;

  sliderImg.src = current.image;
  sliderImg.alt = current.title;
  sliderCategory.textContent = current.category;
  sliderCategory.setAttribute("data-category", current.category);
  sliderRating.textContent = current.metric;
  sliderTitle.textContent = current.title;
  sliderDesc.textContent = current.shortDescription;

  sliderViewBtn.onclick = () => openModal(current);

  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === state.sliderIndex);
  });
}

function renderUpNext(items) {
  upNextList.innerHTML = "";
  items.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("up-next-item");
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="up-next-thumb" loading="lazy">
      <div class="up-next-info">
        <span class="up-next-item-badge">⭐ ${item.ratingScore}/10</span>
        <h4 class="up-next-item-title">${item.title}</h4>
        <p class="up-next-item-desc">${item.shortDescription}</p>
      </div>
    `;
    itemEl.addEventListener("click", () => openModal(item));
    upNextList.appendChild(itemEl);
  });
}

function nextSlide() {
  state.sliderIndex = (state.sliderIndex + 1) % state.featuredList.length;
  updateSlideDisplay();
}

function prevSlide() {
  state.sliderIndex = (state.sliderIndex - 1 + state.featuredList.length) % state.featuredList.length;
  updateSlideDisplay();
}

function goToSlide(index) {
  state.sliderIndex = index;
  updateSlideDisplay();
}

function startSliderAutoPlay() {
  state.sliderInterval = setInterval(nextSlide, 5000);
}

function resetSliderTimer() {
  clearInterval(state.sliderInterval);
  startSliderAutoPlay();
}

sliderNext.addEventListener("click", () => {
  nextSlide();
  resetSliderTimer();
});

sliderPrev.addEventListener("click", () => {
  prevSlide();
  resetSliderTimer();
});

// ==========================================
// 8. FAVORITES SYSTEM
// ==========================================
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

// ==========================================
// 9. CARDS RENDERING
// ==========================================
function renderCards(items) {
  cardsGrid.innerHTML = "";

  if (items.length === 0) {
    emptyState.classList.remove("hidden");
    catalogCountLabel.textContent = `0 results found`;
    return;
  } else {
    emptyState.classList.add("hidden");
    catalogCountLabel.textContent = `Showing ${items.length} titles`;
  }

  items.forEach(item => {
    const isFav = state.favorites.includes(item.id);
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("data-id", item.id);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'">
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
          <button class="fav-btn ${isFav ? 'is-favorite' : ''}" title="Toggle Favorite" aria-label="Favorite">
            ${isFav ? ICONS.heartFilled : ICONS.heartOutline}
          </button>
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
  let result = [...allCatalog];

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

// ==========================================
// 10. ADD TO VAULT LOGIC
// ==========================================
vaultForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("vault-title-input").value.trim();
  const category = document.getElementById("vault-category-select").value;
  const releaseYear = parseInt(document.getElementById("vault-year-input").value, 10);
  const ratingScore = parseFloat(document.getElementById("vault-rating-input").value);
  const duration = document.getElementById("vault-duration-input").value.trim();
  let image = document.getElementById("vault-image-input").value.trim();
  const description = document.getElementById("vault-desc-input").value.trim();

  if (!image) {
    image = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";
  }

  const newItem = {
    id: Date.now(),
    title: title,
    category: category,
    image: image,
    metric: `⭐ ${ratingScore}/10`,
    ratingScore: ratingScore,
    shortDescription: description,
    fullDetails: {
      durationOrSeasons: duration,
      releaseYear: releaseYear,
      story: description
    }
  };

  customItems.push(newItem);
  localStorage.setItem("fraja_custom_items", JSON.stringify(customItems));
  allCatalog.push(newItem);

  vaultMsg.textContent = `"${title}" has been added to the vault!`;
  vaultMsg.classList.remove("hidden");
  vaultForm.reset();

  setTimeout(() => {
    vaultMsg.classList.add("hidden");
  }, 4000);

  updateMiniStats();
  applyFiltersAndSort();
});

// ==========================================
// 11. MODAL & LISTENERS
// ==========================================
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

// ==========================================
// 12. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  if (btnHeartIcon) btnHeartIcon.innerHTML = ICONS.heartOutline;
  applyTheme();
  updateFavCounter();
  initHeroSection();
  updateMiniStats();
  applyFiltersAndSort();
});