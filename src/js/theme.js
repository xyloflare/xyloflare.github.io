const button = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");

if (getTheme() == "light") setTheme("light", false);
else setTheme("dark", false);

if (button) button.addEventListener("click", () => { 
  if (getTheme() == "dark") setTheme("light", true);
  else setTheme("dark", true);
});

function setTheme(newTheme, save) {
    const newIcon = newTheme === "dark" ? "/moon.svg" : "/sun.svg";

    if (save) localStorage.setItem("theme", newTheme);

    document.querySelector("html").setAttribute("data-theme", newTheme);
    themeIcon.setAttribute("src", newIcon);
}

function getTheme() {
  if (localStorage.getItem("theme") !== null)
    return localStorage.getItem("theme");
  //if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "dark";
}

