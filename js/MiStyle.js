let saludo = document.getElementById("saludo");
saludo.innerHTML = "Hola, bienvenido a mi sitio web!";

let lasP = document.getElementsByClassName("p");
lasP[0].style.color = "blue";
lasP[4].style.color = "blue";

lasP[5].innerHTML = lasP[0].innerHTML + lasP[1].innerHTML + lasP[2].innerHTML + lasP[3].innerHTML + lasP[4].innerHTML;
