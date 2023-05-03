// Declaro una variable que almacena el valor que ingresa el usuario
// var nombreUsuario = prompt("Ingresa tu nombre")
// var edadUsuario = prompt("Ingresa tu edad")

// ********************* IF, ELSE

// Si el usuario ingresa un numero menor de 18, se ejecuta el if
// Caso contrario se ejecuta el else
/* if(edadUsuario >= 18){
    // alert(edadUsuario + " eres mayor de edad")
    console.log(nombreUsuario + " eres mayor de edad")
} else {
    // alert(edadUsuario + " eres menor de edad")
    console.log(nombreUsuario + " eres menor de edad")
} */

// ********************* IF, ELSE IF, ELSE

// Declaro una variable que almacena el valor que ingresa el usuario
/*var nombreUsuario = prompt("Ingresa tu nombre")
var edadUsuario = prompt("Ingresa tu edad")

if(edadUsuario <= 2){
    console.log(nombreUsuario + " eres un bebe")
} else if(edadUsuario <= 11){
    console.log(nombreUsuario + " eres un niño")
} else if(edadUsuario <= 14){
    console.log(nombreUsuario + " eres un pre adolescente")
} else if(edadUsuario <= 25){
    console.log(nombreUsuario + " eres un adolescente")
} else if(edadUsuario <= 60){
    console.log(nombreUsuario + " ares un adulto")
} else {
    console.log(nombreUsuario + " eres un adulto mayor")
}*/

// ********************* Ejemplo Convertir a Dolares

/* var sueldoPesosColombianos = prompt("Ingrese su sueldo en pesos colombianos")

// 4.600 pesos colombianos = 1 dolar
// 1.500.000 pesos colombianos = ???
var sueldoDolares = sueldoPesosColombianos / 4600

alert("Su sueldo en dolares es " + sueldoDolares) */

// ********************* Ejemplo Convertir a Varias Divisas

var sueldoPesosColombianos = prompt("Ingrese su sueldo en pesos colombianos")
var divisaSeleccionada = prompt("Ingrese la divisa deseada: 1: Dolar. 2: Euro. 3: Yen")

if(divisaSeleccionada == 1){
    var sueldoDolares = sueldoPesosColombianos / 4600
    alert("Su sueldo en dolares es " + sueldoDolares)
} else if(divisaSeleccionada == 2){
    var sueldoEuros = sueldoPesosColombianos / 5171
    alert("Su sueldo en euros es " + sueldoEuros)
} else if(divisaSeleccionada == 3){
    var sueldoYenes = sueldoPesosColombianos / 34.3375
    alert("Su sueldo en yenes es " + sueldoYenes)
} else {
    alert("Ingrese una opción válida")
}


