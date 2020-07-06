const nav = document.querySelector(".links");
const button = document.querySelector(".menu");
const links = document.querySelectorAll(".links div");
const brand = document.querySelector(".heading");

function navSlide() {
  button.addEventListener("click", () => {
    nav.classList.toggle("toggle");
    brand.classList.toggle("heading-nav");
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
    });
  });
}

navSlide();
