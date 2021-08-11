
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
    //.then((data) => console.log(data));



// récupération id par url

let url = new URL(document.location).searchParams;
let id = url.get('id');
console.log(id);

fetch (`http://localhost:3000/api/teddies/${id}`)
    .then ((res) => res.json())
    //.then ((data) => console.log(data))
    .then (function (data){
        let teddy = data
        console.log(teddy);
        let div = document.createElement('div')
        div.classList.add('product')
        div.innerHTML=`
        <h1>${teddy.name}</h1>
        <img src="${teddy.imageUrl}" alt="image de l'ours ${teddy.name}">
        <p>${teddy.description}</p>
        <p>${teddy.price}€<p>
        `
        let test = document.getElementById('select')
        test.setAttribute('class', 'blue red')
        bear.appendChild(div)
    })

    console.log(select);