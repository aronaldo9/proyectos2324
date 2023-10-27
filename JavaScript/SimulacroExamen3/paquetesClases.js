class Paquete {
    constructor(destino, peso) {
      this._id = Math.floor(Math.random() * 1000) + new Date().getFullYear();
      this._destino = destino;
      this._peso = peso;
    }

    getId(){
        return this._id;
    }
    
    getDestino() {
        return this._destino;
    }
    setDestino(newDestino) {
        this._destino = newDestino;
    }

    getPeso() {
        return this._peso;
    }
    setPeso(newPeso) {
        this._peso = newPeso;
    }

}


class PaqueteLejano extends Paquete {
    constructor(destino, peso, distancia) {
      super(destino, peso);
      this._distancia = distancia;
    }

    getDistancia() {
        return this._distancia;
    }
    setDistancia(newDistancia) {
        this._distancia = newDistancia;
    }

    static calcularTarifa(paquete) {
        const peso = paquete.getPeso();
        if (peso < 1) {
          return 5;
        } else if (peso < 5) {
          return 8;
        } else {
          return 10;
        }
      }

    static paquetes = [];

    static insertarPaquetes(paquete) {
        if (
            !PaqueteLejano.paquetes.some(
             (existsPaquete) => existsPaquete.getId() === paquete.getId()
            )
        ) {
                PaqueteLejano.paquetes.push(paquete);
             } else {
            console.log("Error, el id ya existe");
            }
    };


    static backup() {
        localStorage.setItem('paquetes', JSON.stringify(PaqueteLejano.paquetes));
    }

    static calcularTarifaTotal() {
        return PaqueteLejano.paquetes.reduce((totalTarifa, paquete) => {
          return totalTarifa + PaqueteLejano.calcularTarifa(paquete);
        }, 0);
      }
}


// ----------------- TEST --------------------
const nuevoPaqueteLejano = new PaqueteLejano("Cuenca", 0.2, 215);
const nuevoPaqueteLejano2 = new PaqueteLejano("Teruel",2 , 415);
const nuevoPaqueteLejano3 = new PaqueteLejano("Pontevedra", 12, 615);

console.log(nuevoPaqueteLejano);

PaqueteLejano.insertarPaquetes(nuevoPaqueteLejano);
PaqueteLejano.insertarPaquetes(nuevoPaqueteLejano2);
PaqueteLejano.insertarPaquetes(nuevoPaqueteLejano3);


const tarifaPaquete1 = PaqueteLejano.calcularTarifa(nuevoPaqueteLejano);
const tarifaPaquete2 = PaqueteLejano.calcularTarifa(nuevoPaqueteLejano2);
const tarifaPaquete3 = PaqueteLejano.calcularTarifa(nuevoPaqueteLejano3);

console.log("Tarifa del paquete 1:", tarifaPaquete1);
console.log("Tarifa del paquete 2:", tarifaPaquete2);
console.log("Tarifa del paquete 3:", tarifaPaquete3);


PaqueteLejano.backup();
console.log(PaqueteLejano.calcularTarifaTotal());

