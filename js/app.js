"use strict";

const burger = document.querySelector("#showHide"),
      hide = document.querySelector("#hide"),
      navnav = document.querySelector(".navnav"),
      burgercha = document.querySelector(".burgercha"),
      navigation = document.querySelector(".navigation"),
      menu = document.querySelector(".menu"),
      ssInput = document.querySelector(".ss-menu"),
      blur = document.querySelectorAll(".blur");

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
