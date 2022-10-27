//?Render de los checkbox dinamicos
function RenderChecks(param, contenedor) {
  let mapChecks = param.map((element) => element.category);
  let mapChecksSet = new Set(...[mapChecks]);

  mapChecksSet.forEach((element) => {
    let divChecksJS = document.createElement("div");
    divChecksJS.id = "DivJS";
    divChecksJS.innerHTML += `
      
      <label class='LabelJS' for="${element}">${element}</label>
      <input class='InputCheck${element} InputCheck' type="checkbox" value="${element}">`;

    contenedor.appendChild(divChecksJS);
  });
}

//?Function que renderizadora segun el parametro que reciba
function RenderForFilter(param, contenedor) {
  contenedor.innerHTML = ``;
  param.forEach((element) => {
    let CardJS = document.createElement("div");
    CardJS.className = "CardJS";

    CardJS.innerHTML += `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img id="ImagenCard" src="${element.image
      }" alt="Sunset in the mountains">
      <div class="px-6 py-4" id='ContenedorBodyCard'>
      <div class="font-bold text-xl mb-2" id='DataNameCard'>${element.name
      }</div>
        <p class="text-gray-700 text-base" id='DataDescriptionCard'>
          - ${element.description} -
        </p>
        <h3 id='CardCategory'>${element.category}</h3>
        <h4 id='CardDate'>Date: ${element.date.slice(0, 10)}</h4>
      </div>
      <div class="px-6 pt-4 pb-2" id='ContenedorDataPrice-ButtonCard'>
          <h3 id='PriceCard'>${element.price}$</h3>
          <button id='Btn-card'><a href="details.html?id=${element.id}">+Read More</a></button>
      </div>
      </div>
        `;

    contenedor.appendChild(CardJS);
  });
}

//?Function que pushea la data
function PushData(array, contenedorFiltrados) {
  array.forEach((element) => contenedorFiltrados.push(element));
}

function DeleteXRender(array, value) {
  let datosFiltradosFinales = array.filter(
    (element) => element.category != value
  );

  return datosFiltradosFinales;
}

//Function filter por name
function FilterName(array, value) {
  //Filtra segun el evento
  let dataFilterPush = array.filter((element) =>
    element.name.toLowerCase().includes(value.toLowerCase())
  );
  return dataFilterPush;
}

//?Fuction que filtra por el value del checkbox, value del searchbar, agrega evento y renderiza
function Filter(param, contenedor) {
  let eventosFiltrados = [];
  let varChecks = document.querySelectorAll(".InputCheck");
  varChecks.forEach((element) => {
    element.addEventListener("change", (event) => {
      if (element.checked) {
        let varFilter = param.filter((element) =>
          element.category.includes(event.target.value)
        );
        PushData(varFilter, eventosFiltrados);
        console.log('desde if', eventosFiltrados)
        RenderForFilter(eventosFiltrados, contenedor);
      } else {
        let datoFinal = DeleteXRender(eventosFiltrados, event.target.value);
        eventosFiltrados = datoFinal;
        RenderForFilter(eventosFiltrados, contenedor);
      }
      
      if (eventosFiltrados.length === 0) {
        contenedor.innerHTML = ``;
        RenderForFilter(param, contenedor);
      }
    });
  });

  //Variable del input de la barra de busqueda
  const VarInputSearch = document.querySelector("#InputSearch");

  VarInputSearch.addEventListener("input", (event) => {
    if (eventosFiltrados.length === 0) {
      let dataFilter = FilterName(param, event.target.value);
      RenderForFilter(dataFilter, contenedor);
      if(dataFilter.length === 0){
        contenedor.innerHTML = `<h2 id="Titulo-Ups">'Ops, Event not found'</h2>`;
      }
    }

    if (eventosFiltrados.length >= 1) {
      let dataFilter2 = FilterName(eventosFiltrados, event.target.value);
      RenderForFilter(dataFilter2, contenedor);
      console.log(dataFilter2)
      if(dataFilter2.length === 0){
        contenedor.innerHTML = `<h2 id="Titulo-Ups">'Ops, Event not found'</h2>`;
      }
    }

    let ValueFilterName = FilterName(eventosFiltrados, event.target.value).length
    console.log('valueFilter', ValueFilterName)
    
    let targetValue = event.target.value.length
    
    if(targetValue == 0 && eventosFiltrados.length === 0){
      RenderForFilter(param, contenedor)
    }
  });
  
}
