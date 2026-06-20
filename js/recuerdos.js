const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");

const recuerdos = [

{
    foto:"img/recuerdo1.png",
    mensaje:"💙 Gracias por cada momento compartido."
},

{
    foto:"img/recuerdo2.png",
    mensaje:"🎮 Las horas jugando contigo siempre fueron especiales."
},

{
    foto:"img/recuerdo3.png",
    mensaje:"✨ Cada recuerdo contigo tiene un lugar especial en mi corazón."
}

];

let actual = 0;

function mostrar(){

    imagen.src = recuerdos[actual].foto;
    texto.innerHTML = recuerdos[actual].mensaje;

}

function siguiente(){

    actual++;

    if(actual >= recuerdos.length){

        actual = 0;

    }

    mostrar();

}

function anterior(){

    actual--;

    if(actual < 0){

        actual = recuerdos.length - 1;

    }

    mostrar();

}

document
.getElementById("continuar")
.addEventListener("click", () => {

    window.location.href = "regalo.html";

});