document.getElementById('nuevoEstudiante').addEventListener('click', crearEstudiante)
document.getElementById('asistencia').addEventListener('click', registroAsistencia)

function crearEstudiante() {
    //capturar dato
    let nombres = document.getElementById('nombres').value
    let identificacion = document.getElementById('identificacion').value
    let email = document.getElementById('email').value

    let nodoNombre = document.createElement('tr')
    let nodoNombreTexto = document.createTextNode(nombres)
    nodoNombre.appendChild(nodoNombreTexto)
    document.getElementById('listaNombre').appendChild(nodoNombre)

    let nodoIdentificacion = document.createElement('tr')
    let nodoIdentificacionTexto = document.createTextNode(identificacion)
    nodoIdentificacion.appendChild(nodoIdentificacionTexto)
    document.getElementById('listaIdentificacion').appendChild(nodoIdentificacion)

    let nodoCorreo = document.createElement('tr')
    let nodocorreoTexto = document.createTextNode(email)
    nodoCorreo.appendChild(nodocorreoTexto)
    document.getElementById('listaCorreo').appendChild(nodoCorreo)

    document.getElementById('nombres').value = ''
    document.getElementById('identificacion').value = ''
    document.getElementById('email').value = ''
}
