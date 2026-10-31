const form = document.getElementById("libform");
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");

const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

let savedWords = null;

function generateRandomStory(words) {
  const stories = [
    `One day, ${words.person} took a very ${words.adjective}${words.noun} and decided to ${words.verb} all the way to${words.place}!`,
    
    `In the middle of ${words.place}, everyone saw ${words.person} trying to${words.verb} with a huge ${words.adjective}${words.noun}. It was hilarious!`,
    
    `Nobody believed that ${words.person} could ${words.verb} inside${words.place}, especially while holding a ${words.adjective}${words.noun}!`
  ];

  const randomIndex = Math.floor(Math.random() * stories.length);
  return stories[randomIndex];
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = nounInput.value.trim();
  const adjective = adjectiveInput.value.trim();
  const person = personInput.value.trim();
  const verb = verbInput.value.trim();
  const place = placeInput.value.trim();

  // Khatwa 3: Verification (Wach kayna chi khanya khawya?)
  if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
    alert("3afak 3emmer ga3 les champs b l-kelmat 9bel ma t-bda!");
    console.error("Validation Error: Kaynin des inputs khawyin.");
    return; 
  }

  savedWords = {
    noun: noun,
    adjective: adjective,
    person: person,
    verb: verb,
    place: place
  };

  const generatedStory = generateRandomStory(savedWords);
  storySpan.textContent = generatedStory;

  console.log("Qissa t-generat b naja7:", generatedStory);
});

shuffleBtn.addEventListener("click", function () {
  if (!savedWords) {
    alert("Kteb l-kelmat w wrek 3la 'Lib it!' howa l-lowel!");
    return;
  }

  const newStory = generateRandomStory(savedWords);
  storySpan.textContent = newStory;

  console.log("Story Shuffled:", newStory);
});