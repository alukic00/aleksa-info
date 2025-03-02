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

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const fadeThreshold = 200; // Koliko treba da skroluje pre nego što počne fade
    
    if (scrollPosition > fadeThreshold) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

// Otvaranje/zatvaranje menija
document.getElementById('burger-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Sprečava propagaciju događaja
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
});

// Zatvaranje menija kada se klikne izvan njega
document.addEventListener('click', function(event) {
    const navList = document.querySelector('nav ul');
    const burgerIcon = document.getElementById('burger-icon');
    if (navList.classList.contains('active') && event.target !== burgerIcon && !burgerIcon.contains(event.target)) {
        navList.classList.remove('active');
    }
});