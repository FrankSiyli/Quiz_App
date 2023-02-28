export function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
	  <h1 class="header__title">Quiz-App</h1>
	`;

  return footer;
}

{
  /* <footer>
      <a href="index.html">
        <img
          class="footer-button"
          src="/images/home-1-svgrepo-com.svg"
          alt="home"
        />
      </a>
      <a href="bookmark-page.html">
        <img
          class="footer-button"
          src="/images/bookmark-svgrepo-com.svg"
          alt="bookmark"
        />
      </a>
      <a href="create-card.html">
        <img
          class="footer-button"
          src="/images/create-svgrepo-com.svg"
          alt="createCard"
        />
      </a>
      <a href="profile-page.html">
        <img
          class="footer-button"
          src="/images/account-svgrepo-com.svg"
          alt="account"
        />
      </a>
    </footer> */
}
