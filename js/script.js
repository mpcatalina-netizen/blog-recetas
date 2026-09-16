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