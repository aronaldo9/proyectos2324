// OBJETO LITERAL

export const Calculadora = {
  num1 : 0,
  _num2 : 0,

  get num1() {
    return this._num1;
  },
  set num1(newNum1) {
    this._num1 = newNum1;
  },

  get num2() {
    return this._num2;
  },
  set num2(newNum2) {
    this._num2 = newNum2;
  },

  sumar() {
    return this._num1 + this._num2;
  },

  restar() {
    return this._num1 - this._num2;
  },

  multiplicar() {
    return this._num1 * this._num2;
  },

  dividir() {
    return this._num1 / this._num2;
  },

  calcularRaiz() {
    return Math.sqrt(this._num1);
  },

  calcularPotencia() {
    return this._num1 ** this._num2;
  }


}


// FUNCION CONSTRUCTORA
export function Calculadora(num1, num2) {
  this._num1 = num1;
  this._num2 = num2;
  
  Object.defineProperty(this, 'num1', {
    get() {
      return this._num1;
    },
    set(newNum1) {
      this._num1 = newNum1;
    }
  });

  Object.defineProperty(this, 'num2', {
    get() {
      return this._num2;
    },
    set(newNum2) {
      this._num2 = newNum2;
    }
  });

  Calculadora.prototype.sumar = function () {
    return this._num1 + this._num2;
  };
  
  Calculadora.prototype.restar = function () {
    return this._num1 - this._num2;
  };
  
  Calculadora.prototype.multiplicar = function () {
    return this._num1 * this._num2;
  };
  
  Calculadora.prototype.dividir = function () {
    return this._num1 / this._num2;
  };
  
  Calculadora.prototype.calcularRaiz = function () {
    return Math.sqrt(this._num1);
  };
  
  Calculadora.prototype.calcularPotencia = function () {
    return this._num1 ** this._num2;
  };
}


// CLASES
export class Calculadora {
  constructor(num1,num2) {
    this._num1 = num1;
    this._num2 = num2;
  }

  getNum1() {
    return this._num1;
  }
  setNum1(newNum1) {
    this._num1 = newNum1;
  }

  getNum2() {
    return this._num2;
  }
  setNum2(newNum2) {
    this._num2 = newNum2;
  }

  sumar() {
    return this._num1 + this._num2;
  }

  restar() {
    return this._num1 - this._num2;
  }

  multiplicar() {
    return this._num1 * this._num2;
  }

  dividir() {
    return this._num1 / this._num2;
  }

  calcularRaiz() {
    return Math.sqrt(this._num1);
  }

  calcularPotencia() {
    return this._num1 ** this._num2;
  }
}


