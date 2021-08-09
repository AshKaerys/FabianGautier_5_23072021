// fetch api

fetch("http://localhost:3000/api/cameras")
    //.then((res) => console.log(res));
fetch("http://localhost:3000/api/furniture")
    //.then((res) => console.log(res));

const navBar = document.querySelector("nav");
const product = document.getElementsByClassName("product");
const select = document.getElementById("select");
let bear = document.getElementById("bear");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50){
        navBar.style.top = "-115px";
    }
    else {
        navBar.style.top = "0px";
    }
});

 // récupération API

fetch("http://localhost:3000/api/teddies")
     .then((res) => res.json())
     .then((data) => console.log(data));

fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .then(function (data){
        let teddies = data
        return teddies.map(function(teddy){
            let div = document.createElement('div')
            div.classList.add('product')
            div.innerHTML=`
            <a href="./product.html?id=${teddy._id}">
            <h2>${teddy.name}</h2>
            <img src="${teddy.imageUrl}" alt="Ours en peluche">
            </a>
            `
            bear.appendChild(div)
        })
    })
    .catch(function(error){console.log(error)});



    





    




