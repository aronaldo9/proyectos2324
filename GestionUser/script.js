// -------- Importaciones ----------
import  { users } from "./assets/modules.js";


// ---------------------------------

/**
 * @description:
 * Crear una función que le pase como parámetro un array de ojetos y me devuelva un Map cuya clave sea: 
 * "lastname_firstname" y cuyo valor sea "email" de aquellos usuarios que tengan email .es
 */

const first_lastnames = array => array.filter(elemento => !elemento.email.includes(".com")).reduce((acc, user) => {
    const { firstname, lastname, email } = user;
    acc.set(`${lastname} ${firstname}`, email);
    return acc;
  }, new Map());



const first_lastnames2 = array => array.filter(obj => obj.email.endsWith(".es"))
                                        .reduce((mapa,obj) => mapa.set(`${obj.lastname}_${obj.firstname}`, obj.email), new Map());



const buscarSpanishReduce = arr => 
arr
    .reduce(
        (miMap, { lastname, firstname, email }) => 
            email.slice(-3) === ".es" ? miMap.set(`${lastname}_${firstname}`, email) 
            : miMap,
        new Map() 
);

  console.log(first_lastnames(users));
  console.log(first_lastnames2(users));
  console.log(buscarSpanishReduce(users));