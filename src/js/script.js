const menuButton = document.getElementById("menuButton");
const menuNav = document.getElementById("menuNav");
const menuIcon = document.getElementById("menuIcon");

menuButton.addEventListener("click", () => {

    // Troca a imagem assim que clicar
    if (menuButton.classList.contains("active")) {
        menuIcon.src = "src/img/gato 5.jpeg"; 
    } else {
        menuIcon.src = "src/img/gato 1.jpeg"; 
    }

    menuButton.classList.toggle("active");
    menuNav.classList.toggle("active");
});

const slides = document.querySelectorAll(".habilidade");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.style.display = "none");
    slides[i].style.display = "block";
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

showSlide(index);