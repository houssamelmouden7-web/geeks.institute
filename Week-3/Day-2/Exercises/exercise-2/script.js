const form = document.querySelector("form");
console.log("Form:", form);

const fnameById = document.getElementById("fname");
const lnameById = document.getElementById("lname");
console.log("Inputs by ID:", fnameById, lnameById);

const fnameByName = document.querySelector('input[name="firstname"]');
const lnameByName = document.querySelector('input[name="lastname"]');
console.log("Inputs by Name:", fnameByName, lnameByName);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = fnameById.value.trim();
  const lastName = lnameById.value.trim();

  if (firstName === "" || lastName === "") {
    alert("3afak 3emmer les deux champs!");
    return;
  }

  const ul = document.querySelector(".usersAnswer");

  const liFirst = document.createElement("li");
  liFirst.textContent = firstName;

  const liLast = document.createElement("li");
  liLast.textContent = lastName;

  ul.appendChild(liFirst);
  ul.appendChild(liLast);

  fnameById.value = "";
  lnameById.value = "";
});