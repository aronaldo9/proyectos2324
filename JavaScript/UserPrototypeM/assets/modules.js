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
        this.validarDni(newDni) ? (this._dni = newDni) : false;
        
    },
    validarDni(miDni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const dniN = miDni.slice(0, 8);
        const dniL = (miDni.slice(-1)).toUpperCase();
        if(letras.charAt(dniN % 23) === dniL) {
            return true;
        }
        return false;
    },
    mostrarInfo() {
        return `Nombre: ${this.nombre} \n Edad: ${this.edad} \n Dni: ${this.dni}`;
    },
};





// uso de herencia por prototipos con FUNCIONES CONSTRUCTORAS.

export function UsuarioFuncional(nombre, edad=0) {
    this._nombre = nombre;
    this._edad = edad;
    this._dni = "";

    // Getter y setter para el nombre
    Object.defineProperty(this,"nombre", {
        get : function() {
            return this._nombre;
        },
        set : function(nuevoNombre) {
            this._nombre = nuevoNombre;
        },
    });

    Object.defineProperty(this,"edad", {
        get : function() {
            return this._edad;
        },
        set : function(nuevaEdad) {
            if(nuevaEdad  >= 0) {
                this._edad = nuevaEdad;
            }else {
                console.error("La edad debe ser un número positivo");
            }
        },
    });

    Object.defineProperty(this,"dni", {
        get : function() {
            return this._dni;
        },
        set : function(nuevoDni) {
            const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            const dniN = miDni.slice(0, 8);
            const letraCalculada = letras[dniN % 23];
            if(nuevoDni.length === 9 && nuevoDni[8] === letraCalculada) {
                this.dni = nuevoDni;
            }
            else{
                console.log("El dni no es correcto");
            }

        },
    });

}

// puedo añadir las propiedades prototipales a posteriori de la siguiente forma
UsuarioFuncional.prototype.mostrarInfo = function () {
    console.log(
        `Bienvenido ${this.nombre}, usted tiene ${this.edad} años y su Dni es ${this.dni}`
    );
};

// para crear un método estático se haría así, y estaría disponible sólo en la función constructora
UsuarioFuncional.saludo = function () {
    return "Hola mundo";
};



// uso de herencia por prototipos con CLASS.
export class UsuarioClases {
    constructor(nombre = "", edad = 0) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = "";
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    get dni() {
        return this._dni;
    }
    set dni(nuevoDni) {
        this._dni = this.validarDni(nuevoDni);
    }

    validarDni(miDni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const dniN = parseInt(miDni.slice(0, 8), 10);
        const dniL = (miDni.slice(-1)).toUpperCase();
        if(letras.charAt(dniN % 23) === dniL) {
            return true;
        }
        return false;
    }
}