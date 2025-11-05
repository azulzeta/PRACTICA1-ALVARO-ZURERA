
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




// --- MENÚ DESPLEGABLE VERSIÓN MÓVIL CON EFECTO DESENFOCADO ---
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const burgerIcon = burger.querySelector("i");
  const mobileMenu = document.querySelector(".mobile-menu");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");

   
    if (mobileMenu.classList.contains("active")) {
      burgerIcon.classList.remove("fa-bars");
      burgerIcon.classList.add("fa-times");

      mobileMenu.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      mobileMenu.style.backdropFilter = "blur(8px)";
      mobileMenu.style.webkitBackdropFilter = "blur(8px)"; 
    } else {
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");


      mobileMenu.style.backgroundColor = "var(--blanco)";
      mobileMenu.style.backdropFilter = "none";
      mobileMenu.style.webkitBackdropFilter = "none";
    }
  });




  // Cerrar menú
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");
      mobileMenu.style.backgroundColor = "var(--blanco)";
      mobileMenu.style.backdropFilter = "none";
      mobileMenu.style.webkitBackdropFilter = "none";
    });
  });

  // Cerrar si se hace clic fuera
  document.addEventListener("click", e => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");
      mobileMenu.style.backgroundColor = "var(--blanco)";
      mobileMenu.style.backdropFilter = "none";
      mobileMenu.style.webkitBackdropFilter = "none";
    }
  });

  // Asegurar estado al redimensionar
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");
      mobileMenu.style.backgroundColor = "var(--blanco)";
      mobileMenu.style.backdropFilter = "none";
      mobileMenu.style.webkitBackdropFilter = "none";
    }
  });
});




// --- COUNTDOWN ---
document.addEventListener("DOMContentLoaded", () => {
  const countdownElements = {
    days: document.querySelector(".countdown .count-item:nth-child(1) .number"),
    hours: document.querySelector(".countdown .count-item:nth-child(2) .number"),
    minutes: document.querySelector(".countdown .count-item:nth-child(3) .number"),
    seconds: document.querySelector(".countdown .count-item:nth-child(4) .number")
  };

  // Fecha objetivo: 3 de octubre de 2026, 00:00:00
  const targetDate = new Date("October 3, 2026 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      // Si la fecha ya ha pasado
      countdownElements.days.textContent = "0";
      countdownElements.hours.textContent = "0";
      countdownElements.minutes.textContent = "0";
      countdownElements.seconds.textContent = "0";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = hours.toString().padStart(2, "0");
    countdownElements.minutes.textContent = minutes.toString().padStart(2, "0");
    countdownElements.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  // Actualizar cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
});






// USO MARQUESINA

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
