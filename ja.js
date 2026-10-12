// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});


// ---------- Typing effect ----------
const words = ["Frontend developer", "IT student", "Problem solver"];
const typingEl = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.textContent = currentWord.substring(0, charIndex);

  let speed = deleting ? 45 : 95;

  if (!deleting && charIndex === currentWord.length) {
    speed = 1600;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ---------- Navbar border + active link on scroll ----------
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  // navbar ke neeche line dikhao jab page scroll ho
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // kaunsa section abhi screen pe hai
  let current = "home";

  sections.forEach(function (section) {
    const top = section.offsetTop - 130;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();