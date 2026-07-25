// =======================================
// WUOF - Hero Slider
// =======================================

const slides = document.querySelectorAll(".hero-slider img");

let current = 0;

function changeSlide() {

    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("active");

}

setInterval(changeSlide, 5000);

// =======================================
// Header al hacer scroll
// =======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// =======================================
// Animación al aparecer
// =======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".service-card, .review, .number, .vehicle-gallery img"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

    observer.observe(el);

});
