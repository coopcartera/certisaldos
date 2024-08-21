//genera el radicado
function generarRadicado() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let radicado = '';
    for (let i = 0; i < 10; i++) {
        radicado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('radicado').value = radicado;
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