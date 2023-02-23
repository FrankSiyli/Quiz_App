const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const bookmarkSVG = document.querySelector('[data-js="bookmarkSVG"]');


function bookmarkButtonClick(event) {
    const bookmark = event.target;
    bookmark.classList.toggle("bookmark--active");
    // card.classList.removeClass('is-flipped');
  };


  bookmarkButton.addEventListener("click", bookmarkButtonClick);

  const card = document.querySelector(".cardInner");

  card.addEventListener("click", ()=> {
    card.classList.toggle('is-flipped');
  });

  

