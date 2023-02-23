const bookmarkEmpty = document.querySelector('[data-js="bookmarkButtonEmpty"]');



function bookmarkButtonClick(event) {
    const bookmarkEmpty = event.target;
    bookmarkEmpty.classList.toggle("bookmarkBtn--active");
  }
  
  bookmarkEmpty.addEventListener("click", bookmarkButtonClick);