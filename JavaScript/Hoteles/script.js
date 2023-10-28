import { Habitacion, Hotel, Reserva } from "./assets/modules.js";

// Ejemplo de uso
const habitacionDoble = new Habitacion("Doble", 100);
const habitacionSuite = new Habitacion("Suite", 200);

const hotelEjemplo = new Hotel("Hotel Ejemplo", "Ejemploville");
hotelEjemplo.agregarHabitacion(habitacionDoble);
hotelEjemplo.agregarHabitacion(habitacionSuite);

hotelEjemplo.listarHabitaciones();

const fechaInicio = new Date('2023-11-01');
const fechaFin = new Date('2023-11-05');

const reserva = new Reserva(hotelEjemplo, habitacionDoble, fechaInicio, fechaFin);
const costoTotal = reserva.calcularCostoTotal();

console.log(`El costo total de la reserva es: $${costoTotal}`);