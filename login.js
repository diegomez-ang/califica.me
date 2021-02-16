/* ------ LOGIN DE USUARIOS -----*/

let usuarios = ['PAOLA', 'DIEGO', 'LEIDY', 'OSCAR']

document.getElementById('iniciarSesion').addEventListener('click', loginUser)

function loginUser() {
    var nombre = document.getElementById('Usuario').value
    
    for (let i = 0; i < usuarios.length; i++) {
        
        if (nombre.toUpperCase() == 'DIEGO') {
            top.location.href = './notas.html'
            console.log("hola diego")

        }
        else{
            alert('El usuario no existe')
            break
        }
    }
}

