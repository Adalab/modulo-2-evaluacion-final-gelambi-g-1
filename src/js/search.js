import './listFav';

const inputSearch = document.querySelector(".js-input-search");
const btnSearch = document.querySelector(".js-btn-search");

let listSeries = [];
let listSeriesFav = [];

function handleClickFav (ev) {
    const liClicked = parseInt (ev.currentTarget.id);
    console.log(liClicked);
    const serieSelected = listSeries.find((eachSerie) => eachSerie.mal_id === liClicked);
console.log(serieSelected);

    const indexFavSelected = listSeriesFav.filter((serie) => serie.mal_id === liClicked);
    if(indexFavSelected.length === 0) {
        listSeriesFav.push(serieSelected);
    } else {
        console.log("jj")
    }
    
  renderSeries(listSeries)
}

function listenerSeriesFav () {
    const allSeriesLi = document.querySelectorAll(".js-list-element");
    for (const li of allSeriesLi) {
        li.addEventListener("click", handleClickFav)
    }
};

//funcion que pide los datos a la API
function getDataApi (search) {
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`) 
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        listSeries = data.data
        renderSeries(listSeries)
    })

};

const ulList = document.querySelector(".js-listResult");
const boxResult = document.querySelector(".js-box-result");

//funcion que pinta la lista de series
function renderSeries (list) {
    for (const serieList of list) {
        const li = document.createElement("li");
        ulList.appendChild(li);
        li.setAttribute("class", "list-element js-list-element");
        li.setAttribute("id", serieList.mal_id)

        const article = document.createElement("article");
        li.appendChild(article);
        article.setAttribute("class", "list-direction")

        const image = document.createElement  ("img"); 
        image.setAttribute("src", serieList.images.jpg.image_url);
        const title = document.createElement ("p");
        const titleP = document.createTextNode (serieList.title);
        title.appendChild(titleP)
        article.append(image, titleP);

        if(serieList.images.jpg.image_url === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
        image.setAttribute("src", "https://placehold.co/220x310?text=Imagen+no+disponible")
        };

        listenerSeriesFav();    

       
}};

renderSeries(listSeries)  

//funcion de buscar las series
function handleClickSearch (ev) {
    ev.preventDefault();
    const inputSearchValue = inputSearch.value; 
    const span = document.querySelector(".js-span-no-title");
    if (inputSearchValue === "") {//aquí podria afegir si el titol no es troba
        span.innerHTML = `No hay nada`
    } else {
        span.innerHTML = ""
        getDataApi(inputSearchValue)
    }
    
}

btnSearch.addEventListener("click", handleClickSearch);

