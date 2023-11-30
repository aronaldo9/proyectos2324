// import
import fetch from "node-fetch";
import fs from "fs/promises";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const filePath = "./server/db.json";

async function fetchAndSave() {
    // accederá a pokeapi, me traeré los pokemons(20) y guardaré la info en server/db.json
    try {
        // voy a realizar una petición a pokeapi
        const response = await fetch(apiUrl);
        const data = await response.json();
        const { results } = data;
        await fs.writeFile(filePath, JSON.stringify({ results }, null, 2));
    } catch (error) {
      console.log("Error en acceso a Api", error.message); 
    }
}

fetchAndSave();