
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




const images = document.querySelectorAll('.marquesina-track img');
  const prev = document.querySelector('.arrow.left');
  const next = document.querySelector('.arrow.right');
  let current = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  function nextImg() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function prevImg() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }

  function setupResponsive() {
    if (window.innerWidth <= 900) {
      showImage(current);
      prev.addEventListener('click', prevImg);
      next.addEventListener('click', nextImg);
    } else {
      images.forEach(img => img.classList.remove('active'));
      prev.removeEventListener('click', prevImg);
      next.removeEventListener('click', nextImg);
    }
  }

  window.addEventListener('load', setupResponsive);
  window.addEventListener('resize', setupResponsive);
