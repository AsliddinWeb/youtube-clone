"use strict";

const burger = document.querySelector("#showHide"),
      hide = document.querySelector("#hide"),
      navnav = document.querySelector(".navnav"),
      burgercha = document.querySelector(".burgercha"),
      navigation = document.querySelector(".navigation"),
      menu = document.querySelector(".menu"),
      ssInput = document.querySelector(".ss-menu"),
      blur = document.querySelectorAll(".blur");

function myFunction(x) {
    if (x.matches) { // If media query matches
        burger.addEventListener("click", () => {
            burgercha.classList.toggle("navnav");
            for (let i = 0; i < blur.length; ++i) {
                blur[i].classList.toggle("blurr");
            }
            console.log('test1');
        });
        hide.addEventListener("click", () => {
            burgercha.classList.toggle("navnav");
            for (let i = 0; i < blur.length; ++i) {
                blur[i].classList.toggle("blurr");
            }
            console.log('test2');
        });
    } else {
        console.log("else");
    }
  }
  
  var x = window.matchMedia("(max-width: 1399.98px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes