/**
 * Usando la pokeAPi, cuando inicio la app con un retardo de 3 segs, me mostrará una pantalla que tendrá
 * un buscador de pokemon que me traerá 9 pokemon por pagina y un footer de avanzar y retroceder las páginas.
 * En el transcurso de los 3 segs tendremos un spinner centrado en pantalla. Cada uno de los elementos 
 * de la página principal debe estar modularizado en un componente diferente.
 * Por cada pokemon crearemos una card con la img del pokemon, su nombre y el tipo.
 * El acceso a la api se debe realizar creando una función con async/await o con promesas. 
 */


import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
