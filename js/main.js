const menuButton = document.querySelector("[id=burger-button]");
const buttonCloseMenu = document.querySelector("[id=button-close]");
const buttonBlock = document.querySelector("[id=menu-js]");

let menuIsOpen = false;
let menuButtonIsPressed = false;

menuButton.addEventListener("click", () => toggleMenu());
buttonCloseMenu.addEventListener("click", () => closeMenu());

openMenu = () => {
    document.getElementById("menu-js").classList.add("show");
    menuButton.children[0].classList.add("button__item-1--active");
    menuButton.children[1].classList.add("button__item-2--active");
    menuButton.children[2].classList.add("button__item-3--active");
    buttonBlock.children[0].classList.remove("header-button_close-left");
    buttonBlock.children[0].classList.add("header-button_open-left");
    buttonBlock.children[1].classList.remove("header-button_close-right");
    buttonBlock.children[1].classList.add("header-button_open-right");
    buttonBlock.children[2].classList.remove("header-button_close-left");
    buttonBlock.children[2].classList.add("header-button_open-left");
    buttonBlock.children[3].classList.remove("header-button_close-right");
    buttonBlock.children[3].classList.add("header-button_open-right");
    menuIsOpen = true;
    menuButtonIsPressed = true;
  }; 

closeMenu = () => {
    if (menuButtonIsPressed) {
    menuButton.children[0].classList.remove("button__item-1--active");
    menuButton.children[1].classList.remove("button__item-2--active");
    menuButton.children[2].classList.remove("button__item-3--active");
    buttonBlock.children[0].classList.remove("header-button_open-left");
    buttonBlock.children[0].classList.add("header-button_close-left");
    buttonBlock.children[1].classList.remove("header-button_open-right");
    buttonBlock.children[1].classList.add("header-button_close-right");
    buttonBlock.children[2].classList.remove("header-button_open-left");
    buttonBlock.children[2].classList.add("header-button_close-left");
    buttonBlock.children[3].classList.remove("header-button_open-right");
    buttonBlock.children[3].classList.add("header-button_close-right");
    menuIsOpen = false;
    }
  };

toggleMenu = () => {
    if (menuIsOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  };