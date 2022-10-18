//*Variables que guarda la data
const DataPrincipal = Data.events

//Function para renderizar todas las cards
function RenderAllCards() {
  let Render = DataPrincipal.forEach((element) => {
    let CardJS = document.createElement('div')
    CardJS.className = 'CardJS'
    CardJS.innerHTML += `
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img id="ImagenCard" src="${element.image}" alt="Sunset in the mountains">
      <div class="px-6 py-4" id='ContenedorBodyCard'>
      <div class="font-bold text-xl mb-2" id='DataNameCard'>${element.name}</div>
        <p class="text-gray-700 text-base" id='DataDescriptionCard'>
          - ${element.description} -
        </p>
        <h3 id='CardCategory'>${element.category}</h3>
        <h4 id='CardDate'>Date: ${element.date}</h4>
      </div>
      <div class="px-6 pt-4 pb-2" id='ContenedorDataPrice-ButtonCard'>
          <h3 id='PriceCard'>${element.price}$</h3>
          <button id='Btn-card'><a href="details.html?=${element.id}">+Read More</a></button>
      </div>
      </div>`
    ContenedorCardJS.appendChild(CardJS)
  })
  return Render
}

//*Variable del contenedor de las Card y renderizacion por funcion
const ContenedorCardJS = document.querySelector('#Contenedor-Cards');
RenderAllCards()


//*Variables correspondientes a los checkbox dinamicos
const ContenedorChecksJS = document.querySelector('#Contenedor-Checks');
const DataCategory = DataPrincipal.map(element => element.category)
const DataCategorySet = new Set([...DataCategory].sort())


//?Render de los checkbox dinamicos
DataCategorySet.forEach((element) => {
  let DivChecksJS = document.createElement('div')
  DivChecksJS.id = 'DivJS'

  DivChecksJS.innerHTML += `

    <label id='LabelJS' for="${element}">${element}</label>
    <input class='InputCheck${element}' type="checkbox" value="${element}">
  
    `

  ContenedorChecksJS.appendChild(DivChecksJS)
})


//* Variables donde seleccionamos los checkbox dinamicos por query
const CheckFoodFair = document.querySelector('.InputCheckFoodFair')
const CheckMuseum = document.querySelector('.InputCheckMuseum')
const CheckCostumeParty = document.querySelector('.InputCheckCostumeParty')
const CheckMusicConcert = document.querySelector('.InputCheckMusicConcert')
const CheckRace = document.querySelector('.InputCheckRace')
const CheckBookExchange = document.querySelector('.InputCheckBookExchange')
const CheckCinema = document.querySelector('.InputCheckCinema')


//Variable del array de eventos filtrados
let eventosFiltrados = []

//Function filter por category, nos devuelve los objetos y el lenght del array de filtrados
function Filter(array, value) {
  //Filtra segun el evento
  let dataFilterPush = array.filter(element => element.category.includes(value));
  let dataFilterPop = array.filter(element => element.category.includes(value)).length;
  let dataFilterLength = dataFilterPop;
  return {
    dataFilterPop,
    dataFilterPush,
    dataFilterLength
  }
}

//Function que renderizadora segun el parametro que reciba
function RenderForFilter(param) {
  ContenedorCardJS.innerHTML = ``
  param.forEach((element) => {
    let CardJS = document.createElement('div')
    CardJS.className = 'CardJS'

    CardJS.innerHTML += `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img id="ImagenCard" src="${element.image}" alt="Sunset in the mountains">
      <div class="px-6 py-4" id='ContenedorBodyCard'>
      <div class="font-bold text-xl mb-2" id='DataNameCard'>${element.name}</div>
        <p class="text-gray-700 text-base" id='DataDescriptionCard'>
          - ${element.description} -
        </p>
        <h3 id='CardCategory'>${element.category}</h3>
        <h4 id='CardDate'>Date: ${element.date}</h4>
      </div>
      <div class="px-6 pt-4 pb-2" id='ContenedorDataPrice-ButtonCard'>
          <h3 id='PriceCard'>${element.price}$</h3>
          <button id='Btn-card'><a href="details.html?=${element.id}">+Read More</a></button>
      </div>
      </div>
        `

    ContenedorCardJS.appendChild(CardJS)
  })
}

//Function que pushea la data al array de eventos filtrados
function PushData(param, param2) {
  param.forEach(element => param2.push(element))
}

function DeleteXRender(array, value) {
  let dataFilter = Filter(array, value)
  let datosFiltradosFinales = eventosFiltrados.filter(element => element.category != value)

  return datosFiltradosFinales
}


//Function "FINAL" que renderiza y borra los eventos de los checkbox
function FunRenderFinalForEvent(target, param) {
  if (target.checked) {
    ContenedorCardJS.innerHTML = ``
    let VarFilter = Filter(DataPrincipal, param)
    PushData(VarFilter.dataFilterPush, eventosFiltrados)
    RenderForFilter(eventosFiltrados)
  }
  else {
    let datoFinal = DeleteXRender(eventosFiltrados, event.target.value)
    eventosFiltrados = datoFinal;
    RenderForFilter(eventosFiltrados)
  }

  if (eventosFiltrados.length === 0) {
    ContenedorCardJS.innerHTML = ``
    RenderAllCards()
  }
}



//*Evento Checkbox Foor Fair
CheckFoodFair.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckFoodFair, event.target.value)
})

//*Evento Checkbox Museum
CheckMuseum.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckMuseum, event.target.value)
})

//*Evento Checkbox Costume Party
CheckCostumeParty.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckCostumeParty, event.target.value)
})

//*Evento Checkbox Music Concert
CheckMusicConcert.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckMusicConcert, event.target.value)
})

//*Evento Checkbox Race
CheckRace.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckRace, event.target.value)
})

//*Evento Checkbox Book Exchange
CheckBookExchange.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckBookExchange, event.target.value)
})

//*Evento Checkbox Cinema
CheckCinema.addEventListener('change', (event) => {
  FunRenderFinalForEvent(CheckCinema, event.target.value)
})


//? Evento del Input Search
//? Evento del Input Search

//Function filter por name
function FilterName(array, value) {
  //Filtra segun el evento
  let dataFilterPush = array.filter(element => element.name.toLowerCase().includes(value.toLowerCase()));
  return dataFilterPush

}

//Variable del input de la barra de busqueda
const VarInputSearch = document.querySelector('#InputSearch')

VarInputSearch.addEventListener('input', (event) => {
  if (eventosFiltrados.length == 0) {
    let dataFilter = FilterName(DataPrincipal, event.target.value)
    RenderForFilter(dataFilter)
  }

  if (eventosFiltrados.length >= 1) {
    let dataFilter2 = FilterName(eventosFiltrados, event.target.value)
    RenderForFilter(dataFilter2)
  }
})




