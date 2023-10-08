/**
 * @author: AarónPF
 * @description: Escribe una función que tome un objeto. Debería devolver el valor de la propiedad
 * cuya clave sea pais. Si no existiese dicha clave devolvería : "No se encuentra". 
 * Objeto: { continente: "Europa", pais: "España"}
 */

const objeto = {
    continente: "Europa",
    pais: "España",
};

function devolverPais (objeto) {
    const { pais = "No se encuentra" } = objeto;
    return pais;
}

console.log(devolverPais(objeto));