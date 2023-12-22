const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode", darkModeToggle.checked);
});

let sideMenu = document.getElementById("sidemenu");

function openmenu() {
  sideMenu.style.right = "0";
}
function closemenu() {
  sideMenu.style.right = "-200px";
}
