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