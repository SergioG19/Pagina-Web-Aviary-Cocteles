const resultados = document.getElementById("resultados");
const buscarBtn = document.getElementById("buscar-btn");
const buscarInput = document.getElementById("buscarInput");
const oldFashionedBtn = document.getElementById("oldfashioned-btn");
const margaritaBtn = document.getElementById("margarita-btn");
const daiquiridBtn = document.getElementById("daiquiri-btn");
const negronidBtn = document.getElementById("negroni-btn");
const manhattandBtn = document.getElementById("manhattan-btn");
const mojitodBtn = document.getElementById("mojito-btn");

const loadingAnimacion = document.getElementById("loading");

const API = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const buscar = busquedaDebounce(() => {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }

  let instruccionesEsp = "";
  // Mostrar animación de carga
  showLoading();

  if (buscarInput.value == '') {
    resultados.innerHTML = ``;
    // Ocultar animación de carga al completar la búsqueda
    hideLoading();
  } else {
    fetch(`${API}${buscarInput.value}`)
      .then(response => response.json())
      .then(async data => {
        const bebida = data.drinks[0];
        console.log(data);
        console.log(bebida.strDrink);
        console.log(bebida.strDrinkThumb);
        console.log(bebida.strInstructions);
        
        let contador = 1;
        let ingredientes = [];
        for (let i in bebida) {
          let ingrediente = "";
          let medida = "";
          if (i.startsWith("strIngredient") && bebida[i]) {
            ingrediente = bebida[i];

            if (bebida[`strMeasure` + contador]) {
              medida = `: ${bebida[`strMeasure` + contador]}`;
            } else {
              medida = "";
            }
            contador += 1;

            //traducimos los ingredientes al español
            await traducir(`${ingrediente}${medida}`)
              .then(text => {
                ingredientes.push(text);
                console.log(ingredientes);
              })
              .catch(error => {
                console.error(error);
              });

            //ingredientes.push(`${ingrediente}${medida}`)
          }
        }
        console.log(ingredientes);

        const img = document.createElement('img');
        img.src = bebida.strDrinkThumb;
        img.alt = `Imagen de ${bebida.strDrink}`

        const tituloBebida = document.createElement('h2');
        tituloBebida.textContent = bebida.strDrink;

        const Ingredientes = document.createElement('h3');
        Ingredientes.textContent = "Ingredientes";

        const lista = document.createElement('ul');
        lista.classList.add("ingredientes");

        const Instrucciones = document.createElement('h3');
        Instrucciones.textContent = "Instrucciones";

        const InstruccionesP = document.createElement('p');

        //traducimos las instrucciones al español
        await traducir(bebida.strInstructions)
          .then(text => {
            instruccionesEsp = text;
            console.log(instruccionesEsp);
          })
          .catch(error => {
            console.error(error);
          });
        InstruccionesP.textContent = instruccionesEsp

        ingredientes.forEach(ingrediente => {
          const li = document.createElement('li');
          li.innerText = ingrediente;
          lista.appendChild(li);
        })

        resultados.append(img, tituloBebida, Ingredientes, lista, Instrucciones, InstruccionesP);
        
      }).catch(() => {
        if (buscarInput.value.length > 0) {
          resultados.innerHTML = `<h3>No se encontraron resultados para "${buscarInput.value}"</h3>`
        } else {
          resultados.innerHTML = ``
        }
      }).finally(() => {
        // Ocultar animación de carga al completar la búsqueda
        hideLoading();
      })
  }
}, 500);

buscarInput.addEventListener('input', () => buscar());
buscarBtn.addEventListener("click", () => buscar());
oldFashionedBtn.addEventListener("click", () => masInfo("Old Fashioned"));
margaritaBtn.addEventListener("click", () => masInfo("Margarita"));
daiquiridBtn.addEventListener("click", () => masInfo("Daiquiri"));
negronidBtn.addEventListener("click", () => masInfo("Negroni"));
manhattandBtn.addEventListener("click", () => masInfo("Manhattan"));
mojitodBtn.addEventListener("click", () => masInfo("Mojito"));

// Funcion para hacer busqueda reactiva
function busquedaDebounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

function masInfo(coctel) {
  buscarInput.value = coctel
  buscarInput.focus();
  buscar();
}

function showLoading() {
  loadingAnimacion.style.display = "block";
}

function hideLoading() {
  loadingAnimacion.style.display = "none";
}

// =================== FUNCION PARA TRADUCIR MEDIANTE UNA API ==================
function traducir(texto) {
  const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'bdfe60f161msh845b0a9c476c061p13088cjsn928a54c3a356',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
      source_language: 'en',
      target_language: 'es',
      text: texto
    })
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(response => {
      // Devolver el texto traducido
      return response.data.translatedText;
    })
    .catch(error => {
      console.error(error);
    });
}

export default cocteles;