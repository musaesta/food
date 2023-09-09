"use strict";
const tabs = document.querySelectorAll(".tabheader__item");
const tabcontent = document.querySelectorAll(".tabcontent");
const tabsParent = document.querySelector(".tabheader__items");

tabsParent.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("tabheader__item")) {
    tabs.forEach((tab, i) => {
      if (event.target === tab) {
        hideContent();
        showContent(i);
      }
    });
  }
});

function hideContent() {
  tabcontent.forEach((item) => {
    item.classList.add("hide", "fade");
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}
hideContent();
function showContent(i = 0) {
  tabcontent[i].classList.remove("hide");
  tabs[i].classList.add("tabheader__item_active");
}
showContent();
