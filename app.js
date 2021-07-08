// Pop up action on home page

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");
    var htmlGrab = document.querySelector("html");
    const hamburger = document.querySelector('.hamburger');

    hamburger.classList.toggle('is-active');

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible"

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      htmlGrab.classList.add("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        htmlGrab.classList.remove("clicked");
        toggleNavStatus = false;
    }
}

const closeTab = document.querySelector(".close-pop-up");
const popUp = document.querySelector(".pop-up");
const form = document.querySelector(".pop-up-form");
const upload = document.querySelector(".upload-button");
const closeForm = document.querySelector(".close-form");


closeTab.addEventListener('click', function() {
  popUp.classList.add('clicked');
})

// ------------------------------------------------- DARK MODE -----------------------------

var body = document.querySelector("body");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode');

const enableDarkMode = () => {

  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
  body.classList.remove("dark-mode");

  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

