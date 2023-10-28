export class Habitacion {
    constructor(tipo, precio) {
      this._tipo = tipo;
      this._precioPorNoche = precio;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    get precioPorNoche() {
      return this._precioPorNoche;
    }
  }
  
  export class Hotel {
    constructor(nombre, ciudad) {
      this._nombre = nombre;
      this._ciudad = ciudad;
      this._habitaciones = [];
    }
  
    agregarHabitacion(habitacion) {
      this._habitaciones.push(habitacion);
    }
  
    listarHabitaciones() {
      console.log(`Habitaciones disponibles en ${this._nombre} en la ciudad de ${this._ciudad}:`);
      this._habitaciones.forEach((habitacion, index) => {
        console.log(`${index + 1}. Tipo: ${habitacion.tipo}, Precio por noche: $${habitacion.precioPorNoche}`);
      });
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get ciudad() {
      return this._ciudad;
  }
  }
  
  export class Reserva {
    constructor(hotel, habitacion, fechaInicio, fechaFin) {
      this._hotel = hotel;
      this._habitacion = habitacion;
      this._fechaInicio = fechaInicio;
      this._fechaFin = fechaFin;
    }
  
    calcularCostoTotal() {
      const diasReserva = (this._fechaFin - this._fechaInicio) / (1000 * 60 * 60 * 24); // Convertir diferencia de fechas en días
      return this._habitacion.precioPorNoche * diasReserva;
    }
  
    get hotel() {
      return this._hotel;
    }
  
    get habitacion() {
      return this._habitacion;
    }
  
    get fechaInicio() {
      return this._fechaInicio;
    }
  
    get fechaFin() {
      return this._fechaFin;
    }
  }