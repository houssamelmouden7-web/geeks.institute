const family = {
  father: "Karim",
  mother: "Fatima",
  son: "Houssam",
  city: "Mohammedia"
};

console.log("--- Keys ---");
for (let key in family) {
  console.log(key);
}

console.log("--- Values ---");
for (let key in family) {
  console.log(family[key]);
}
