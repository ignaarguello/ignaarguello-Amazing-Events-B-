const ContenedorEvents = document.querySelector('.Contenedor-Cards_Events');

for (let i = 0; i < Data.events.length; i++) {
    let Card = document.createElement("div");
    Card.classList += "CardJS";
  
    if(Data.currentDate > Data.events[i].date){

        Card.innerHTML = `
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class=" img-card" src="${Data.events[i].image}" alt="Sunset in the mountains">
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 data-name-card">${Data.events[i].name}</div>
          <p class="text-gray-700 text-base data-description-card">
          - ${Data.events[i].description} -
          </p>
          </div>
          <div class="px-6 pt-4 pb-2 data-price-card-button">
          <h3>${Data.events[i].price}$</h3>
          <button class='Btn-card'>Read More</button>
          </div>
          </div>`;
    }
    else{
        Card.classList = 'Hidden'
    }
  
    ContenedorEvents.appendChild(Card);
  }