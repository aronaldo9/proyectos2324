# Ejercicios Callbacks

## 1. Ejercicio1

**Enunciado:**
Crear una función llamada realizar operación que tome dos números y un callback y me dvuelva la suma de dichos números pasados 1 segundo

```javascript
    import  pintarCallbacks  from "./components/pintarCallback.js";

    // componentes del DOM
    const divApp = document.getElementById('app');

    function realizarOperacion(num1, num2, callback) {  
    setTimeout(() => {
        const resultado = num1 + num2;
        callback(resultado);
    }, 1000);
    }

    function imprimirSumaCallback(resultado,callback) {
    pintarCallbacks(resultado,divApp);
    }

    realizarOperacion(7,3,imprimirSumaCallback);


```

## 2. Ejercicio2

**Enunciado:**
Crear una función llamada filtrarParesAsync que tome un array y un callback. La función tiene que devolver 
un nuevo arreglo con los números pares después de 2 segs

```javascript
    function filtrarParesAsync(numeros,callback) {
    setTimeout(() => {
        const numerosPares = numeros.filter(n => n % 2 === 0);
        callback(numerosPares);
    }, 2000);
    }

    filtrarParesAsync([1,2,3,4,5,6,7,8], function(pares) {
    console.log("Los números pares son:",pares);
    pintarCallbacks(pares,divApp);

    })

```


## 3. Ejercicio3

**Enunciado:**
Crear una función llamada iterarSync que tome un array y un callback. La función debe de ejecutar el callback para cada elemento del array y hacer algo con él, después de 1,5 segundos

```javascript
        function iterarSync(miArray,callback) {
    miArray.forEach((element,indice) => {
        setTimeout(() => {
        callback(element)
        }, 1500*(indice+1));
    });

    /**
     * versión con map
     * miArray.map(elemento)=> {
     *  setTimeout(() => 
     *    callback(elemento);
     * }, 1500 * (miArray[elemento] + 1));
     * )};
     */
    }

    iterarSync([1,2,3,4,5], function(dato) {
    console.log("Pinto el dato",dato);
    pintarCallbacks(dato,divApp);
    });

```


## 4. Ejercicio4

**Enunciado:**
Crear una función llamada validarUsuarioAsync que tome nombre de un usuario y un callback. La función debe validar el usuario despues de 2segs y llamar al callback con un mensaje "usuario válido" o "usuario inválido"