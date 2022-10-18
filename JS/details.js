const ContenedorCardJS = document.querySelector("#Contenedor-Cards");
const DataPrincipal = Data.events;

function RenderEventDetail() {
  //Variable del location
  let QueryID = Number(location.search.slice(2));

  //Filtro por id
  let FilterQueryId = DataPrincipal.find((element) => element.id === QueryID);

  //Variable donde aplicaremos el for each para rendizar con su respectivo push
  let eventosFiltradosDetails = [];
  eventosFiltradosDetails.push(FilterQueryId);

  //Funtion For Each que renderiza la card detallada
  eventosFiltradosDetails.forEach((element) => {
    let CardJS = document.createElement("div");
    CardJS.className = "CardJSDetails";
    CardJS.innerHTML += `
    <img id="ImagenCardDetails" src="${element.image}" alt="Sunset in the mountains">
      <div class="max-w-sm rounded overflow-hidden shadow-lg" id='ContenedorCardTopDetails'>
      <div class="px-6 py-4" id='ContenedorBodyCardDetails'>
      <div class="font-bold text-xl mb-2" id='NameCardDetails'>${element.name}</div>
        <p class="text-gray-700 text-base" id='DescriptionCardDetails'>
          - ${element.description} -
        </p>
        <h4 id='CardCategoryDetails'> - ${element.category} -</h4>
        <h4 id='CardDateDetails' class='ClassCard'>Date: ${element.date}</h4>
        <h4 id='CardPlaceDetails' class='ClassCard'>Place: ${element.place}</h4>
        <h4 id='CardCapacityDetails' class='ClassCard'>Capacity: ${element.capacity} - persons</h4>
        <h4 id='CardAssistanceDetails' class='ClassCard'>Assistance Estimated: ${element.assistance} - persons</h4>
      </div>
      <div class="px-6 pt-4 pb-2" id='ContenedorDataPrice-ButtonCardDetails'>
          <h3 id='PriceCardDetails'>Price: ${element.price}$</h3>
      </div>
      </div>`;

    ContenedorCardJS.appendChild(CardJS);
  });
}

RenderEventDetail();