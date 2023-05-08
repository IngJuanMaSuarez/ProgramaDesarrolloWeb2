// ********************* OPERADOR TERNARIO
// condicion ? si se cumple : si no se cumple
// edadUsuario >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

// ********************* SWITCH, CASE, BREAK
// Switch, Case, Break
// let opcion = parseInt(prompt("Ingrese una opcion del menu: 1. Hablar con un asesor. 2. Reclamos y quejas. 3. Suscribirse "))

// switch(opcion){
//     case 1:
//         console.log("Hablar con un asesor")
//         break
//     case 2:
//         console.log("Reclamos y quejas")
//         break
//     case 3:
//         console.log("Suscribirse")
//         break
//     default:
//         console.log("Opcion Invalida")
// }

// ********************* FOR

// for(let i = 1; i < 20; i++){
//     console.log(2*i)
// }

// for(let i = 10; i > 0; i--){
//     console.log(2*i)
// }

// console.log(2*i)
// console.log(2*1)
// console.log(2*2)
// console.log(2*3)
// console.log(2*4)
// console.log(2*5)
// console.log(2*6)
// console.log(2*7)
// console.log(2*8)
// console.log(2*9)
// console.log(2*10)

// ********************* WHILE

// let contador = 0

// while(contador < 20){
//     console.log(2 * contador)
//     contador = contador + 1
//     contador += 1
//     contador++
// }

// let contando = true
// let contador = 0

// while(contando){
//     console.log("Estoy contando")
//     contando = false
// }

// ********************* FIZZBUZZ

// for(let numero = 1; numero <= 100; numero++){
//     if(numero%3 == 0){
//         if(numero%5 == 0){
//             console.log("FizzBuzz")
//         } else {
//             console.log("Fizz")
//         }
//     } else if(numero%5 == 0){
//         console.log("Buzz")
//     } else {
//         console.log(numero)
//     }
// }

// ********************* Adivina el Número

let numeroMaquina = Math.floor(Math.random() * 20)
let jugando = true

function jugar(){

    const inputNumeroJugador = document.getElementById("numeroJugador")
    const txtMensajeResultado = document.getElementById("mensajeResultado")
    const numeroJugador = inputNumeroJugador.value

    if(numeroJugador < numeroMaquina){
        txtMensajeResultado.innerHTML = "Ingresa un numero mayor"
    } else if(numeroJugador > numeroMaquina){
        txtMensajeResultado.innerHTML = "Ingresa un numero menor"
    } else{
        txtMensajeResultado.innerHTML = "Ganaste"
    }
}