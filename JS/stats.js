//? Table Events Stalistics
async function getDataEventsStalistics(){
    try{
        let resData = await fetch('https://mh-amazing.herokuapp.com/amazing?time=past');
        let data = await resData.json();
        let dataDeEventos = data.events;
        
        let moreAthendance = getEventMoreAthendance(dataDeEventos)
        let lowestAthendance = getEventLowestAthendance(dataDeEventos)
        let moreCapacity = getEventMoreCapacity(dataDeEventos)

        const TR_EventStalistics = document.querySelector('#JS-TR-EventStalistics');
        TR_EventStalistics.innerHTML += `<td class='TD-JS'>${moreAthendance}</td>`
        TR_EventStalistics.innerHTML += `<td class='TD-JS'>${lowestAthendance}</td>`
        TR_EventStalistics.innerHTML += `<td class='TD-JS'>${moreCapacity}</td>`
        
}
    catch{
        console.log({error:true})
    }
}

getDataEventsStalistics()

function getEventMoreAthendance(array){
        let mapAssistanse =  array.map(element => element.assistance).sort((a,b)=>a-b)
        let findMoreAssistanse = array.find(element => element.assistance === 926981)
        let nameEvent = findMoreAssistanse.name
        return nameEvent
}

function getEventLowestAthendance(array){
    let mapAssistanse =  array.map(element => element.assistance).sort((a,b)=>a-b)
    let findLowestAssistanse = array.find(element => element.assistance === 759)
    let nameEvent = findLowestAssistanse.name
    return nameEvent
}

function getEventMoreCapacity(array){
    let mapCapacity =  array.map(element => element.capacity).sort((a,b)=>a-b)
    let findMoreCapacity = array.find(element => element.capacity === 1000000)
    let nameEvent = findMoreCapacity.name
    return nameEvent
}

//? Table Events Upcoming Stadistics by category
async function getDataEventsStadisticsByCategoryUpcoming(){
    try{
        let resData = await fetch('https://mh-amazing.herokuapp.com/amazing?time=upcoming');
        let data = await resData.json();
        let dataDeEventos = data.events;
        console.log('Data de eventos upcoming',dataDeEventos)
        
        getEventsCategoriesUpcoming(dataDeEventos)
        getRenuevesByEventsUpcoming(dataDeEventos, 'Party')
        getRenuevesByEventsUpcoming(dataDeEventos, 'Books')
        getRenuevesByEventsUpcoming(dataDeEventos, 'Cinema')
        getRenuevesByEventsUpcoming(dataDeEventos, 'Race')
        getRenuevesByEventsUpcoming(dataDeEventos, 'Museum')
        getRenuevesByEventsUpcoming(dataDeEventos, 'Concert')
        percentajeOfAthendance(dataDeEventos, 'Party')
        percentajeOfAthendance(dataDeEventos, 'Books')
        percentajeOfAthendance(dataDeEventos, 'Cinema')
        percentajeOfAthendance(dataDeEventos, 'Race')
        percentajeOfAthendance(dataDeEventos, 'Museum')
        percentajeOfAthendance(dataDeEventos, 'Concert')
    }
    catch{
        console.log({error:true})
    }
}

getDataEventsStadisticsByCategoryUpcoming()


function getEventsCategoriesUpcoming(array){
    const TR_EventsByCategory1 = document.querySelector('#JS-TR-EventsByCategory-1')
    let mapCategory = array.map(element => element.category)
    let mapCategorySet = new Set(...[mapCategory])
    mapCategorySet.forEach((element)=>{
        TR_EventsByCategory1.innerHTML += `<td class="TD-JS">${element}</td>`
    })
}

function getRenuevesByEventsUpcoming(array,param){
    const TR_EventsByCategory2 = document.querySelector('#JS-TR-EventsByCategory-2')
    let filter = array.filter(e => e.category.includes(param))
    let mapFilterRenueves = filter.map(e => e.price * e.estimate)
    let reduceRenueves = mapFilterRenueves.reduce((acc,elem) => acc + elem)
    TR_EventsByCategory2.innerHTML += `<td class="TD-JS">${reduceRenueves} $</td>`
    return reduceRenueves
}

function percentajeOfAthendance(array,param){
    const TR_EventsByCategory3 = document.querySelector('#JS-TR-EventsByCategory-3')
    let filter = array.filter(e => e.category.includes(param))
    let mapFilterPercentaje = filter.map(e => e.estimate*e.capacity/100)
    let reducePercentaje = mapFilterPercentaje.reduce((acc,elem) => acc + elem / 100).toString().slice(0,2)
    TR_EventsByCategory3.innerHTML += `<td class="TD-JS">${reducePercentaje} % </td>`
}


//? Table Events Past Stadistics by category
async function getDataEventsPastStadisticsByCategoryPast(){
    try{
        let resData = await fetch('https://mh-amazing.herokuapp.com/amazing?time=past');
        let data = await resData.json();
        let dataDeEventos = data.events;
        console.log('Data de eventos past 2',dataDeEventos)

        getEventsPastCategories(dataDeEventos)
        getRenuevesPastBy(dataDeEventos, 'Cinema')
        getRenuevesPastBy(dataDeEventos, 'Concert')
        getRenuevesPastBy(dataDeEventos, 'Food')
        getRenuevesPastBy(dataDeEventos, 'Race')
        getRenuevesPastBy(dataDeEventos, 'Books')
        getRenuevesPastBy(dataDeEventos, 'Museum')
        getRenuevesPastBy(dataDeEventos, 'Party')
        percentajePastOfAthendance(dataDeEventos, 'Cinema')
        percentajePastOfAthendance(dataDeEventos, 'Concert')
        percentajePastOfAthendance(dataDeEventos, 'Food')
        percentajePastOfAthendance(dataDeEventos, 'Race')
        percentajePastOfAthendance(dataDeEventos, 'Books')
        percentajePastOfAthendance(dataDeEventos, 'Museum')
        percentajePastOfAthendance(dataDeEventos, 'Party')
    }
    catch{
        console.log({error:true})
    }
}

getDataEventsPastStadisticsByCategoryPast()


function getEventsPastCategories(array){
    const TR_3_Categories = document.querySelector('#JS-TR-3-Categories')
    let mapCategory = array.map(element => element.category)
    let mapCategorySet = new Set(...[mapCategory])
    mapCategorySet.forEach((element)=>{
        TR_3_Categories.innerHTML += `<td class="TD-JS">${element}</td>`
    })
}

function getRenuevesPastBy(array,param){
    const TR_EventsByCategory2 = document.querySelector('#JS-TR-3-Revenues')
    let filter = array.filter(e => e.category.includes(param))
    let mapFilterRenueves = filter.map(e => e.price * e.assistance)
    let reduceRenueves = mapFilterRenueves.reduce((acc,elem) => acc + elem)
    TR_EventsByCategory2.innerHTML += `<td class="TD-JS">${reduceRenueves} $</td>`
    return reduceRenueves
}

function percentajePastOfAthendance(array,param){
    const TR_EventsByCategory3 = document.querySelector('#JS-TR-3-PerOfAthendance')
    let filter = array.filter(e => e.category.includes(param))
    let mapFilterPercentaje = filter.map(e => e.assistance*e.capacity/100)
    let reducePercentaje = mapFilterPercentaje.reduce((acc,elem) => acc + elem / 100).toString().slice(0,2)
    TR_EventsByCategory3.innerHTML += `<td class="TD-JS">${reducePercentaje} % </td>`
}