/**
 * @author: AarónPF
 * @description: Crea una clase llamada Carrito que representará un carrito de compras. El carrito estará
 * implementado como un array de objetos.
 */

import { Libro } from './Libro.js';

export class Carrito {
    constructor() {
        this._carrito = [];
        this._libros = bdExamen.libros;
    }

    agregarProducto(ISBN, cantidad) {
        // Verificar si el libro existe y hay suficiente stock disponible
        const libro = this._libros.find((libro) => libro.ISBN === ISBN);

        if(!libro) {
            alert("El libro no existe en la base de datos");
            return;
        }
        else if(cantidad > libro.stock) {
            alert("No hay stock suficiente");
            return;
        }
        else {
            this._carrito.push({ISBN,cantidad});
            libro.stock -= cantidad;
        }

    }

    eliminarProducto(ISBN) {
        const index = this._carrito.findIndex((item) => item.ISBN === ISBN);
    
        if (index !== -1) {
            const { cantidad } = this._carrito[index];
            const libro = this._libros.find((libro) => libro.ISBN === ISBN);
            libro.stock += cantidad;
    
            this._carrito.splice(index, 1);
        }
    }

    agregarDescuento() {
        // Aplicar un 10% de descuento si hay más de 3 libros en el carrito
        if (this._carritocarrito.length > 3) {
          this._carrito.forEach((item) => {
            item.libro.precio *= 0.9;
          });
        } 
    }

    calcularTotalCarrito() {
        // Calcular el precio total de los productos en el carrito con descuentos e impuestos
        let subtotal = 0;
    
        this._carrito.forEach((item) => {
            const { libro, cantidad } = item;
            let precioConDescuento = libro.precio;
    
            if (this._carrito.length > 3) {
                // Aplicar un 10% de descuento si hay más de 3 libros
                precioConDescuento *= 0.9;
            }
    
            subtotal += precioConDescuento * cantidad;
        });
    
        const impuesto = subtotal * 0.1; // 10% de impuesto
    
        return subtotal + impuesto;
    }
    

}