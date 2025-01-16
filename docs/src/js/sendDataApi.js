//funcion que pide los datos a la API
function getDataApi (search) {
    //ponemos la variable porque el enlaze va a variar dependiendo del valor del input
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`) 
    .then((resp) => resp.json())
    .then((data) => {
        listSeries = data.data;
        renderSeries(listSeries);
        localStorage.setItem("seriesFav", JSON.stringify(listSeriesFav))
    });
};
