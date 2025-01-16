//creamos la constante para guardar la información de la lista de fav
const favDataSeriesLS = localStorage.getItem("seriesFav");
if(favDataSeriesLS) {
    listSeriesFav = JSON.parse(favDataSeriesLS);
};

renderSeriesFavorites();