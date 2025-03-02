// Kada se stranica skroluje
window.addEventListener('scroll', function() {
    const body = document.body;

    // Provera kada je skrolovanje prešlo 100px
    if (window.scrollY > 100) {
        body.style.backgroundColor = "#f4f4f4"; // Boja kada se skroluje
    } else {
        body.style.backgroundColor = "transparent"; // Početna pozadinska slika
    }
});

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector("nav");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
        navbar.style.top = "0"; // Prikazuje navigaciju na vrhu stranice
    } else {
        navbar.style.top = "-100px"; // Sakriva navigaciju kada korisnik skroluje nadole
    }
    prevScrollPos = currentScrollPos;
};


// Dohvatanje strelice
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Praćenje skrolovanja
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Prikazivanje dugmeta
    } else {
        scrollToTopBtn.style.display = "none"; // Sakrivanje dugmeta
    }
};

// Funkcija za vraćanje na početak
scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Sprečava podrazumevano ponašanje (skakanje)
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Glatko skrolovanje ka početku
});