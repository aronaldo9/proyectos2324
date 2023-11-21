import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { pintarPromesas } from './components/pintarPromesas';
import { pintarAsyncAwait } from './components/pintarAsyncAwait';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Promesas y Async/Await</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

const cardElement = document.querySelector(".card");
// pintarPromesas(cardElement);
pintarAsyncAwait(cardElement);
