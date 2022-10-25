//*Variable del contenedor de las cards
const contenedorCardJS = document.querySelector('#Contenedor-Cards');
const contenedorChecksJS = document.querySelector('#Contenedor-Checks');

//*Funcion asincronica del fetch de la api
async function Render(){
    try{
        let resData = await fetch('https://mind-hub.up.railway.app/amazing');
        let data = await resData.json();
        let dataDeEventos = data.events;
        RenderForFilter(dataDeEventos, contenedorCardJS)
        RenderChecks(dataDeEventos, contenedorChecksJS)
        Filter(dataDeEventos, contenedorCardJS)
    }
    catch{
        console.log({error:true})
    }
}

Render()






