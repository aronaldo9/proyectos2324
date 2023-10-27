class Cita {
  constructor(dni, nombre, fecha, hora) {
    this._dni = dni;
    this._nombre = nombre;
    this._fecha = fecha;
    this._hora = hora;
  }

  getDni() {
    return this._dni;
  }
  setDni(newDni) {
    this._dni = newDni;
  }

  getNombre() {
    return this._nombre;
  }
  setNombre(newNombre) {
    this._nombre = newNombre;
  }

  getFecha() {
    return this._fecha;
  }
  setFecha(newFecha) {
    this._fecha = newFecha;
  }

  getHora() {
    return this._hora;
  }
  setHora(newHora) {
    this._hora = newHora;
  }

}

class CitaMedica extends Cita{
    constructor (dni, nombre, fecha, hora, especialidad) {
        super(dni,nombre,fecha,hora);
        this._especialidad = especialidad;
    }

    getEspecialidad() {
        return this._especialidad;
    }
    setEspecialidad(newEspecialidad) {
        this._especialidad = newEspecialidad;
    }

    obtenerInformacion() {
        return this;
    };

    static CitasMedicas = [];

    static insertarCitas( cita) {
        if (
            !CitaMedica.CitasMedicas.some(
             (existsCita) => existsCita.getDni() === cita.getDni()
            )
        ) {
                CitaMedica.CitasMedicas.push(cita);
             } else {
            console.log("Error, el dni ya existe");
            }
    };

    static backup() {
        localStorage.setItem('CitasMedicas', JSON.stringify(CitaMedica.CitasMedicas));
    }

};

/// ---------- Test para validar el uso de las clases -----------

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
    "10-04_2024",
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