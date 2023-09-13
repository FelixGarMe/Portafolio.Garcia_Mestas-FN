function saludar() {
    const mensaje = 'Muy pronto nos pondremos en contacto';
   const saludoElement = document.getElementById('saludo');
    saludoElement.textContent = mensaje;
  }
  const botonSaludo = document.getElementById('boton-saludo');
  botonSaludo.addEventListener('click', saludar);
