window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;  // Vermeidet Fehler, falls header nicht gefunden wird

    if (window.scrollY > headerHeight) {
        navbar.classList.add("sticky-active");
        navbar.style.visibility = "visible";  // Sichtbarkeit sicherstellen
    } else {
        navbar.classList.remove("sticky-active");
        navbar.style.visibility = "hidden";  // Versteckt beim Scrollen nach oben
    }
});

