const progressBar = document.getElementById("progress-bar");
const percent = document.getElementById("percent");
const loadingText = document.getElementById("loading-text");

let progress = 0;

const messages = [
    "Cinnamoroll está trabajando... ☁️",
    "Recogiendo estrellitas... ⭐",
    "Llenando este lugar de amor... 💙",
    "Preparando algo especial... 🎁",
    "¡Todo está listo! ✨"
];

const interval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    percent.textContent = progress + "%";

    if(progress === 20){
        loadingText.textContent = messages[1];
    }

    if(progress === 40){
        loadingText.textContent = messages[2];
    }

    if(progress === 60){
        loadingText.textContent = messages[3];
    }

    if(progress === 100){

        loadingText.textContent = messages[4];

        clearInterval(interval);

        setTimeout(() => {

            window.location.href = "bienvenida.html";

        }, 1500);
    }

}, 50);