/**
 * 
 * @param {*} url 
 * @returns 
 */
function cargarImagen(url) {
  return new Promise((resolve,reject) => {
    const miImagen = new Image();
    miImagen.onload = () => resolve(miImagen);
    miImagen.onerror = () => reject(new Error("No se puede cargar"));
    miImagen.src = url;

  });
}