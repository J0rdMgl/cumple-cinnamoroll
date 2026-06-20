function login() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (
        usuario === "72355226" &&
        password === "cinnamoroll"
    ) {

        window.location.href = "loading.html";

    } else {

        document.getElementById("mensaje").innerHTML =
        "❌ Usuario o contraseña incorrectos";

    }

}