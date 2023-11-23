export function createCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h3>${pokemon.name}</h3>
    <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
  `;
  return card;
}


export function createSearchInput(allPokemonList, onSearch) {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search Pokemon';
  
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    onSearch(allPokemonList, searchTerm);
  });

  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  return searchContainer;
}
