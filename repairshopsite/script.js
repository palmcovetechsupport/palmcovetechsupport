document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    if (!hamburger || !nav) return;

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});