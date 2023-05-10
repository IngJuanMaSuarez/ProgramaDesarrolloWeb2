const inputNumeroJugador = document.getElementById("numeroJugador")
const txtMensajeResultado = document.getElementById("mensajeResultado")
const txtNumeroDeIntentos = document.getElementById("numeroDeIntentos")
const btnBotonJugar = document.getElementById("botonJugar")
const btnBotonReiniciar = document.getElementById("botonReiniciar")

let numeroDeIntentos = 1

numeroMaquina = generarNumeroMaquina()

function jugar(){
    numeroJugador = solicitarNumeroUsuario()
    compararNumeros(numeroJugador, numeroMaquina)
}

function generarNumeroMaquina(){
    let numeroMaquina = Math.floor(Math.random() * 20)
    return numeroMaquina
}

function solicitarNumeroUsuario(){
    let numeroJugador = inputNumeroJugador.value
    return numeroJugador
}

function compararNumeros(numeroJugador, numeroMaquina){
    if(numeroJugador < numeroMaquina){
        txtMensajeResultado.innerHTML = "Ingresa un numero mayor"
        numeroDeIntentos++
    } else if(numeroJugador > numeroMaquina){
        txtMensajeResultado.innerHTML = "Ingresa un numero menor"
        numeroDeIntentos++
    } else{
        txtMensajeResultado.innerHTML = "Ganaste"
        txtNumeroDeIntentos.innerHTML = "Lo lograste en " + numeroDeIntentos + " intentos"
        btnBotonJugar.style.display = "none"
        btnBotonReiniciar.style.display = "block"
    }
}

function reiniciar(){
    location.reload()
}