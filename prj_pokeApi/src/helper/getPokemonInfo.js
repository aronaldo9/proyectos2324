import fetch from "node-fetch";
import fs from "fs/promises";

const filePath = "./server/db.json";

async function getPokemonInfo() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        
        const allPokemon = [];

        for (const e of data.results) {
            try {
                const resp = await fetch(e.url);
                const pokemons = await resp.json();

                const abilities = pokemons.abilities.map((ability) => ability.ability.name);

                const pokemon = {
                    Nombre: e.name,
                    url: e.url,
                    imagenes: {
                        imgFront: pokemons.sprites.front_default,
                        imgBack: pokemons.sprites.back_default,
                    },
                    abilities,
                };

                allPokemon.push(pokemon);

                // Haz algo con el objeto 'pokemon', por ejemplo, regístralo en la consola
                console.log(pokemon);
            } catch (error) {
                console.error("Error al obtener detalles del Pokémon:", error);
            }
        }

        // Escribe la información de todos los Pokémon en el archivo
        await fs.writeFile(filePath, JSON.stringify({ pokemons: allPokemon }, null, 2));
    } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
    }
}

getPokemonInfo();
