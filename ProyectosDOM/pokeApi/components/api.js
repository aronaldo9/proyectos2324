const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export async function getRandomPokemon() {
    const response = await fetch(`${apiUrl}?limit=1000`);
    const data = await response.json();
    const allPokemon = data.results;

    // Seleccionar 9 pokemons aleatorios
    const randomPokemon = [];
    for(let i = 0; i < 9; i++) {
        const index = Math.floor(Math.random() * allPokemon.length);
        randomPokemon.push(allPokemon[index]);
        // Evitamos repetir pokemons
        allPokemon.splice(index, 1);
    }
    return randomPokemon;    
}

export async function getPokemonDetails(url) {
    const response = await fetch(url);
    return response.json();
}