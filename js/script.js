
document.addEventListener("DOMContentLoaded", function() {
    const lineas = document.querySelectorAll(".palabras-container .linea");

    lineas.forEach(linea => {
        const palabras = linea.querySelectorAll(".palabra");
        palabras.forEach((palabra, index) => {
            if(index > 0) {
                // Margen izquierdo aleatorio entre 5% y 40%
                const randomMargin = Math.random() * 35 + 5;
                palabra.style.marginLeft = randomMargin + "%";
            }
        });
    });
});