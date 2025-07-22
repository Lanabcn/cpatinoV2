//  Mostra alerta cuando se envía el formulario correctamente

const form = document.querySelector("form");
form.addEventListener("submit", function (e) 
  {alert("Gracias por tu mensaje. Te responderemos pronto.");});

  //  Valida formulario antes de enviar 

form.addEventListener("submit", function (e)
 {const nombre = document.getElementById("nombre").value.trim();// Elimina espacios al inicio y al final del texto del campo 'mensaje'
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") 
        {e.preventDefault();//  preventDefault evita que el formulario se envíe automáticamente 
        alert("Por favor, completa todos los campos obligatorios.");}});
 