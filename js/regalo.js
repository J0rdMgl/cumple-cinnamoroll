const regalos = [

{
    titulo:"🌸 Primera pista",
    mensaje:"Hay algo tan bonito como una flor esperándote..."
},

{
    titulo:"🐶 Segunda pista",
    mensaje:"Un amiguito muy suave quiere acompañarte todos los días 💙"
},

{
    titulo:"🔑 Tercera pista",
    mensaje:"Algo pequeño para que me lleves contigo a donde vayas ✨"
},

{
    titulo:"💡 Cuarta pista",
    mensaje:"Una pequeña luz para iluminar incluso los días más oscuros 🌟"
},

{
    titulo:"💎 Quinta pista",
    mensaje:"Porque las personas especiales merecen detalles especiales 💙"
}

];

let abiertos = 0;

function abrirRegalo(indice){

    const cajas = document.querySelectorAll(".gift");

    if(cajas[indice].classList.contains("open")){
        return;
    }

    cajas[indice].classList.add("open");

    cajas[indice].innerHTML = "❤️";

    document.getElementById("messageBox").style.display =
    "block";

    document.getElementById("titulo").innerHTML =
    regalos[indice].titulo;

    document.getElementById("mensaje").innerHTML =
    regalos[indice].mensaje;

    abiertos++;

    if(abiertos === 5){

        document.getElementById("finalBtn").style.display =
        "inline-block";
    }
}

document
.getElementById("finalBtn")
.addEventListener("click", () => {

    window.location.href = "final.html";

});