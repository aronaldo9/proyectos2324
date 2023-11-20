import { use } from "echarts";
import { users } from "../assets/users";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const pintarUsersJson = ( element ) => {
    fetchApiJson(userURL)
        .then((users) => {
            users.forEach(user => {
               element.innerHTML += `<`  
            });
        })
        .catch((err) => console.error(err));
};



/**
 * crear una función que le pase una url y que a través de una promesa obtenga todos los usuarios de json
 * de la url jsonplaceholders
 */

const userURL = "https://jsonplaceholder.org/users";

// función para realizar una petición http con fetch y promesas
function fetchApiJson(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}


/**
 * Crear un proyecto en vite q permita gestionar el estado meteorológico de una ciudad a través de la api 
 * openweathermap(v 2.0). El proyecto debe cubrir las siguientes características: 
 * 1) dispondremos de un input centrado horizontalmente y un botón de buscar ciudad. 
 * Cuando escribamos el nombre de una ciudad, si existe, mostrará los siguientes datos en una tarjeta o 
 * card: nombre ciudad, icono tiempo, y los datos más relevantes con algún icono.
 * La búsqueda de la ciudad se realizará al pulsar la tecla enter o al hacer clic en el botón
 * 
 */