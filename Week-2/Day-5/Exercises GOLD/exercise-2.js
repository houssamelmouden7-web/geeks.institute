let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

let studentName = prompt("Chnou smitk?");

if (studentName) {
  let cleanName = studentName.toLowerCase();

  if (cleanName in guestList) {
    let country = guestList[cleanName];
    console.log(`Hi! I'm ${studentName}, and I'm from ${country}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }
}