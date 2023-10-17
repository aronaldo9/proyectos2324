// uso de herencia por prototipos con objetos LITERALES.

export const usuarioLiteral = {
    _nombre : "",
    _edad: 0,
    _dni : "",
    // init: function (nombre,edad,dni){
    //     this._nombre = nombre,
    //     this._edad = edad,
    //     this._dni = dni,
    // }

    get nombre() {
        return this._nombre;
    },
    set nombre(newNombre) {
        this._nombre = newNombre;
    },
    get edad() {
        return this._edad;
    },
    set edad(newEdad) {
        this._edad = newEdad;
    },
    get dni() {
        return this._dni;
    },
    set dni(newDni) {
        // aquí tenemos que validar que newDni es correcto
        this.validarDni(newDni) ? this._dni = newDni : false;
    },
    validarDni(miDni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const dniN = miDni.slice(0,8);
        const dniL = (miDni.slice(-1)).toUpperCase();
        if(letras.charAt(dniN % 23) === dniL) {
            return true;
        }
        return false;
    },
    mostrarInfo() {
        return `Nombre: ${this.nombre} \t\t Edad: ${this.edad} \t\t Dni: ${this.dni}`;
    },
};





// uso de herencia por prototipos con FUNCIONES CONSTRUCTORAS.





// uso de herencia por prototipos con CLASS.