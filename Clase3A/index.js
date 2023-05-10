/*************** FUNCIONES */

// Invocar o llamar a la función
// saludar()

// Declarar la función (functión declarativa)
function saludar(){
    console.log("Bienvenidos desde función declarativa")
}

// Funcion de expresión
let mensaje = function(){
    console.log("Bienvenidos desde funcion de expresión")
}

// mensaje()

function sumar(numeroUno, numeroDos){
    let suma = numeroUno + numeroDos
    return suma
}

let bienvenida = function(nombre){
    let mensaje = "Bienvenida " + nombre
    return mensaje
}