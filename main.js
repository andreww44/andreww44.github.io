// Seleccionamos todos los elementos con la clase .dosde
const dosdeElements = document.querySelectorAll('.dosde');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalButtons = document.querySelectorAll('.close-btn'); // Cambiado para seleccionar por clase

// Recorremos cada elemento .dosde
dosdeElements.forEach(dosde => {
  // Asignamos un evento de clic a cada elemento
  dosde.addEventListener('click', () => {
    // Obtenemos el modal específico desde el atributo data-modal-id
    const modalId = dosde.getAttribute('data-modal-id');
    const modal = document.getElementById(modalId);
    
    // Mostramos el modal y el overlay
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
  });
});

// Cerrar los modales al hacer clic en los botones de cerrar
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
    modalOverlay.style.display = 'none';
  });
});

// Cerrar el modal al hacer clic en el fondo oscuro (overlay)
modalOverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
  modalOverlay.style.display = 'none';
});

// Código para el menú (sin cambios)
$(document).ready(function() {
  $(".menu").click(function() {
    $(".nav_bar").addClass("show");
  });
  $(".close_btn").click(function() {
    $(".nav_bar").removeClass("show");
  });
});



