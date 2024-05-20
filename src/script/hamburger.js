// hamb menu open/close
const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  const isVisible = nav.classList.contains("visible");
  if (!isVisible) {
    nav.classList.add("visible");
    nav.setAttribute("aria-expanded", false);
  } else {
    nav.classList.remove("visible");
    nav.setAttribute("aria-expanded", true);
  }
});