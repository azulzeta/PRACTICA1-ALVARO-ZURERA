
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



// PAGINA DE CARGA
document.addEventListener("DOMContentLoaded", () => {
  const porcentaje = document.getElementById("porcentaje");
  const cargaDiv = document.getElementById("carga");

  // Si no existen los elementos, salir
  if (!porcentaje || !cargaDiv) return;

  // Revisar si ya se mostró la pantalla de carga en esta sesión
  if (sessionStorage.getItem("cargaMostrada")) {
    cargaDiv.style.top = "-100%"; // Ocultar inmediatamente
    return;
  }

  let contador = 0;

  function carga() {
    if (contador <= 100) {
      porcentaje.textContent = contador + "%";
      contador++;
      setTimeout(carga, 40); // Llamar de nuevo después de 40ms
    } else {
      // Animar salida de la pantalla de carga
      cargaDiv.style.transition = "top 0.5s ease";
      cargaDiv.style.top = "-100%";

      // Guardar en sessionStorage que la carga ya se mostró
      sessionStorage.setItem("cargaMostrada", "true");
    }
  }

  carga(); // Iniciar contador
});






























// --- MENÚ DESPLEGABLE VERSIÓN MÓVIL CON EFECTO DESENFOCADO ---
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!burger || !mobileMenu) return; // seguridad

  const burgerIcon = burger.querySelector("i");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
      burgerIcon.classList.replace("fa-bars", "fa-times");
      mobileMenu.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      mobileMenu.style.backdropFilter = "blur(8px)";
      mobileMenu.style.webkitBackdropFilter = "blur(8px)";
    } else {
      burgerIcon.classList.replace("fa-times", "fa-bars");
      mobileMenu.style.backgroundColor = "var(--blanco)";
      mobileMenu.style.backdropFilter = "none";
      mobileMenu.style.webkitBackdropFilter = "none";
    }
  });

  // Cerrar menú al hacer clic en un enlace
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      burgerIcon.classList.replace("fa-times", "fa-bars");
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
      burgerIcon.classList.replace("fa-times", "fa-bars");
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
      burgerIcon.classList.replace("fa-times", "fa-bars");
      mobileMenu.style.backgroundColor = "var(--blanco)";
      mobileMenu.style.backdropFilter = "none";
      mobileMenu.style.webkitBackdropFilter = "none";
    }
  });
});

































// --- COUNTDOWN ---
document.addEventListener("DOMContentLoaded", () => {
  const countdownSection = document.querySelector(".countdown");
  if (!countdownSection) return; // si no hay contador, salimos

  const countdownElements = {
    days: countdownSection.querySelector(".count-item:nth-child(1) .number"),
    hours: countdownSection.querySelector(".count-item:nth-child(2) .number"),
    minutes: countdownSection.querySelector(".count-item:nth-child(3) .number"),
    seconds: countdownSection.querySelector(".count-item:nth-child(4) .number")
  };

  const targetDate = new Date("October 3, 2026 00:00:00").getTime();

  function updateCountdown() {
    const { days, hours, minutes, seconds } = countdownElements;
    if (!days || !hours || !minutes || !seconds) return;

    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      days.textContent = "0";
      hours.textContent = minutes.textContent = seconds.textContent = "00";
      return;
    }

    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.textContent = d;
    hours.textContent = h.toString().padStart(2, "0");
    minutes.textContent = m.toString().padStart(2, "0");
    seconds.textContent = s.toString().padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
























// Selecciona el botón de la página que abre el modal (no se modifica su clase)
document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector('.newsletter-btn');
  const modal = document.getElementById('newsletterModal');
  let closeModalBtn = null;

  // Solo intentar encontrar el botón de cerrar si el modal existe
  if (modal) {
    closeModalBtn = modal.querySelector('.close');
  }

  // Si no existe el botón de abrir modal o el modal, salir
  if (!openModalBtn || !modal) return;

  // Abrir modal
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Cerrar modal solo si el botón existe
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Cerrar haciendo clic fuera del modal
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});





























// --- MODO OSCURO ---
document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.querySelector(".light-btn");
  if (!btnTema) return;

  const body = document.body;
  const icono = btnTema.querySelector("i");

  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "dark") {
    body.classList.replace("light-theme", "dark-theme");
    icono.classList.replace("fa-lightbulb", "fa-moon");
  }

  btnTema.addEventListener("click", () => {
    const esClaro = body.classList.contains("light-theme");
    if (esClaro) {
      body.classList.replace("light-theme", "dark-theme");
      icono.classList.replace("fa-lightbulb", "fa-moon");
      localStorage.setItem("tema", "dark");
    } else {
      body.classList.replace("dark-theme", "light-theme");
      icono.classList.replace("fa-moon", "fa-lightbulb");
      localStorage.setItem("tema", "light");
    }
  });
});













// CATEGORIAS DESPLAZADAS

document.addEventListener("DOMContentLoaded", () => {
  const categorias = document.querySelectorAll(".category");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.3 }
  );

  categorias.forEach(cat => observer.observe(cat));
});



















// --- MARQUESINA (uso responsive) ---
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.marquesina-track img');
  const prev = document.querySelector('.arrow.left');
  const next = document.querySelector('.arrow.right');
  if (!images.length || !prev || !next) return; // seguridad

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
});


































// --- FORMULARIO ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSuscripcion");
  if (!form) return; // si no existe el formulario, no ejecutar nada

  // Función para limpiar bordes y errores
  function limpiarEstilos() {
    // Limpiar todos los spans de error
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    // Limpiar estilos de borde de los inputs
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
      input.style.borderColor = "#ccc"; // color por defecto
    });
  }

  // Botón de reinicio (reset)
  const resetBtn = document.getElementById("resetFormulario");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();      // limpiar todos los inputs
      limpiarEstilos();  // limpiar errores y bordes
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita envío automático
    limpiarEstilos();       // Limpiar errores antes de validar

    let valido = true;

    // Obtener campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const confirmarEmail = document.getElementById("confirmarEmail").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const repetirContrasena = document.getElementById("repetirContrasena").value.trim();

    // Validaciones
    if (nombre === "") {
      document.getElementById("errorNombre").textContent = "Ingrese su nombre.";
      document.getElementById("nombre").style.borderColor = "red";
      valido = false;
    }

    if (apellido === "") {
      document.getElementById("errorApellido").textContent = "Ingrese su apellido.";
      document.getElementById("apellido").style.borderColor = "red";
      valido = false;
    }

    if (!/^[0-9]{7,}$/.test(telefono)) { // mínimo 7 dígitos
      document.getElementById("errorTelefono").textContent = "Ingrese un número de teléfono válido.";
      document.getElementById("telefono").style.borderColor = "red";
      valido = false;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("errorEmail").textContent = "Ingrese un email válido.";
      document.getElementById("email").style.borderColor = "red";
      valido = false;
    }

    if (email !== confirmarEmail) {
      document.getElementById("errorConfirmarEmail").textContent = "Los correos no coinciden.";
      document.getElementById("confirmarEmail").style.borderColor = "red";
      valido = false;
    }

    if (contrasena.length < 8) {
      document.getElementById("errorContrasena").textContent = "Debe tener al menos 8 caracteres.";
      document.getElementById("contrasena").style.borderColor = "red";
      valido = false;
    }

    if (contrasena !== repetirContrasena) {
      document.getElementById("errorRepetirContrasena").textContent = "Las contraseñas no coinciden.";
      document.getElementById("repetirContrasena").style.borderColor = "red";
      valido = false;
    }

    // Si todo está correcto
    if (valido) {
      alert("¡Formulario enviado con éxito!");
      form.reset();
      limpiarEstilos();
    }
  });
});









































// TICKETS

document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".toggle-arrow");
  const totalDisplay = document.querySelector("#total");

  // Mostrar / ocultar secciones
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const section = arrow.closest(".section-header").nextElementSibling;
      arrow.classList.toggle("rotate");
      section.classList.toggle("active");
    });
  });

  // Control de + / - y actualización total
  document.querySelectorAll(".ticket-row").forEach((row) => {
    const minus = row.querySelector(".minus");
    const plus = row.querySelector(".plus");
    const qty = row.querySelector(".quantity");
    const price = parseFloat(row.dataset.price);

    plus.addEventListener("click", () => {
      qty.textContent = parseInt(qty.textContent) + 1;
      updateTotal();
    });

    minus.addEventListener("click", () => {
      const current = parseInt(qty.textContent);
      if (current > 0) {
        qty.textContent = current - 1;
        updateTotal();
      }
    });
  });

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".ticket-row").forEach((row) => {
      const qty = parseInt(row.querySelector(".quantity").textContent);
      const price = parseFloat(row.dataset.price);
      total += qty * price;
    });
    totalDisplay.textContent = total.toFixed(2).replace(".", ",") + "€";
  }
});






// Selecciones
document.addEventListener("DOMContentLoaded", () => {

  const ticketDescriptions = {
    '03 O.26': 'Acceso al festival el 3 de octubre de 2026. Incluye todos los escenarios principales.',
    '04 O.26': 'Acceso al festival el 4 de octubre de 2026. Incluye todos los escenarios principales.',
    '05 O.26': 'Acceso al festival el 5 de octubre de 2026. Incluye todos los escenarios principales.',
    'ABONO NORMAL': 'Acceso general a todos los días del festival.',
    'ABONO COMPLETO': 'Entrada general con acceso a todas las zonas durante los tres días.',
    'ABONO VIP': 'Acceso VIP a todas las zonas premium, con beneficios exclusivos.'
  };

  const infoButtons = document.querySelectorAll('.info-btn');
  const infoModal = document.getElementById('infoModal');
  const closeInfo = document.querySelector('.close-info');
  const infoDate = document.getElementById('infoDate');
  const infoKind = document.getElementById('infoKind');
  const infoDescription = document.getElementById('infoDescription');

  if (!infoButtons.length || !infoModal || !closeInfo || !infoDate || !infoKind || !infoDescription) return;

  infoButtons.forEach(button => {
    button.addEventListener('click', e => {
      const row = e.target.closest('.ticket-row');
      if (!row) return;

      let date = row.querySelector('.ticket-date')?.textContent.trim() || '';
      const kind = row.querySelector('.ticket-kind')?.textContent.trim() || '';

      if (/^\d O\.26$/.test(date)) {
        date = '0' + date;
      }

      infoDate.textContent = date;
      infoKind.textContent = kind;
      infoDescription.textContent = ticketDescriptions[date] || ticketDescriptions[kind] || '';

      infoModal.style.display = 'flex';
    });
  });

  closeInfo.addEventListener('click', () => {
    infoModal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === infoModal) {
      infoModal.style.display = 'none';
    }
  });

});
