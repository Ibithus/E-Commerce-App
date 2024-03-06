let menuToggle = false;
function toggleMenu() {
  if (menuToggle) {
    menuToggle = false;
    return document.body.classList.remove("menu__open");
  }
  menuToggle = true;
  document.body.classList += " menu__open";
}
