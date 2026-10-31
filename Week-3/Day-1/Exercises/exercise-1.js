function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  let numbersList = "";

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbersList += i + " ";
      sum += i; 
    }
  }

  console.log("Outcome : " + numbersList.trim());
  console.log("Sum : " + sum);
}

displayNumbersDivisible();   
displayNumbersDivisible(3); 
displayNumbersDivisible(45);