const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".navs");

btn.onclick = () => {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
};

const language = {
  az: ["Mən Colin Smithəm", "DİZAYNER & FRONTEND DEVELOPER"],
  en: ["I'm colin smith", "DESIGNER & FRONTEND DEVELOPER"],
};

const nav = document.querySelector("nav");
const mode_btn = document.querySelector("#mode-btn");
const hero = document.querySelector(".hero");
const langItem = document.querySelectorAll(".text");
if (
  localStorage.getItem("mode") === null &&
  localStorage.getItem("hero") === null &&
  localStorage.getItem("lang") === null &&
  localStorage.getItem("langbtn") === null
) {
  localStorage.setItem("mode", "navbar navbar-expand-lg bg-light navbar-light");
  localStorage.setItem("hero", "hero w-100");
  localStorage.setItem("lang", language.az);
  localStorage.setItem("langbtn", "AZ");
} else {
  mode_btn.onclick = () => {
    if (nav.className == "navbar navbar-expand-lg bg-light navbar-light") {
      nav.className =
        "navbar navbar-expand-lg bg-black navbar-black text-white";
      localStorage.setItem(
        "mode",
        "navbar navbar-expand-lg bg-black navbar-black text-white"
      );
      if (
        document.querySelector("img").src == "./image/logo-white-big@2x.webp"
      ) {
        document.querySelector("img").src = "./image/logo.png";
      } else {
        document.querySelector("img").src = "./image/logo-white-big@2x.webp";
      }
      for (let i = 0; i < 3; i++) {
        if (
          document.querySelectorAll(".bar")[i].style.backgroundColor == "#fff"
        ) {
          document.querySelectorAll(".bar")[i].style.backgroundColor = "#000";
        } else {
          document.querySelectorAll(".bar")[i].style.backgroundColor = "#fff";
        }
      }
    } else {
      nav.className = "navbar navbar-expand-lg bg-light navbar-light";
      localStorage.setItem(
        "mode",
        "navbar navbar-expand-lg bg-light navbar-light"
      );
      if (document.querySelector("img").src == "./image/logo.png") {
        document.querySelector("img").src = "./image/logo-white-big@2x.webp";
      } else {
        document.querySelector("img").src = "./image/logo.png";
      }
      for (let i = 0; i < 3; i++) {
        if (
          document.querySelectorAll(".bar")[i].style.backgroundColor == "#000"
        ) {
          document.querySelectorAll(".bar")[i].style.backgroundColor = "#fff";
        } else {
          document.querySelectorAll(".bar")[i].style.backgroundColor = "#000";
        }
      }
    }
    if (hero.className == "hero w-100") {
      hero.className = "hero w-100 bg-black text-white";
      localStorage.setItem("hero", "hero w-100 bg-black text-white");
      if (
        (document.querySelector(".img-fluid").src =
          "./image/homepage-option18-image.png")
      ) {
        document.querySelector(".img-fluid").src = "./image/man.jpeg";
      } else {
        document.querySelector(".img-fluid").src =
          "./image/homepage-option18-image.png";
      }
    } else {
      hero.className = "hero w-100";
      localStorage.setItem("hero", "hero w-100");
      if ((document.querySelector(".img-fluid").src = "./image/man.jpeg")) {
        document.querySelector(".img-fluid").src =
          "./image/homepage-option18-image.png";
      } else {
        document.querySelector(".img-fluid").src = "./image/man.jpeg";
      }
    }
  };

  nav.className = localStorage.getItem("mode");
  hero.className = localStorage.getItem("hero");

  document.querySelector("#lang-btn").onclick = () => {
    if (document.querySelector("#lang-btn").innerHTML === "AZ") {
      localStorage.setItem("lang", language.az);
      for (const i in language.az) {
        langItem[i].innerHTML = language.az[i];
      }
      document.querySelector("#lang-btn").innerHTML = "EN";
      localStorage.setItem("langbtn", "EN");
    } else {
      localStorage.setItem("lang", language.en);
      for (const i in language.en) {
        langItem[i].innerHTML = language.en[i];
      }
      document.querySelector("#lang-btn").innerHTML = "AZ";
      localStorage.setItem("langbtn", "AZ");
    }
  };

  for (const i in language.az) {
    langItem[i].innerHTML = localStorage.getItem("lang").split(",")[i];
  }
  document.querySelector("#lang-btn").innerHTML =
    localStorage.getItem("langbtn");
}
