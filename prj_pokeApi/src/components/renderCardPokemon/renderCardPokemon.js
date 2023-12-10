export function renderCardPokemon(container, pokemonData, callback) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-2', 'text-center', 'bg-warning', 'overflow-hidden', 'position-relative');
    card.style.width = "18rem";

    card.innerHTML = `
        <div class="card-front">
            <img src="${pokemonData.imagenes.imgFront}" class="card-img-top" alt="${pokemonData.Nombre}">
            <div class="card-body">
                <h5 class="card-title">${pokemonData.Nombre}</h5>
                <p class="card-text">lorem ipsum</p>
            </div>
        </div>
        <div class="card-back text-white" style="display: none;">
            <img src="${pokemonData.imagenes.imgBack}" class="card-img-top" alt="${pokemonData.Nombre} (back)">
            <div class="card-body">
                <h5 class="card-title">${pokemonData.Nombre}</h5>
                <p class="card-text">${pokemonData.abilities.join(', ')}</p>
            </div>
        </div>
    `;

    // Agrega el evento de clic para cambiar entre la parte frontal y la posterior con un simple cambio de visibilidad
    card.addEventListener('click', () => {
        const front = card.querySelector('.card-front');
        const back = card.querySelector('.card-back');

        front.style.display = front.style.display === 'none' ? 'block' : 'none';
        back.style.display = back.style.display === 'none' ? 'block' : 'none';
    });

    container.appendChild(card);
}
