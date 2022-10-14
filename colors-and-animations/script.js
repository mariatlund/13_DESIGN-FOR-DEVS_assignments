"use strict";

// LIGHT & DARK THEME

// check for user preferences (if user has dark theme in browser)

// const useDark = window.matchMedia("(prefers-color-scheme: dark)");
// changeThemeToDark(useDark.matches);

let theme = "light";

function changeThemeToDark(state) {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  //   document.documentElement.classList.toggle("dark-mode", state);
}

function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
}

const checkbox = document.querySelector("#switch");
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
