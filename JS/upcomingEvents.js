//*Variable del contenedor de las cards
const contenedorCardJS = document.querySelector('#Contenedor-Cards');
//*Variable del contenedor de los checkbox
const contenedorChecksJS = document.querySelector('#Contenedor-Checks');

//*Funcion asincronica del fetch de la api
async function startRender(){
    try{
        let resData = await fetch('https://mh-amazing.herokuapp.com/amazing?time=upcoming');
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

startRender()

