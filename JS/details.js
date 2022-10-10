const ContenedorCards = document.querySelector("#Contenedor-Cards");

for (let i = 0; i < Data.events.length; i++) {
  let Card = document.createElement("div");
  Card.classList += "CardJS";

  Card.innerHTML = `
    <div class="max-w-sm rounded overflow-hidden shadow-lg InteriorCard">
        <img class=" img-card" src="${Data.events[i].image}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 data-name-card">${Data.events[i].name}</div>
    <p class="text-gray-700 text-base data-description-card">
    - ${Data.events[i].description} -
    </p>
    <h4 class='CardDate'>Date: ${Data.events[i].date}</h4>
    </div>
    <div class="px-6 pt-4 pb-2 data-price-card-button">
    <h3>${Data.events[i].price}$</h3>
    <button class='Btn-card'><a href="${Data.events[i].url}">Read More</a></button>
    </div>
    </div>`;

  ContenedorCards.appendChild(Card);
}


