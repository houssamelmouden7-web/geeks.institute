const products = require("./products.js");

function findProduct(productName) {
  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log("Product Found:", product);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

findProduct("Laptop");
findProduct("Running Shoes");
findProduct("Tablet");