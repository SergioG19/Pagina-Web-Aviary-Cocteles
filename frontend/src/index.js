import Template from './template/main.js';
import cocteles from './template/cocteles.js';
import contactanos from './template/contactanos.js';
import './Style/style.css';


(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
  })();
