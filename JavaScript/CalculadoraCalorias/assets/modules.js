// uso de herencia por prototipos con objetos LITERALES.
export const ComidaLiteral = {
    _nombre : "",
    _calorias : 0,

    get nombre() {
        return this._nombre;
    },
    set nombre(newNombre) {
        this._nombre = newNombre;
    },
    get calorias() {
        return this._calorias;
    },
    set calorias(newCalorias) {
        if(newCalorias >= 0) {
            this._calorias = newCalorias;
        }
        else {
            console.log("La cantidad de calorías debe ser mayor que 0");
        }        
    },

    // Método que devuelve la cantidad de calorías
    calcularCalorias() {
        return this._calorias;
    }
}


export const DietaLiteral = {
    _alimentosConsumidos : [],

    agregarAlimento(newComida) {
        this._alimentosConsumidos.push(newComida);
    },

    calcularTotalCalorias() {
        const totalCalorias = this._alimentosConsumidos.reduce( (acc,comida) => acc + comida._calorias,0);
        return totalCalorias;
    },

    listarAlimentosConsumidos() {
        console.log( this._alimentosConsumidos.map(comida => `Comida: ${comida._nombre}, Calorías: ${comida._calorias}`)); 
    }
}