const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const rank = index + 1;
  const suffix = rank <= 3 ? ordinal[rank] : ordinal[0];
  console.log(`${rank}${suffix} choice is ${color}.`);
});