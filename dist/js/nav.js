"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("js-nav-menu")
  var closeElements = document.getElementsByClassName("js-menu-dismiss")
  for (var i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener("click", function () {
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
      }
    })
  }
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function originalColor() {
  var myNav = document.getElementById("nav");
  window.onscroll = function () {
    if (screen.width < 902) {
      myNav.style.backgroundColor = "#1F9D55";
    } else {
      myNav.style.backgroundColor = "";
    }
  }
}

function toggleMenu() {
  var myNav = document.getElementById("nav");
  document.getElementById("js-nav-menu").classList.toggle("hidden");
}

function colorChange() {
  var myNav = document.getElementById("nav");
  window.onscroll = function () {
    if (window.scrollY >= 200) {
      myNav.style.backgroundColor = "#1F9D55";
      myNav.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)";
    } else {
      myNav.style.backgroundColor = "";
      myNav.style.boxShadow = "";
    }
  };
}
