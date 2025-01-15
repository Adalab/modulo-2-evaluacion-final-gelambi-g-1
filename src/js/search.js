

const inputSearch = document.querySelector(".js-input-search");
const btnSearch = document.querySelector(".js-btn-search");
const ulList = document.querySelector(".js-listResult");
const boxResult = document.querySelector(".js-box-result");
const listFav = document.querySelector(".js-listFav");
const boxFav = document.querySelector(".js-box-fav");

let listSeries = [];
let listSeriesFav = [];


//función que pinta las series favoritas en la lista de favoritas
function renderSeriesFavorites () {
    //empezamos con la lista limpia
    listFav.innerHTML = "";

    //se quita la clase hidden cuando selecionamos una serie 
    boxFav.classList.remove("hidden");

    //recorremos el bucle de la lista de favoritas y las pintamos
    for (const serie of listSeriesFav) {
        listFav.innerHTML += 
        `<li class="list-li">
            <article>
                <img src="${serie.images.jpg.image_url}" alt="">
                <p>${serie.title}</p>
            </article>
        </li>`
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

    //cuando carga la pagina tendo las series favs que ya marqué
    localStorage.setItem("seriesFav", JSON.stringify(listSeriesFav));
};

//función que escucha el evento click en cada li de la lista
function listenerSeriesFav () {
    const allSeriesLi = document.querySelectorAll(".js-list-element");
    for (const li of allSeriesLi) {
        li.addEventListener("click", handleClickFav);
    };
};

//funcion que pide los datos a la API
function getDataApi (search) {
    //ponemos la variable porque el enlaze va a variar dependiendo del valor del input
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`) 
    .then((resp) => resp.json())
    .then((data) => {
        listSeries = data.data;
        renderSeries(listSeries);
        localStorage.setItem("seriesServer", JSON.stringify(listSeries))
    });

};


//funcion que pinta la lista de series
function renderSeries (list) {
    //que empieze la lista vacía y en cada busqueda se limpie la lista
    ulList.innerHTML = "";
    for (const serieList of list) {
        //para que empieze la lista vacía i se sumen todos los elementos encontrados en la lista
        ulList.innerHTML += "";

        //con DOM avanzado creamos los elementos que van a aparecer en la lista con los datos del servidor
        const li = document.createElement("li");
        ulList.appendChild(li);
        li.setAttribute("class", `list-element js-list-element`);
        li.setAttribute("id", serieList.mal_id)

        const article = document.createElement("article");
        li.appendChild(article);
        article.setAttribute("class", "list-direction")

        const image = document.createElement  ("img"); 
        image.setAttribute("src", serieList.images.jpg.image_url);
        const title = document.createElement ("p");
        const titleP = document.createTextNode (serieList.title);
        title.appendChild(titleP)
        article.append(image, title);

        //hacemos la comparación de las urls de las imagenes, como sabemos que la primera url se rompe, le decimos que pinte otra
        if(serieList.images.jpg.image_url === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
        image.setAttribute("src", "https://placehold.co/220x310?text=Imagen+no+disponible");
        };
  listenerSeriesFav();
}};


//funcion de buscar las series
function handleClickSearch (ev) {
    ev.preventDefault();
    const inputSearchValue = inputSearch.value; 
    const span = document.querySelector(".js-span-no-title");
    if (inputSearchValue === "") {
        span.innerHTML = `No hay nada`
    } else {
        span.innerHTML = ""
        getDataApi(inputSearchValue)
    }
    renderSeries(listSeries)  
}

btnSearch.addEventListener("click", handleClickSearch);


//no es guarda bé la informació, em surt quan carrega un element que no he buscat i no es guarda la llista de favs
//creamos dos constantes para guardar la información de las dos listas
const dataSeriesLS = localStorage.getItem("seriesServer");
const favDataSeriesLS = localStorage.getItem("seriesFav");
if(dataSeriesLS) {
    listSeries = JSON.parse(dataSeriesLS);
    if(favDataSeriesLS) {
        listSeriesFav = JSON.parse(favDataSeriesLS);
    }
    renderSeries(listSeries);
} else {
    getDataApi ();
}