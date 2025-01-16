//función para limpiar el localStorage y que la página vuelva al estado original
btnReset.addEventListener('click', () =>{
    //borrar los datos de LS
    localStorage.clear();
    //recargar la página
    location.reload();
});

resetSerieFav.addEventListener("click", () => {
    const resetSerie = listSeriesFav.splice(1, 1);
    resetSerie = [];
})
//recorrer array, com amb la llista