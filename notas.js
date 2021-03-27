/* document.getElementById('nuevoEstudiante').addEventListener('click', crearEstudiante)
document.getElementById('asistencia').addEventListener('click', registroAsistencia) */




$('#nuevoEstudiante').click(crearEstudiante)

function crearEstudiante() {
    //capturar dato


    let nombres = $('#nombres').val()
    let identificacion = $('#identificacion').val()
    let email = $('#email').val()
    let checkbox = $('#table-checkbox')

    /* console.log($('#nombres').val())
    console.log($('#identificacion').val())
    console.log($('#email').val()) */

    if (nombres || identificacion || email != null || " ") {
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

        /* let nodoCheckbox = document.createElement('input')
        nodoCheckbox.setAttribute("type", "checkbox")
        let nodoCheckboxText = document.createTextNode(checkbox)
        nodoCheckbox.appendChild(nodoCheckboxText)
        document.getElementById('table-checkbox').appendChild(nodoCheckbox) */

        $('#nombres').val('')
        $('#identificacion').val('')
        $('#email').val('')
        $('#notificacion').fadeIn()
        $('#listaNombre').fadeIn()
        $('#listaIdentificacion').fadeIn()
        $('#listaCorreo').fadeIn()

        $.notify("Usuario creado con exito", "success")
      
    }
    else {
        $.notify("Llena todos los campos","info")

    }


}

