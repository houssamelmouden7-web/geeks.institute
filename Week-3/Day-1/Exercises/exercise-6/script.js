const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const navUl = navDiv.querySelector("ul");

const newLi = document.createElement("li");

const newText = document.createTextNode("Logout");

newLi.appendChild(newText);

navUl.appendChild(newLi);

const firstElement = navUl.firstElementChild;
const lastElement = navUl.lastElementChild;

console.log("Awwal link:", firstElement.textContent.trim()); 
console.log("Akhir link:", lastElement.textContent.trim());  