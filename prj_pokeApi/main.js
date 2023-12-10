// main.js
import { renderCardPokemon } from "./src/components/renderCardPokemon/renderCardPokemon";
import { renderFindPokemon } from "./src/components/renderFindPokemon/renderFindPokemon";

const URL = "http://localhost:4000/pokemons";
const app = document.querySelector('#app');

// Simula la lista de Pokémon, ya que no se proporciona un archivo que la defina
const pokemons = [];

fetch(URL)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Could not find Pokemon");
    }
    return res.json();
  })
  .then((data) => {
    // Guarda la lista de Pokémon
    pokemons.push(...data);

    // Recorre la lista pintando cada Pokémon
    pokemons.forEach((pokemon) => {
      renderCardPokemon(app, pokemon, () => console.log("Hola mundo"));
    });
  })
  .catch((err) => {
    if (err.name === 'AbortError') {
      console.log('Fetch request was aborted.');
    } else if (err.name === 'TypeError') {
      console.log('Network error or CORS issue. Check if the server is running and reachable.');
    } else {
      console.error("Error", err.message);
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');
  
    searchBtn.addEventListener('click', function() {
      const filter = searchInput.value.toLowerCase();
      renderFindPokemon(pokemons, filter);
  
      // Limpiar el texto del formulario después de la búsqueda
      searchInput.value = '';
    });
  
    // Renderiza todos los Pokémon al cargar la página
    pokemons.forEach(pokemon => {
      renderCardPokemon(container, pokemon, () => console.log("Hola mundo"));
    });
  });
