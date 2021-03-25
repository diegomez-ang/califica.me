/* ------ LOGIN DE USUARIOS -----*/

let usuarios = ['PAOLA', 'DIEGO', 'LEIDY', 'OSCAR']

/* document.getElementById('iniciarSesion').addEventListener('click', loginUser) */
$("#iniciarSesion").click(loginUser)

function loginUser() {
    //var nombre = document.getElementById('Usuario').value
    var nombre = $('#Usuario').val()
    
    for (let i = 0; i < usuarios.length; i++) {
        
        if (nombre.toUpperCase() == 'DIEGO') {

            top.location.href = './notas_final.html'
            console.log("hola diego")

        }
        else{
            $('#error').fadeIn()
            break
        }
    }
}

