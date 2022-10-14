//*Variables que guarda la data
const DataFinal = Data.events

function RenderCards(){
    let Render = DataFinal.forEach((element)=>{
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
          <button id='Btn-card'><a href="${element.url}">Read More</a></button>
      </div>
      </div>`
      ContenedorCardJS.appendChild(CardJS)
    })
    return Render
}


//*Variables correspondientes a los checkbox dinamicos
const ContenedorChecksJS = document.querySelector('#Contenedor-Checks_Index');
const DataCategory = DataFinal.map(element => element.category)
const DataCategorySet = new Set([...DataCategory])


//?Render de los checkbox dinamicos
DataCategorySet.forEach((element)=>{
    let DivChecksJS = document.createElement('div')
    DivChecksJS.id = 'DivJS'
    
    DivChecksJS.innerHTML += `

    <label id='LabelJS' for="${element}">${element}</label>
    <input class='InputCheck${element}' type="checkbox" value="${element}">
  
    `

    ContenedorChecksJS.appendChild(DivChecksJS)
})


//*Variable y Render de las Card en Index
const ContenedorCardJS = document.querySelector('#Contenedor-Card-Index');

DataFinal.forEach((element)=>{
  
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
        <button id='Btn-card'><a href="${element.url}">Read More</a></button>
    </div>
    </div>`

    ContenedorCardJS.appendChild(CardJS)
  })


  //* Variables donde seleccionamos los checkbox dinamicos por query
  const CheckFoodFair = document.querySelector('.InputCheckFoodFair')
  const CheckMuseum = document.querySelector('.InputCheckMuseum')
  const CheckCostumeParty = document.querySelector('.InputCheckCostumeParty')
  const CheckMusicConcert = document.querySelector('.InputCheckMusicConcert')
  const CheckRace = document.querySelector('.InputCheckRace')
  const CheckBookExchange = document.querySelector('.InputCheckBookExchange')
  const CheckCinema = document.querySelector('.InputCheckCinema')

  
  let eventosFiltrados = []

  function Filter(value){
      //Filtra segun el evento
      let dataFilter = DataFinal.filter(element => element.category.includes(value))
      
      eventosFiltrados.push(dataFilter)  

      eventosFiltrados.forEach(element => element.forEach((element)=>{
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
          <button id='Btn-card'><a href="${element.url}">Read More</a></button>
        </div>
      </div>`
      ContenedorCardJS.appendChild(CardJS)
      }))

      console.log(eventosFiltrados)
      
      return eventosFiltrados
  }


//*Evento Checkbox Foor Fair
  CheckFoodFair.addEventListener('change', (event) => {
    if(CheckFoodFair.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      } 
      else{
        RenderCards()
      }
  })

  //*Evento Checkbox Museum
  CheckMuseum.addEventListener('change', (event) => {
    if(CheckMuseum.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      }
      else{
        RenderCards()
      }
  })

  //*Evento Checkbox Costume Party
  CheckCostumeParty.addEventListener('change', (event) => {
    if(CheckCostumeParty.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      }
      else{
        RenderCards()
      }
  })

  //*Evento Checkbox Music Concert
  CheckMusicConcert.addEventListener('change', (event) => {
    if(CheckMusicConcert.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      }
      else{
        RenderCards()
      }
  })

  //*Evento Checkbox Race
  CheckRace.addEventListener('change', (event) => {
    if(CheckRace.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      }
      else{
        RenderCards()
      }
  })

  //*Evento Checkbox Book Exchange
  CheckBookExchange.addEventListener('change', (event) => {
    if(CheckBookExchange.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      }
      else{
        RenderCards()
      }
  })

  //*Evento Checkbox Cinema
  CheckCinema.addEventListener('change', (event) => {
    if(CheckCinema.checked){
        ContenedorCardJS.innerHTML = ``
        Filter(event.target.value)
      }
      else{
        RenderCards()
      }
  })

