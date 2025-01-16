//función que pinta las series favoritas en la lista de favoritas
function renderSeriesFavorites () {
    //empezamos con la lista limpia
    listFav.innerHTML = "";

    //recorremos el bucle de la lista de favoritas y las pintamos
    for (const serie of listSeriesFav) {
        //se quita la clase hidden cuando selecionamos una serie 
        boxFav.classList.remove("hidden");

        listFav.innerHTML += 
        `<li class="list-li">
            <article>
                <img src="${serie.images.jpg.image_url}" alt="">
                <p>${serie.title}</p>
            </article>
        </li>
        <input class="js-resetFav" type="submit" value="X"/>`
        };
};

//función para selecionar las series favoritas
function handleClickFav (ev) {
    //recogemos el id de la serie que clicamos (ponemos parseInt para que los dos valores sean numeros y se puedan comparar)
    const liClicked = parseInt (ev.currentTarget.id);

    //comparamos id's para identificar el de la serie seleccionada
    const serieSelected = listSeries.find((eachSerie) => eachSerie.mal_id === liClicked);

    //comprobamos si la serie ya esta en favoritos. 
    const indexFavSelected = listSeriesFav.find((serie) => serie.mal_id === liClicked);

    //guardamos en una constante cada click que hacemos para despues poderle añadir la clase que necesitamos
    const serieFav = ev.currentTarget;

    if (!indexFavSelected) {
        //si la serie seleccionada no esta en la lista de favoritas, la añade
        listSeriesFav.push(serieSelected);
        //le anñade también la clase favorite, que es la que le da el color al borde y la letra
        serieFav.classList.add("favorite");
    };

    //ejecutamos la funcion para pintar la lista de series favoritas
    renderSeriesFavorites();

    //cuando carga la pagina tengo las series favs que ya marqué
    localStorage.setItem("seriesFav", JSON.stringify(listSeriesFav));
};

//función que escucha el evento click en cada li de la lista
function listenerSeriesFav () {
    const allSeriesLi = document.querySelectorAll(".js-list-element");
    for (const li of allSeriesLi) {
        li.addEventListener("click", handleClickFav);
    };
};