const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkSVG = document.querySelector('[data-js="bookmark-svg"]');
const newQuestionButton = document.querySelector(
  '[data-js="new-question-button"]'
);

function bookmarkButtonClick(event) {
  const bookmark = event.target;
  bookmark.classList.toggle("bookmark--active");
  /* bookmark.style.transition = "1s, ease, 1s";
  bookmark.style.animation = "600ms pulsate"; */
  event.stopPropagation();
}

bookmarkButton.addEventListener("click", bookmarkButtonClick);

const card = document.querySelector(".card-inner");

card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});
