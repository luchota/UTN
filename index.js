document.addEventListener("DOMContentLoaded", function () {
    const tipoSeguro = document.getElementById("tipoSeguro");
    const precioSeguro = document.getElementById("precioSeguro");

    tipoSeguro.addEventListener("change", function () {
        const selectedOption = tipoSeguro.value;
        let precio = 0;

        switch (selectedOption) {
            case "Basico":
                precio = 500;
                break;
            case "Intermedio":
                precio = 1000;
                break;
            case "Premium":
                precio = 1500;
                break;
        }

        precioSeguro.textContent = `Precio del Seguro: $${precio}`;
    });
});
