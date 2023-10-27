const Cita = {
    _dni: null,
    _nombrePaciente: null,
    _apellidosPaciente: null,
    _fecha: null,
    _hora: null,
  
    get dni() {
      return this._dni;
    },
    set dni(newDni) {
      this._dni = newDni;
    },
  
    get nombrePaciente() {
      return this._nombrePaciente;
    },
    set nombrePaciente(newNombrePaciente) {
      this._nombrePaciente = newNombrePaciente;
    },
  
    get apellidosPaciente() {
      return this._apellidosPaciente;
    },
    set apellidosPaciente(newApellidosPaciente) {
      this._apellidosPaciente = newApellidosPaciente;
    },
  
    get fecha() {
      return this._fecha;
    },
    set fecha(newFecha) {
      this._fecha = newFecha;
    },
  
    get hora() {
      return this._hora;
    },
    set hora(newHora) {
      this._hora = newHora;
    }
  };
  
  const CitaMedica = {
    _especialidad: null,
  
    obtenerInformacion() {
      return this;
    },
  
    citasMedicas: [],
  
    insertarCita(cita) {
      if (!CitaMedica.citasMedicas.some(existingCita => existingCita._dni === cita._dni)) {
        CitaMedica.citasMedicas.push(cita);
      } else {
        console.log("Ya existe una cita médica con este DNI.");
      }
    },
  
    backup() {
      localStorage.setItem("citasMedicas", JSON.stringify(CitaMedica.citasMedicas));
    }
  };
  
  Object.setPrototypeOf(CitaMedica, Cita);
  
  // Test para validar el uso de los objetos literales
  const nuevaCitaMedica = Object.create(CitaMedica);
  nuevaCitaMedica._dni = "987654321A";
  nuevaCitaMedica._nombrePaciente = "Alberto";
  nuevaCitaMedica._fecha = "11-11-2023";
  nuevaCitaMedica._hora = "11:40";
  nuevaCitaMedica._especialidad = "Endocrinología";
  
  const nuevaCitaMedica2 = Object.create(CitaMedica);
  nuevaCitaMedica2._dni = "987654321A";
  nuevaCitaMedica2._nombrePaciente = "Sara";
  nuevaCitaMedica2._fecha = "10-04-2024";
  nuevaCitaMedica2._hora = "10:00";
  nuevaCitaMedica2._especialidad = "Otorrino";
  
  const nuevaCitaMedica3 = Object.create(CitaMedica);
  nuevaCitaMedica3._dni = "12345678Z";
  nuevaCitaMedica3._nombrePaciente = "Manolo";
  nuevaCitaMedica3._fecha = "25-10-2023";
  nuevaCitaMedica3._hora = "10:00";
  nuevaCitaMedica3._especialidad = "Cardiología";
  
  CitaMedica.insertarCita(nuevaCitaMedica);
  CitaMedica.insertarCita(nuevaCitaMedica2);
  CitaMedica.insertarCita(nuevaCitaMedica3);
  
  CitaMedica.backup();