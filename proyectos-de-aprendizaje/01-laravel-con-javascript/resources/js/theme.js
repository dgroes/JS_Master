// C08: JS con Laravel
const theme = document.querySelector("#theme-toggle");
theme.addEventListener("click", () => {
    let base = document.querySelector("html");
    base.removeAttribute("data-theme")
})