/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu when a link is clicked */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Computer Science Student",
    "Software Developer",
    "Programmer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


/* =========================
   SKILL BARS
========================= */

const skillBars = document.querySelectorAll(".progress-bar");

function showSkills() {

    const skillsSection = document.querySelector(".skills");

    const sectionPosition =
        skillsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;

    if (sectionPosition < screenPosition) {

        skillBars.forEach(bar => {

            bar.style.width = bar.getAttribute("data-width");

        });

    }
}

window.addEventListener("scroll", showSkills);


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#ff5555";

        return;
    }


    /* Basic email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#ff5555";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been prepared successfully.";

    formMessage.style.color = "#d400ff";

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   THEME BUTTON
========================= */

const themeBtn =
    document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    } else {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

});