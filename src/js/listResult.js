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
        const p = document.createElement ("p");
        let textNote = "";
         if (serieList.score >= 7) {
         textNote = `${serieList.score}. Recomendada`
        } else {
          textNote = `${serieList.score}`
        }
        const noteSerie = document.createTextNode (textNote); 
        p.appendChild(noteSerie);
        article.append(image, title, p);

        //hacemos la comparación de las urls de las imagenes, como sabemos que la primera url se rompe, le decimos que pinte otra
        if(serieList.images.jpg.image_url === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
        image.setAttribute("src", "https://placehold.co/220x310?text=Imagen+no+disponible");
        };

       

  listenerSeriesFav();
}};