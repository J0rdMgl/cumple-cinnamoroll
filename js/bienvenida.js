const texto = `

Antes de abrir tu regalo...

Quiero que recorras esta pequeña sorpresa
que preparé especialmente para ti 💙

Espero que cada detalle te saque una sonrisa,
porque fue hecho pensando en alguien muy especial.

`;

const typing = document.getElementById("typing");
const button = document.getElementById("startBtn");

let index = 0;

function escribir(){

    if(index < texto.length){

        typing.innerHTML += texto.charAt(index);

        index++;

        setTimeout(escribir, 40);

    }else{

        button.classList.add("show");

    }

}

escribir();

button.addEventListener("click", () => {

    window.location.href = "carta.html";

});