// uso de herencia por prototipos con objetos LITERALES.

export const libroLiteral = {
    _titulo : "",
    _autor : "",
    _precio : 0,

    get titulo() {
        return this._titulo;
    },
    set titulo(newTitulo) {
        this._titulo = newTitulo;
    },
    get autor() {
        return this._autor;
    },
    set autor(newAutor) {
        this._autor = newAutor;
    },
    get precio() {
        return this._precio;
    },
    set precio(newPrecio) {
        this.validarPrecio(newPrecio) ? this._precio = newPrecio : alert("Debes introducir un número");
    },

    validarPrecio(newPrecio) {
        if(typeof newPrecio === 'number' && newPrecio > 0){
            return true;
        } 
        return false;
    },
    mostrarInfo() {
        return `Título: ${this.titulo} \n Autor: ${this.autor} \n Precio: ${this.precio}`;
    },
}


// uso de herencia por prototipos con FUNCIONES CONSTRUCTORAS.
export function LibroFuncional(titulo,autor,precio) {
    this._titulo = titulo;
    this._autor = autor;
    this._precio = precio;

    // Getters y Setters
    Object.defineProperty(this,"titulo", {
        get : function () {
            return this._titulo;
        },
        set : function (nuevoTitulo) {
            this._titulo = nuevoTitulo;
        },
    });

    Object.defineProperty(this,"autor", {
        get : function () {
            return this._autor;
        },
        set : function (nuevoAutor) {
            this._autor = nuevoAutor;
        },
    });

    Object.defineProperty(this,"precio", {
        get : function() {
            return this._precio;
        },
        set : function(nuevoPrecio) {
            if(nuevoPrecio  > 0) {
                this._precio = nuevoPrecio;
            }else {
                console.error("El precio debe ser un número positivo");
            }
        },
    });
}


// uso de herencia por prototipos con CLASS.
export class LibroClases {
    constructor(titulo,autor,precio) {
        this._titulo = titulo;
        this._autor = autor;
        this._precio = precio;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }
    get autor() {
        return this._autor;
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }
    get precio() {
        return this._precio;
    }
    set precio(nuevoPrecio) {
        if(nuevoPrecio >0) {
            this._precio = nuevoPrecio;
        }
        else {
            console.log("El precio debe ser mayor que 0");
        }
    }
}