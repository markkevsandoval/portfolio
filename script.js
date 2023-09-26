const headerNavButton = document.getElementById("headerNavButton");
const headerNavIcon = document.getElementById("headerNavIcon");
const headerNavMobile = document.getElementById("headerNavMobile");
const body = document.body;

headerNavButton.addEventListener("click", () => {
    headerNavMobile.classList.toggle("active");
    headerNavMobile.classList.contains("active")
        ? (headerNavIcon.src = "/assets/svg/x.svg")
        : (headerNavIcon.src = "/assets/svg/menu.svg");
    headerNavMobile.classList.contains("active")
        ? (body.style.overflow = "hidden")
        : (body.style.overflow = "auto");
});
