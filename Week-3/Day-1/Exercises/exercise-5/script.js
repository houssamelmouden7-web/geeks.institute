const containerDiv = document.getElementById("container");
console.log(containerDiv);

const firstUl = document.querySelectorAll(".list")[0];
firstUl.children[1].textContent = "Richard";

const secondUl = document.querySelectorAll(".list")[1];
secondUl.children[1].remove();

const allUls = document.querySelectorAll(".list");
allUls.forEach(ul => {
  ul.firstElementChild.textContent = "Houssam";
});

allUls.forEach(ul => {
  ul.classList.add("student_list");
});

firstUl.classList.add("university", "attendance");

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

for (let li of secondUl.children) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

for (let li of firstUl.children) {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid red";
  }
}

document.body.style.fontSize = "18px";

if (containerDiv.style.backgroundColor === "lightblue") {
  const users = `${firstUl.children[0].textContent} w ${firstUl.children[1].textContent}`;
  alert(`Hello ${users}`);
}