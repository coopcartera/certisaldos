function generarRadicado() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let radicado = '';
  for (let i = 0; i < 10; i++) {
      radicado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  document.getElementById('radicado').value = radicado;
  
  // Deshabilitar el botón después de generar el radicado
  document.getElementById('botonGenerar').disabled = true;
}

// Asegúrate de que el botón esté habilitado cuando la página se carga
window.onload = function() {
  document.getElementById('botonGenerar').disabled = false;
}

// Función para validar antes de enviar
function validarFormulario() {
  const radicado = document.getElementById("radicado").value;
  if (radicado === "") {
    alert("Debe Generar su Radicado Antes de Enviar la Solicitud.");
    return false; // Evita que se envíe el formulario
  }
  return true; // Permite enviar el formulario
}

// Asociar la función de validación al evento submit del formulario
document.getElementById("myForm").addEventListener("submit", function(event) {
  if (!validarFormulario()) {
    event.preventDefault(); // Evita la acción por defecto del submit
  }
});
// validacion de formulario
const miSelect = document.getElementById('origen');
const miSeccion = document.getElementById('entidad');
//habilita nueva seccion del formulario
miSelect.addEventListener('change', () => {
  if (miSelect.value === 'TERCERO') {
    miSeccion.style.display = 'block';
  } else {
    miSeccion.style.display = 'none';
  }
});
//valida recibo de caja
const numeroInput = document.getElementById('rc');

numeroInput.addEventListener('input', () => {
  if (numeroInput.value.length !== 11) {
    numeroInput.setCustomValidity('El número debe tener exactamente 11 dígitos, ejemplo 20250000123.');
  } else {
    numeroInput.setCustomValidity('');
  }
});
// reloj del formulario para que el usuario peuda impirmir con fecha y hora la solicitud
function actualizarReloj() {
  const ahora = new Date();
  const opciones = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
  };
  const formatoFechaHora = ahora.toLocaleDateString('es-ES', opciones);
  document.getElementById('reloj').innerHTML = formatoFechaHora;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función inmediatamente para evitar el retraso inicial
actualizarReloj();

//boton de imprimir formulario
function imprimirFormulario() {
  window.print();
}