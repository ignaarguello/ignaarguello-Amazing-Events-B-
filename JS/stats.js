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
        TR_EventStalistics.innerHTML += `<td>${moreAthendance}</td>`
        TR_EventStalistics.innerHTML += `<td>${lowestAthendance}</td>`
        TR_EventStalistics.innerHTML += `<td>${moreCapacity}</td>`
        
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
async function getDataEventsStadisticsByCategory(){
    try{
        let resData = await fetch('https://mh-amazing.herokuapp.com/amazing?time=upcoming');
        let data = await resData.json();
        let dataDeEventos = data.events;
        console.log('Data de eventos 2',dataDeEventos)

        getEventsCategoriesUpcoming(dataDeEventos)
        getRenuevesByEventsUpcoming(dataDeEventos)
        percentajeOfAthendance(dataDeEventos)
        
}
    catch{
        console.log({error:true})
    }
}

getDataEventsStadisticsByCategory()


function getEventsCategoriesUpcoming(array){
    const TR_EventsByCategory1 = document.querySelector('#JS-TR-EventsByCategory-1')
    let mapCategory = array.map(element => element.category)
    let mapCategorySet = new Set(...[mapCategory])
    mapCategorySet.forEach((element)=>{
        TR_EventsByCategory1.innerHTML += `<td class="TD-2">${element}</td>`
    })
}

function getRenuevesByEventsUpcoming(array){
    array.forEach((element)=>{
        const TR_EventsByCategory2 = document.querySelector('#JS-TR-EventsByCategory-2')
        let priceEstimated = element.estimate*element.price
        TR_EventsByCategory2.innerHTML += `<td class="TD-2">${priceEstimated}$</td>`
    })
}

function percentajeOfAthendance(array){
    array.forEach((element)=>{
        const TR_EventsByCategory3 = document.querySelector('#JS-TR-EventsByCategory-3')
        let percentajeOfAthendance = (element.estimate*element.capacity / 100).toString().slice(0,2)
        TR_EventsByCategory3.innerHTML += `<td class="TD-2">${percentajeOfAthendance} % </td>`
    })
}


//? Table Events Past Stadistics by category
async function getDataEventsPastStadisticsByCategory(){
    try{
        let resData = await fetch('https://mh-amazing.herokuapp.com/amazing?time=past');
        let data = await resData.json();
        let dataDeEventos = data.events;
        console.log('Data de eventos 2',dataDeEventos)

        getEventsPastCategoriesUpcoming(dataDeEventos)
        getRenuevesByEventsPastUpcoming(dataDeEventos)
        percentajePastOfAthendance(dataDeEventos)
        
}
    catch{
        console.log({error:true})
    }
}

getDataEventsPastStadisticsByCategory()


function getEventsPastCategoriesUpcoming(array){
    const TR_3_Categories = document.querySelector('#JS-TR-3-Categories')
    let mapCategory = array.map(element => element.category)
    let mapCategorySet = new Set(...[mapCategory])
    mapCategorySet.forEach((element)=>{
        TR_3_Categories.innerHTML += `<td class="TD-2">${element}</td>`
    })
}

function getRenuevesByEventsPastUpcoming(array){
    array.forEach((element)=>{
        const TR_3_Revenues = document.querySelector('#JS-TR-3-Revenues')
        let priceEstimated = element.assistance*element.price
        TR_3_Revenues.innerHTML += `<td class="TD-2">${priceEstimated}$</td>`
    })
}

function percentajePastOfAthendance(array){
    array.forEach((element)=>{
        const TR_3_PerOfAthendance = document.querySelector('#JS-TR-3-PerOfAthendance')
        let percentajeOfAthendance = (element.assistance*element.capacity / 100).toString().slice(0,2)
        TR_3_PerOfAthendance.innerHTML += `<td class="TD-2">${percentajeOfAthendance} % </td>`
    })
}