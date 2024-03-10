let menuToggle = false;
function toggleMenu() {
  if (menuToggle) {
    menuToggle = false;
    return document.body.classList.remove("menu__open");
  }
  menuToggle = true;
  document.body.classList += " menu__open";
}

// From Here

function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");
  const books = getBooks();
  if (filter === "low__to--high") {
    books.sort((a, b) => a.originalPrice - b.originalPrice);
  } else if (filter === "high__to--low") {
    books.sort((a, b) => b.originalPrice - a.originalPrice);
  } else if (filter === "ratings") {
    books.sort((a, b) => b.rating - a.rating);
  }

  // What The Page Will Be By Default
  let booksHtml = books
    .map((book) => {
      return `<div class="book">
      <figure class="book__image--wrapper">
        <img class="book__image" src="${book.url}" alt="" />
      </figure>
      <h1 class="book__title">${book.title}</h1>
      <div class="book__rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <span class="book__price">$${book.originalPrice.toFixed(2)}</span>
    </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
}

function filteredBooks(event) {
  console.log(event);
  renderBooks(event.target.value);
}

function ogValue(insertedValue) {
  let originalValue = 5;
  if (insertedValue) {
    originalValue = insertedValue
  }
  console.log(originalValue);
}

function sendValue() {
  ogValue(10);
}

sendValue();

renderBooks();

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "./Assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "./Assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "./Assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "./Assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "./Assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "./Assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "./Assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "./Assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "./Assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "./Assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "Mastery",
      url: "./Assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
