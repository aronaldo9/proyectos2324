export class Empleado {
    constructor(nombre, salario) {
        this._nombre = nombre;
        this._salario = salario;
    }

    getNombre() {
        return this._nombre;
    }
    setNombre(newNombre) {
        this._nombre = newNombre;
    }

    getSalario() {
        return this._salario;
    }
    setSalario(newSalario) {
        this._salario = newSalario;
    }

    obtenerInformacion(){
        return this;
    }

    static empleados = [];

    static agregarEmpleados(empleado) {
        if(
            !Empleado.empleados.some(
                (existingEmpleado) => existingEmpleado.getNombre() === empleado.getNombre()
            )
            ) {
                Empleado.empleados.push(empleado);
            } else {
                console.log("Error, el empleado ya existe");
            }
    }

    static calcularSalarios() {
        const salariosTotales = Empleado.empleados.reduce( (salarioTotal,empleado) => 
            salarioTotal + empleado.getSalario(),0);
        return `La suma de los salarios es ${salariosTotales} `;
    }

    static mostrarInformacion() {
        return Empleado.empleados.map( (empleado) => empleado.obtenerInformacion());
    }

}

export class Gerente extends Empleado {
    constructor(nombre,salario,subordinados) {
        super(nombre,salario);
        this._subordinados = subordinados;
    }

    getSubordinados(){
        return this._subordinados;
    }
    setSubordinados(newSubordinados) {
        this._subordinados = newSubordinados;
    }
}

export class Desarrollador extends Empleado {
    constructor(nombre,salario,lenguaje) {
        super(nombre,salario);
        this._lenguaje = lenguaje;
    }

    getLenguaje() {
        return this._lenguaje;
    }
    setLenguaje(newLenguaje) {
        this._lenguaje = newLenguaje;
    }

}