let age = [20, 5, 12, 43, 98, 55];

let sum = 0;

for (let i = 0; i < age.length; i++) {
  sum = sum + age[i];
}

console.log("The sum is:", sum); 


let highest = age[0];

for (let i = 1; i < age.length; i++) {
  if (age[i] > highest) {
    highest = age[i];
  }
}

console.log("The highest age is:", highest); 