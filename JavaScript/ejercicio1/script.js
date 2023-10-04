/**
 * @author: AarónPF
 * @description: Cálculo del factorial de un número entero mayor o igual que 1.
 */

function factorial(num) {
    // número mayor o igual que 1
    let resultado = 1;

    if(num<1){
        return "El número debe ser mayor que 1";
    }
    for(i=1;i<=num;i++){
        resultado*=i;
    }
    return resultado;
    
};

function factorial2(num) {
    let a = 1;
    if(num<1){
        return;
    }
    for(i=num;i>=1;i--){
        a *= i;
    }
    return a;
}



function factorialRec(num) {
    if(typeof num === 'number') {
        if (num < 1) {
            return "El número debe ser mayor que 1";
        } else if (num === 1) {
            return 1;
        } else {
            return num * factorialRec(num - 1);
        }
    } else {
        return "El parámetro debe ser un número";
    }
    
};




function segundoGrado(a,b,c) {
    const d = b**2 - 4 * a * c;
    
    if(d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return `Las soluciones son ${x1} y ${x2}`;
        
    } else if(d === 0) {
        const x = -b / (2*a);
        return `La solución es ${x}`;
    } else {
        return "No tiene solución";
    }
}

console.log(factorial(10));
console.log(factorial2(5));
console.log(factorialRec(10));
console.log(segundoGrado(2,3,4));