/**
 * @author: AarónPF
 * @description: Cálculo de la letra del dni
 */


const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
let dni = 0;

function calcularDNI(num) {
    const largo = ""+num;
    if(typeof num === 'number') {
        if(largo.length != 8) {
            return "El dni debe tener 8 dígitos";
        } else {
            const posicionLetra = num%23;
            const letra = letras[posicionLetra];
            return `El dni es: ${num}${letra}`;
            
        }
    }
    else {
        return "El parámetro debe ser un número";
    }
    
}

console.log(calcularDNI(44084737));
