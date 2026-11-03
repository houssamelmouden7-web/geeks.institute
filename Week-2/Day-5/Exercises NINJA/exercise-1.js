let person1 = {
  fullName: "Ahmed Benali",
  mass: 80, 
  height: 1.75, 
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

let person2 = {
  fullName: "Sara Alami",
  mass: 65,
  height: 1.68,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  console.log(`${p1.fullName} BMI: ${bmi1.toFixed(2)}`);
  console.log(`${p2.fullName} BMI: ${bmi2.toFixed(2)}`);

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} 3ndou akbar BMI!`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} 3ndha akbar BMI!`);
  } else {
    console.log("3ndhom nefs lBMI!");
  }
}

compareBMI(person1, person2);