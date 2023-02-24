const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const bookmarkSVG = document.querySelector('[data-js="bookmarkSVG"]');
const newQButton = document.querySelector('[data-js="newQ"]');

function bookmarkButtonClick(event) {
  const bookmark = event.target;
  bookmark.classList.toggle("bookmark--active");
  bookmark.style.transition = "1s, ease, 1s";
  bookmark.style.animation = "600ms pulsate";
  onclick = event.stopPropagation();
}

bookmarkButton.addEventListener("click", bookmarkButtonClick);

const card = document.querySelector(".cardInner");

card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});
