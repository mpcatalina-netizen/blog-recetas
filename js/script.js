const buscador = document.getElementById("buscador");

if (buscador) {

    buscador.addEventListener("keyup", function () {

        let texto = this.value.toLowerCase();
        let recetas = document.querySelectorAll(".card");

        recetas.forEach(receta => {

            if (receta.textContent.toLowerCase().includes(texto)) {
                receta.style.display = "block";
            } else {
                receta.style.display = "none";
            }

        });

    });

}


// MOSTRAR / OCULTAR INGREDIENTES

const botonIngredientes = document.getElementById("mostrarIngredientes");

if (botonIngredientes) {

    botonIngredientes.addEventListener("click", () => {

        const ingredientes = document.getElementById("ingredientes");

        if (ingredientes.style.display === "none") {
            ingredientes.style.display = "block";
        } else {
            ingredientes.style.display = "none";
        }

    });

}


// FAVORITOS

const botonFavorita = document.getElementById("favorita");

if (botonFavorita) {

    botonFavorita.addEventListener("click", () => {

        localStorage.setItem(
            "recetaFavorita",
            "Tarta de queso al horno"
        );

        botonFavorita.textContent =
        "✅ Receta guardada";

        botonFavorita.style.background =
        "#4CAF50";

    });

}

const favoritoGuardado = document.getElementById("favoritoGuardado");

if (favoritoGuardado) {

    const favorito = localStorage.getItem("recetaFavorita");

    if (favorito) {
        favoritoGuardado.innerHTML = `
            <h2>❤️ Mi receta favorita</h2>
            <p>${favorito}</p>
        `;
    } else {
        favoritoGuardado.innerHTML = `
            <p>No tienes ninguna receta favorita todavía.</p>
        `;
    }

}

const formulario =
document.getElementById("formularioContacto");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        document.getElementById("respuesta").textContent =
        "✅ Mensaje enviado correctamente. Gracias por contactar.";

        formulario.reset();

    });

}


// TEMPORIZADOR

const botonTemporizador =
    document.getElementById("iniciarTemporizador");

if (botonTemporizador) {

    botonTemporizador.addEventListener("click", () => {

        let tiempo;

        const titulo = document.querySelector(".receta-detalle h2").textContent;

        // Tarta de queso: 40 minutos
        if (titulo.includes("Tarta")) {
            tiempo = 40 * 60;
        }

        // Risotto: 25 minutos
        else if (titulo.includes("Risotto")) {
            tiempo = 25 * 60;
        }

        const display =
            document.getElementById("temporizador");

        const intervalo = setInterval(() => {

            let minutos =
                Math.floor(tiempo / 60);

            let segundos =
                tiempo % 60;

            display.textContent =
                `${minutos}:${segundos
                    .toString()
                    .padStart(2, "0")}`;

            tiempo--;

            if (tiempo < 0) {

                clearInterval(intervalo);

                display.textContent = "00:00";

                alert("✅ Tiempo finalizado");

            }

        }, 1000);

    });

}