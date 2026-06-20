const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const texto = `

Hola, Nicole 💙

Hoy es un día muy especial porque estás cumpliendo 20 años.

Quería hacer algo diferente para ti, algo que te sacara una sonrisa y que te recordara lo importante que eres para mí.

Gracias por cada conversación, por cada momento compartido y por cada vez que has alegrado mis días.


Espero que este cumpleaños esté lleno de felicidad, de momentos bonitos y de muchas sonrisas.

Y recuerda algo:

Eres una persona increíble y mereces todo lo bonito que la vida pueda darte.

Feliz cumpleaños 💙

Con mucho cariño,
By JhonnyRL.
`;

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    document.querySelector(".hint").style.display = "none";

    letter.style.display = "block";

    escribir();

});

let index = 0;

function escribir(){

    if(index < texto.length){

        message.innerHTML += texto.charAt(index);

        index++;

        setTimeout(escribir, 35);

    }else{

        nextBtn.style.display = "block";

    }

}

nextBtn.addEventListener("click", () => {

    window.location.href = "regalo.html";

});