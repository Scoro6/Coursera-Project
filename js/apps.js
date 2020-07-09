const nav = document.querySelector(".links");
const button = document.querySelector(".menu");
const links = document.querySelectorAll(".links div");
const heading = document.querySelector(".heading");
const title = document.querySelector(".intro h1");
let text = "INDIAN LEAGUES";
var i = 0;
let speed = 150;

function navSlide() {
  button.addEventListener("click", () => {
    nav.classList.toggle("toggle");
    heading.classList.toggle("heading-nav");
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

function typingEffect() {
  if (i < text.length) {
    title.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
}

navSlide();
window.addEventListener("load", typingEffect());
