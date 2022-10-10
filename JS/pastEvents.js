const ContenedorEvents = document.querySelector('.Contenedor-Cards_Events');


function ImprimirCards(array, contenedor){
    for(let evento of array.events){
        
        if(array.currentDate > evento.date){
            
            let Card = document.createElement('div');
            Card.classList += "CardJS";
            
            Card.innerHTML = `
                      <div class="max-w-sm rounded overflow-hidden shadow-lg">
                          <img class=" img-card" src="${evento.image}" alt="Sunset in the mountains">
                      <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 data-name-card">${evento.name}</div>
                        <p class="text-gray-700 text-base data-description-card">
                        - ${evento.description} -
                        </p>
                        <h4 class='CardDate'>Date: ${evento.date}</h4>
                      </div>
                      <div class="px-6 pt-4 pb-2 data-price-card-button">
                        <h3>${evento.price}$</h3>
                        <button class='Btn-card'><a href="${evento.url}">Read More</a></button>
                      </div>
                      </div>`
            
                 contenedor.appendChild(Card)
        }
    }
}

ImprimirCards(Data, ContenedorEvents)





