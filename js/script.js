
// document.addEventListener("DOMContentLoaded", function() {
//     const lineas = document.querySelectorAll(".palabras-container .linea");

//     lineas.forEach(linea => {
//         const palabras = linea.querySelectorAll(".palabra");
//         palabras.forEach((palabra, index) => {
//             if(index > 0) {
//                 // Margen izquierdo aleatorio entre 5% y 40%
//                 const randomMargin = Math.random() * 35 + 5;
//                 palabra.style.marginLeft = randomMargin + "%";
//             }
//         });
//     });
// });





const track = document.getElementById("carousel");
const images = Array.from(track.children);
let currentIndex = 0;

// Clonamos las primeras imágenes para mantener el bucle fluido
images.forEach(img => track.appendChild(img.cloneNode(true)));

function slideNext() {
  currentIndex++;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${(currentIndex * 100) / 3}vw)`; // cada paso mueve 1/3 del ancho total visible

  // Cuando llega al final del primer set, resetea instantáneamente sin que se note
  if (currentIndex >= images.length) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      currentIndex = 0;
    }, 600); // justo después del movimiento
  }
}

// Avanza cada 5 segundos
setInterval(slideNext, 5000);
