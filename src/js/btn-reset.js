//función para limpiar el localStorage y que la página vuelva al estado original
btnReset.addEventListener('click', () =>{
    //borrar los datos de LS
    localStorage.clear();
    //recargar la página
    location.reload();
});
