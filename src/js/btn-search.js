//funcion de buscar las series
function handleClickSearch (ev) {
    ev.preventDefault();
    const inputSearchValue = inputSearch.value; 
    const span = document.querySelector(".js-span-no-title");
    if (inputSearchValue === "") {
        span.innerHTML = `No hay nada`;
        //ponemos el array de series vacio para que se borre la lista si hay el input vacio
        listSeries = [];
    } else {
        span.innerHTML = ""
        getDataApi(inputSearchValue)
    };
    renderSeries(listSeries);
};

btnSearch.addEventListener("click", handleClickSearch);

