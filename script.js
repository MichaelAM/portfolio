const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

// Toggle mobile navigation menu
function toggleNav() {
    if (nav.classList.contains("nav--active")) {
        nav.classList.remove("nav--active");
        toggle.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
    } else {
        nav.classList.add("nav--active");
        toggle.innerHTML = '<i class="fas fa-times fa-2x"></i>';
    }
}

toggle.addEventListener("click", toggleNav, false);