const inputPokemonNumber = document.getElementById("pokemonNumber")
const btnSearchPokemon = document.getElementById("searchPokemon")
const divPokemonInformation = document.getElementById("pokemonInformation")

btnSearchPokemon.addEventListener("click", () => {
    const pokemonNumber = inputPokemonNumber.value
    getPokemonInformation(pokemonNumber)
})

async function getPokemonInformation(pokemonNumber){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    const data = await response.json()
    console.log(data)
    displayPokemonInformation(data)
}

function displayPokemonInformation(data){
    const {name, height, weight, types, sprites} = data
    const principalType = types[0].type.name
    const image = sprites.front_default

    const pokemonInformation = `
        <h3>${name}</h3>
        <p>${height}</p>
        <p>${weight}</p>
        <p>${principalType}</p>
        <img src = "${image}" />
    `

    divPokemonInformation.innerHTML = pokemonInformation
}