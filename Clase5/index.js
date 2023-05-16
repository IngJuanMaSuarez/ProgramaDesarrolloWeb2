/***************** EVENTO CLICK */

/*const btnAceptar = document.getElementById("aceptar")
btnAceptar.addEventListener("click", greeting)

function greeting(e){
    console.log(e)
    console.log("Bienvenido")
}*/

/********************* ARRAYS */

/*let fruits = ["Apple", "Banana", "Grapes", "Mango", "Watermelon"]
let prices = [2000, 1500, 100, 4500, 48000]

console.log(fruits.length)
console.log(fruits[0])*/

// Agrega un elemento el final del array
/*console.log(fruits)
fruits.push("Strawberry")
console.log(fruits)*/

// Elimina el ultimo elemento del array
/*fruits.pop()
console.log(fruits)*/

// Elimina el primer elemento
/*fruits.shift()
console.log(fruits)*/

// Agrega un elemento al inicio
/*fruits.unshift("Pineapple")
console.log(fruits)

console.log(fruits.indexOf("Mango"))

while(fruits.length > 0){
    let fruit = fruits.shift()
    console.log(fruit)
}*/

/************************** RECORDAR FUNCIONES */

function sumarDeclarativa(numero1, numero2){
    return numero1 + numero2
}

let sumaExpresion = function(numero1, numero2){
    return numero1 + numero2
}

let sumaArrow = (numero1, numero2) => {
    return numero1 + numero2
}

/*********************** OBJETOS - POO*/

const divListaPokemon = document.getElementById("listaPokemon")

let pokemons = []
let pokemon

class Pokemon {

    constructor(nombre, tipo, ataque, defensa, vida, imagen){
        this.nombre = nombre
        this.tipo = tipo
        this.ataque = ataque
        this.defensa = defensa
        this.vida = vida
        this.imagen = imagen
    }

    saludar(){
        console.log("Hola y bienvenido, soy " + this.nombre)
    }

    atacar(pokemonRival){
        console.log(pokemonRival.vida)
        pokemonRival.vida = pokemonRival.vida - (this.ataque - pokemonRival.defensa)
        console.log(this.nombre + " ha atacado a " + pokemonRival.nombre)
        console.log(pokemonRival.vida)
    }

}

let miPokemon1 = new Pokemon("Pikachu", "Electricidad", 15, 15, 9, "./assets/Pikachu.png")
let miPokemon2 = new Pokemon("Charmander", "Fuego", 16, 9, 13, "./assets/Charmander.png")
let miPokemon3 = new Pokemon("Squirtle", "Agua", 12, 12, 15, "./assets/Squirtle.png")

pokemons.push(miPokemon1, miPokemon2, miPokemon3)
console.table(pokemons)

pokemons.forEach((pokemon) => {
    let listaDePokemon = `
        <label for = ${pokemon.nombre}>${pokemon.nombre}</label>
        <img src = ${pokemon.imagen} />
        <input type="radio" id = ${pokemon.nombre} name = pokemon>
        <button id = btn${pokemon.nombre}>I choose you</button>
        <br/>
    `
    divListaPokemon.innerHTML += listaDePokemon
})

const btnPikachu = document.getElementById("btnPikachu")
btnPikachu.addEventListener("click", getInformation())

function getInformation(){
    console.log("Informacion Pikachu")
}