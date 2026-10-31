// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
const state = {
  currentCategory: "All",
  searchQuery: "",
  sortBy: "default"
};

// ==========================================
// 2. DOM ELEMENT REFERENCES
// ==========================================
const cardsGrid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-select");

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
// 3. RENDERING FUNCTIONS
// ==========================================
function renderCards(items) {
  // Clear previous cards
  cardsGrid.innerHTML = "";

  // Show or hide empty state depending on array length
  if (items.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  // Generate and append cards
  items.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("data-id", item.id);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="card-img" 
          loading="lazy"
        >
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
          <span class="view-btn">View Details &rarr;</span>
        </div>
      </div>
    `;

    // Click card to open detail modal
    card.addEventListener("click", () => openModal(item));

    cardsGrid.appendChild(card);
  });
}

// ==========================================
// 4. FILTERING & SORTING LOGIC
// ==========================================
function applyFiltersAndSort() {
  let result = [...catalogItems];

  // 1. Filter by Category
  if (state.currentCategory !== "All") {
    result = result.filter(item => item.category === state.currentCategory);
  }

  // 2. Filter by Live Search (Title or Description)
  if (state.searchQuery.trim() !== "") {
    const query = state.searchQuery.toLowerCase();
    result = result.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.shortDescription.toLowerCase().includes(query)
    );
  }

  // 3. Apply Sorting
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
// 5. MODAL CONTROLLERS
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

// ==========================================
// 6. EVENT LISTENERS
// ==========================================
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
  if (e.target === modalContainer) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalContainer.classList.contains("hidden")) {
    closeModal();
  }
});

// ==========================================
// 7. INITIALIZE APPLICATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  applyFiltersAndSort();
});