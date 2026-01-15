const themeBtn = document.querySelector("#themeBtn");
const html = document.querySelector("html");

themeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    themeBtn.innerHTML = "☀️ Light Mode";
  } else {
    themeBtn.innerHTML = "🌙 Dark Mode";
  }
});



