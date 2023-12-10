// renderFindPokemon.js
import { renderCardPokemon } from "../renderCardPokemon/renderCardPokemon";

// Función para buscar pokemon por su nombre
export function renderFindPokemon(pokemons, filter) {
    const filteredPokemons = filterPokemons(pokemons, filter);
    const modalBody = document.getElementById('pokemonModalBody');

    // Limpiar el contenido del modal antes de renderizar la nueva búsqueda
    modalBody.innerHTML = '';

    if (filteredPokemons.length === 0) {
        // Muestra un mensaje de error o realiza la acción adecuada
        console.log('No se encontraron resultados');
    } else {
        // Obtén solo el primer resultado
        const pokemon = filteredPokemons[0];
        console.log("Rendering Pokemon:", pokemon);

        // Renderiza la card del Pokémon en el modal
        renderCardPokemon(modalBody, pokemon, () => console.log("Hola mundo"));

        // Muestra el modal
        const modal = new bootstrap.Modal(document.getElementById('pokemonModal'));
        modal.show();
    }
}

function filterPokemons(pokemons, filter) {
    const searchTerm = filter.toLowerCase();

    return pokemons.filter(pokemon => {
        const { Nombre } = pokemon;
        return Nombre.toLowerCase().includes(searchTerm);
    });
}
