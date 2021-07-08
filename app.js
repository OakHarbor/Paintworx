// Pop up action on home page

var $close = $(".close-pop-up");
var $popUp = $(".pop-up");
var $form = $(".pop-up-form");
var $upload = $(".upload-button");
var $closeForm = $(".close-form");

// click to close pop up
$close.on("click", function (e) {
  $popUp.addClass("clicked");
});

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");
    var $html = $("html");
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
      $html.addClass("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

// ------------------------------------------------- DARK MODE -----------------------------

var $body = $("body");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode');

const enableDarkMode = () => {

  $body.addClass("dark-mode");
  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
  $body.removeClass("dark-mode");

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

