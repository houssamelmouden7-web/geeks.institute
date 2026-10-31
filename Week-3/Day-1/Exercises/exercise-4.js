function hotelCost(nights) {
  while (nights === undefined || isNaN(nights) || nights <= 0) {
    nights = Number(prompt("Ch7al mn lila baghi t-glss f l-hotel?"));
  }
  return nights * 140;
}

function planeRideCost(destination) {
  while (!destination || typeof destination !== "string" || !isNaN(destination)) {
    destination = prompt("Fin baghi t-ssafer (London, Paris...)?");
  }
  
  destination = destination.trim().toLowerCase();
  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost(days) {
  while (days === undefined || isNaN(days) || days <= 0) {
    days = Number(prompt("Ch7al mn nhar baghi t-kri l-lotobil?"));
  }
  
  let cost = days * 40;
  if (days > 10) {
    cost = cost * 0.95; 
  }
  return cost;
}

function totalVacationCost() {
  const hCost = hotelCost();
  const pCost = planeRideCost();
  const cCost = rentalCarCost();

  const total = hCost + pCost + cCost;

  console.log(`The car cost: $${cCost}, the hotel cost: $${hCost}, the plane tickets cost: $${pCost}.`);
  console.log(`L-Majmou3 l-kamel: $${total}`);
  return total;
}
