export function Cita(dni, nombrePaciente, apellidosPaciente, fecha, hora) {
  this._dni = dni;
  this._nombrePaciente = nombrePaciente;
  this._apellidosPaciente = apellidosPaciente;
  this._fecha = fecha;
  this._hora = hora;

  Object.defineProperty(this, 'dni', {
      get() {
          return this._dni;
      },
      set(newDni) {
          this._dni = newDni;
      }
  });

  Object.defineProperty(this, 'nombrePaciente', {
      get() {
          return this._nombrePaciente;
      },
      set(newNombrePaciente) {
          this._nombrePaciente = newNombrePaciente;
      }
  });

  Object.defineProperty(this, 'apellidosPaciente', {
      get() {
          return this._apellidosPaciente;
      },
      set(newApellidosPaciente) {
          this._apellidosPaciente = newApellidosPaciente;
      }
  });

  Object.defineProperty(this, 'fecha', {
      get() {
          return this._fecha;
      },
      set(newFecha) {
          this._fecha = newFecha;
      }
  });

  Object.defineProperty(this, 'hora', {
      get() {
          return this._hora;
      },
      set(newHora) {
          this._hora = newHora;
      }
  });
}

export function CitaMedica(dni, nombrePaciente, apellidosPaciente, fecha, hora, especialidad) {
  Cita.call(this, dni, nombrePaciente, apellidosPaciente, fecha, hora);
  this._especialidad = especialidad;

  Object.defineProperty(this, 'especialidad', {
      get() {
          return this._especialidad;
      },
      set(newEspecialidad) {
          this._especialidad = newEspecialidad;
      }
  });
}

  CitaMedica.prototype.obtenerInformacion = function () {
      return this;
  };

  CitaMedica.citasMedicas = [];

  CitaMedica.insertarCita = function (cita) {
      if (
          !CitaMedica.citasMedicas.some(
            (existingCita) => existingCita._dni === cita._dni
          )
        ) {
          CitaMedica.citasMedicas.push(cita);
        } else {
          console.log("Ya existe una cita médica con este DNI.");
        }
      };

  // Función Estática para realizar el respaldo de citas médicas en el LocalStorage
  // La podía haber sacado fuera pasándole una key="citaMedica" y el array.
  // Lo pongo aquí para no crear un fichero modules con dicha función.
  CitaMedica.backup = function () {
      localStorage.setItem("citasMedicas", JSON.stringify(CitaMedica.citasMedicas));
  };


CitaMedica.prototype = Object.create(Cita.prototype);
CitaMedica.prototype.constructor = CitaMedica;

// Test para validar el uso de las funciones constructoras
const nuevaCitaMedica = new CitaMedica(
  "987654321A",
  "Alberto",
  "11-11-2023",
  "11:40",
  "Endocrinología"
);
const nuevaCitaMedica2 = new CitaMedica(
  "987654321A",
  "Sara",
  "10-04-2024",
  "10:00",
  "Otorrino"
);
const nuevaCitaMedica3 = new CitaMedica(
  "12345678Z",
  "Manolo",
  "25-10-2023",
  "10:00",
  "Cardiología"
);

CitaMedica.insertarCita(nuevaCitaMedica);
CitaMedica.insertarCita(nuevaCitaMedica2);
CitaMedica.insertarCita(nuevaCitaMedica3);

CitaMedica.backup();

