function CrearAlumno(nombre,identificacion,correo,asistencia,nota1,nota2,nota3, promedio){
    this.nombre = nombre
    this.identificacion = identificacion
    this.correo = correo
    this.asistencia = asistencia
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3
    this.promedio = promedio
}

let promedio = (CrearAlumno.nota1 + CrearAlumno.nota2 + CrearAlumno.nota3)/3

