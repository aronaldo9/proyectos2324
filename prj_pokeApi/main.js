import { renderCardPokemon } from "./src/components/renderCardPokemon/renderCardPokemon";


const URL = "http://localhost:4000/pokemons";
const app = document.querySelector('#app');

fetch(URL)
  .then((res) => {
      if(!res.ok) {
        throw new Error("Could not find Pokemon");
      }
      return res.json();
    })
  .then((data) => {
    // recorro la data pintando cada pokemon
    data.map(pokemon => {
      renderCardPokemon(app, pokemon,()=> console.log("Hola mundo"));
    })
  })
  .catch((err) => console.log("Error",err.message));    