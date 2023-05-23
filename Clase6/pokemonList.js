const  divPokemonList = document.getElementById("pokemonList")

async function getPokemonList(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=150"`)
    const data = await response.json()
    displayPokemonList(data.results)
}

function displayPokemonList(data){
    let pokemonHTML = ""

    console.log(data)

    data.forEach(pokemon => {
        pokemonHTML += `
            <div class = "card">
                <h3>${pokemon.name}</h3>
                <img src = "${getPokemonImage(pokemon.url)}"/>
            </div>
        `

        divPokemonList.innerHTML = pokemonHTML
    })

}

function getPokemonImage(url){
    const pokemonId = url.split("/").slice(-2, -1)[0]
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
}


getPokemonList()