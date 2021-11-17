window.addEventListener("load", startmain);

function startmain() {
  console.log("start main page");
  document.querySelector(".burger-icon").addEventListener("click", openMenu);
  document.querySelector(".cross-icon").addEventListener("click", closeMenu);
}

function openMenu() {
  console.log("open menu");
  document.querySelector(".mob-menu").classList.remove("close");
  document.querySelector(".mob-menu").classList.add("show");
  document.querySelector(".burger-icon").removeEventListener("click", openMenu);
  document.querySelector(".cross-icon").addEventListener("click", closeMenu);
}
function closeMenu() {
  console.log("close menu");
  document.querySelector(".mob-menu").classList.remove("show");
  document.querySelector(".mob-menu").classList.add("close");
  document.querySelector(".cross-icon").removeEventListener("click", closeMenu);
  document.querySelector(".burger-icon").addEventListener("click", openMenu);
}
