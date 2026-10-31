const planets = [
  { name: "Mercury", color: "#a6a6a6", moons: 0 },
  { name: "Venus", color: "#e3bb76", moons: 0 },
  { name: "Earth", color: "#2f6a9e", moons: 1 },
  { name: "Mars", color: "#993d00", moons: 2 },
  { name: "Jupiter", color: "#b07f35", moons: 4 },
  { name: "Saturn", color: "#e2bf7d", moons: 3 },
  { name: "Uranus", color: "#4b70dd", moons: 2 },
  { name: "Neptune", color: "#274687", moons: 1 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
  const planetDiv = document.createElement("div");

  planetDiv.classList.add("planet");

  planetDiv.style.backgroundColor = planet.color;

  planetDiv.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement("div");

    moonDiv.classList.add("moon");

    moonDiv.style.top = "-15px";
    moonDiv.style.left = `${i * 30}px`;

    planetDiv.appendChild(moonDiv);
  }

  section.appendChild(planetDiv);
});