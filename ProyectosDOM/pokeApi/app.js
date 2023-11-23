import { getPokemonDetails, getRandomPokemon } from "./components/api.js";
import { createSearchInput, createCard } from "./components/components.js";

const app = document.getElementById('app');

let allPokemonList = [];

async function initApp() {
  try {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    app.appendChild(spinner);

    await new Promise(resolve => setTimeout(resolve, 3000));

    allPokemonList = await getRandomPokemon();
    spinner.remove();

    const h1 = document.createElement('h1');
    h1.textContent = 'PokeApp - Gotta Catch \'Em All!';
    app.appendChild(h1);

    const searchContainer = createSearchInput(allPokemonList, (pokemonList, searchTerm) => {
        console.log('All Pokemon List:', pokemonList);
        const filteredPokemon = pokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('Filtered Pokemon:', filteredPokemon);
        renderPokemon(filteredPokemon);
      });
      app.appendChild(searchContainer);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    app.appendChild(cardContainer);

    renderPokemon(allPokemonList);
  } catch (error) {
    console.error('Error in initApp:', error);
  }
}

function renderPokemon(pokemonList) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';

  pokemonList.forEach(async pokemon => {
    const pokemonData = await getPokemonDetails(pokemon.url);
    const card = createCard(pokemonData);
    cardContainer.appendChild(card);

    card.addEventListener('click', () => {
      showLargeCard(pokemonData);
    });
  });
}

function showLargeCard(pokemon) {
  const largeCardContainer = document.createElement('div');
  largeCardContainer.className = 'large-card-container';

  const largeCard = createCard(pokemon);
  largeCard.className = 'large-card';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    largeCardContainer.remove();
  });

  largeCardContainer.appendChild(largeCard);
  largeCardContainer.appendChild(closeButton);

  document.body.appendChild(largeCardContainer);
}

initApp();
