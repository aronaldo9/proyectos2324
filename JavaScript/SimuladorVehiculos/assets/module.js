// uso de herencia por prototipos con objetos LITERALES.

export const VehiculoLiteral = {
    _marca : "",
    _modelo : "",
    _año : 0,

    get marca() {
        return this._marca;
    },
    set marca(newMarca) {
        this_marca = newMarca;
    },
    get modelo() {
        return this._modelo;
    },
    set modelo(newModelo) {
        this._modelo = newModelo;
    },
    get año() {
        return this._año;
    },
    set año(newAño) {
        this._año = newAño;
    },
    acelerar() {
        console.log("Acelerando...");
    }
}

// Clase derivada Coche con objeto literal
export const CocheLiteral = {
    // Heredar propiedades de Vehiculo
    ...VehiculoLiteral,
    // Método específico para arrancar el coche
    arrancar() {
      console.log("Arrancando el coche");
    },
    frenar() {
        console.log("Frenando el coche");
    },
};

// Clase derivada Moto con objeto literal
export const MotoLiteral = {
    // Heredar propiedades de Vehiculo
    ...VehiculoLiteral,
    // Método específico para arrancar la moto
    arrancar() {
        console.log("Arrancando la moto");
    },
    frenar() {
        console.log("Arrancando la moto");
    }
  };

// Crear instancias de Coche y Moto
const miCoche = { ...CocheLiteral, marca: "Ford", modelo: "Focus", año: 2022 };
const miMoto = { ...MotoLiteral, marca: "Honda", modelo: "CBR", año: 2021 };

// Usar métodos
miCoche.acelerar();
miCoche.arrancar();
miCoche.frenar();
miMoto.acelerar();
miMoto.arrancar();
miMoto.frenar();


// uso de herencia por prototipos con FUNCIONES CONSTRUCTORAS.
export function VehiculoFuncional(marca,modelo,año) {
    this._marca = marca;
    this._modelo = modelo;
    this._año = año;

    // Getters y Setters
    Object.defineProperty(this,"marca", {
        get : function() {
            return this._marca;
        },
        set : function(newMarca) {
            this._marca = newMarca;
        },
    });
    Object.defineProperty(this,"modelo", {
        get : function() {
            return this._modelo;
        },
        set : function(newModelo) {
            this._modelo = newModelo;
        },
    });
    Object.defineProperty(this,"año", {
        get : function() {
            return this._año;
        },
        set : function(newAño) {
            this._año = newAño;
        },
    });    

}

VehiculoFuncional.prototype.acelerar = function () {
    console.log("Acelerando el vehículo");
};

// Clase derivada Coche con constructor
export function CocheFuncional(marca, modelo, año) {
    Vehiculo.call(this, marca, modelo, año);
};

// Coche Hereda de Vehiculo
CocheFuncional.prototype = Object.create(VehiculoFuncional.prototype);
// Métodos específicos para arrancar y frenar el coche
CocheFuncional.prototype.arrancar = function () {
    console.log("Arrancando el coche");
};
CocheFuncional.prototype.frenar = function () {
    console.log("Frenando el coche");
};


// Moto Hereda de Vehiculo
MotoFuncional.prototype = Object.create(VehiculoFuncional.prototype);

// Métodos específicos para arrancar y frenar la moto
MotoFuncional.prototype.arrancar = function () {
  console.log("Arrancando la moto");
};
MotoFuncional.prototype.frenar = function () {
    console.log("Frenando la moto");
};


// Crear instancias de Coche y Moto
const miCoche1 = new CocheFuncional("Ford", "Focus", 2022);
const miMoto1 = new MotoFuncional("Honda", "CBR", 2021);

// Usar métodos
miCoche1.acelerar();
miCoche1.arrancar();
miCoche1.frenar();
miMoto1.acelerar();
miMoto1.arrancar();
miMoto1.frenar();


// Clase base Vehiculo con clase
class VehiculoClases {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    acelerar() {
      console.log("Acelerando el vehículo");
    }
  }
  
  // Clase derivada Coche con clase
  class CocheClases extends VehiculoClases {
    arrancar() {
      console.log("Arrancando el coche");
    }
    frenar() {
        console.log("Frenando el coche");
    }
  }
  
  // Clase derivada Moto con clase
  class MotoClases extends VehiculoClases {
    arrancar() {
      console.log("Arrancando la moto");
    }
    frenar() {
        console.log("Frenando la moto");
    }
  }
  
  // Crear instancias de Coche y Moto
  const miCoche2 = new CocheClases("Ford", "Focus", 2022);
  const miMoto2 = new MotoClases("Honda", "CBR", 2021);
  
  // Usar métodos
  miCoche2.acelerar();
  miCoche2.arrancar();
  miCoche2.frenar();
  miMoto2.acelerar();
  miMoto2.arrancar();
  miMoto2.frenar();
