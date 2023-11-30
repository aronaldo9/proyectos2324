export function renderCardPokemon(container, pokemonData, callback) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = "18rem";
    card.innerHTML = `
    <img src=${pokemonData.imagenes.imgFront} class="card-img-top" alt="${pokemonData.Nombre}">
    <div class="card-body">
        <h5 class="card-title">${pokemonData.Nombre}</h5>
    <p class="card-text">lorem ipsum</p>
    </div>
    `;
container.appendChild(card);
}