// fetch api

fetch("http://localhost:3000/api/teddies")
    .then((res) => console.log(res));

fetch("http://localhost:3000/api/cameras")
    .then((res) => console.log(res));

fetch("http://localhost:3000/api/furniture")
    .then((res) => console.log(res));

const product = document.getElementsByClassName("product")
    console.log(product);