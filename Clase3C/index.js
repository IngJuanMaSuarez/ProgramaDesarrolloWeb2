const inputDollar = document.getElementById("dollar")
const inputPound = document.getElementById("pound")
const inputYen = document.getElementById("yen")
const inputPesosColombianos = document.getElementById("pesosColombianos")
const txtResult = document.getElementById("result")

function convert(){

    sueldoPesosColombianos = inputPesosColombianos.value

    if(inputDollar.checked){
        let sueldoDolares = sueldoPesosColombianos / 4600
        txtResult.innerHTML = sueldoDolares
    } else if(inputPound.checked){
        let sueldoEuros = sueldoPesosColombianos / 5171
        txtResult.innerHTML = sueldoEuros
    } else if(inputYen.checked){
        let sueldoYenes = sueldoPesosColombianos / 34.3375
        txtResult.innerHTML = sueldoYenes
    } else {
        txtResult.innerHTML = "Ingrese una opción válida"
    }
}