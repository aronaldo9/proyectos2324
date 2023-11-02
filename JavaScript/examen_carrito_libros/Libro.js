/**
 * @author: AarónPF
 * @description: Crea una función constructora llamada Libro que permita crear objetos de libro
 *  con determinadas propiedades
 */

export function Libro(ISBN,titulo,paginas,editorial,precio,stock) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._paginas = paginas;
    this._autor = {
        nombre: "",
        otrosLibros: [],
    };
    this._editorial = editorial;
    this._tags = [];
    this._precio = precio;
    this._valoracion = "";
    this._stock = stock;

    this.modificarPrecio = function(nuevoPrecio) {
        if(nuevoPrecio >= 0){
            this._precio = nuevoPrecio;
        }
        else {
            alert("El precio debe ser positivo");
        }        
    }

    this.modificarValoracion = function(nuevaValoracion) {
        if(nuevaValoracion < 1 && nuevaValoracion > 5) {
            alert("La valoración debe estar entre 1 y 5, inclusive");
        }
        else {
            this._valoracion = nuevaValoracion;
        }
    }

    this.modificarStock = function(nuevoStock) {
        if(nuevoStock >= 0) {
            this._stock = nuevoStock;
        }
        else {
            alert("El stock no puede ser negativo");
        }
    }

    this.addTags = function(nuevosTags) {
        if()
    }

}