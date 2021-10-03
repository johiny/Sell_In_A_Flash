document.getElementById("actualizar_datos").addEventListener('submit', function(e)){
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const cargo = document.getElementById("cargo").value;
    const rol = document.getElementById("rol").value;
    const estado = document.getElementById("estado").value;
    alert('datos actualizados')
    const usuario = new Usuario(cedula, nombre, apellidos, correo, telefono,cargo,rol,estado);
    e.preventDefault();
}

class Usuario {
    constructor(cedula, nombre, apellidos, correo, telefono,cargo,rol,estado){
        this.id = cedula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.telefono = telefono;
        this.cargo = cargo;
        this.rol = rol;
        this.estado = estado;
    }
}