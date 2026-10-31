const allBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://picsum.photos/100/150?random=1",
    alreadyRead: true
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://picsum.photos/100/150?random=2",
    alreadyRead: false
  }
];

const bookSection = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");
  bookDiv.style.marginBottom = "20px";
  bookDiv.style.padding = "10px";
  bookDiv.style.border = "1px solid #ccc";

  const bookText = document.createElement("p");
  bookText.textContent = `${book.title} written by ${book.author}`;

  const bookImg = document.createElement("img");
  bookImg.setAttribute("src", book.image);
  bookImg.setAttribute("alt", book.title);
  bookImg.style.width = "100px"; 

  if (book.alreadyRead) {
    bookText.style.color = "red";
  }

  bookDiv.appendChild(bookText);
  bookDiv.appendChild(bookImg);
  bookSection.appendChild(bookDiv);
});