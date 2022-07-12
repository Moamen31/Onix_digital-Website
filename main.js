let btn = document.querySelector(".toggle");
let ul = document.querySelector(".ul");
let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll");

btn.addEventListener("click", function () {
    btn.classList.toggle("btn");
    ul.classList.toggle("show");
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

    if (window.scrollY >= 400) {
        header.style.cssText =
            "position:fixed;z-index:99;background-color:white;width:100%;box-shadow:0px 0px 15px 4px rgb(0 0 0 / 10%);";
    }
    if (window.scrollY === 0) {
        header.style.cssText = "position:relative;";
    }
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
