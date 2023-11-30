// Declarar imgElement fuera de la función iniciarAplicacion
const imgElement = document.createElement('img');

/**
 * 
 * @param {*} url 
 * @returns 
 */
function cargarImagen(src) {
  return new Promise((resolve, reject) => {
    document.body.innerHTML = 'Loading...';
    const miImagen = new Image();
    miImagen.onload = () => resolve(miImagen);
    miImagen.onerror = () => reject(new Error("No se puede cargar"));

    setTimeout(() => {
      miImagen.src = src;
    }, 2000);
  });
}

// Función para iniciar la aplicación después de cargar la imagen
function iniciarAplicacion() {
  console.log('Aplicación iniciada.');
  // Puedes agregar lógica adicional para tu aplicación aquí
}

// Cargar la imagen y luego iniciar la aplicación
cargarImagen("/leo.jpg")
  .then((imagen) => {
    // Hacer algo con la imagen si es necesario
    console.log('Imagen cargada:', imagen);

    // Ocultar el mensaje "Loading..."
    document.body.innerHTML = '';

    // Asignar la imagen al elemento img
    imgElement.src = imagen.src;

    // Agregar el elemento img al cuerpo del documento
    document.body.appendChild(imgElement);

    // Iniciar la aplicación después de cargar la imagen
    iniciarAplicacion();
  })
  .catch((error) => {
    console.error('Error al cargar la imagen:', error.message);
  });
