document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".listItems");

    hamburger.addEventListener("click", function () {
        console.log("Hamburger button clicked!");
        navMenu.classList.toggle("active");
    });
});
