// fetch api

fetch("http://localhost:3000/api/teddies")
    .then((res) => console.log(res));

fetch("http://localhost:3000/api/cameras")
    .then((res) => console.log(res));

fetch("http://localhost:3000/api/furniture")
    .then((res) => console.log(res));

const product = document.getElementsByClassName("product");
const navBar = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
    console.log(e);
    if (window.scrollY > 50){
        navBar.style.top = "-115px";
    }
    else {
        navBar.style.top = "0px";
    }
});