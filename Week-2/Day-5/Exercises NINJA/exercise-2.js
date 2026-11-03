function calculateAverage(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum = sum + gradesList[i];
  }

  let avg = sum / gradesList.length;
  return avg;
}

function findAvg(gradesList) {
  let average = calculateAverage(gradesList);

  console.log("Your average is:", average.toFixed(2));

  if (average > 65) {
    console.log("Congratulations! You passed the course.");
  } else {
    console.log("Sorry, you failed and must repeat the course.");
  }
}

let studentGrades1 = [70, 85, 90, 68];
findAvg(studentGrades1);

let studentGrades2 = [50, 60, 55, 62];
findAvg(studentGrades2);