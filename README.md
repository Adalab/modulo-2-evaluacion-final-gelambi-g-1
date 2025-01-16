**Módulo 2: Evaluació final Gemma Gelambí**

Este es el proyecto de evaluación del módulo 2: JavaScript.

El proyecto consiste en crear un buscador de series de anime, cogiendo los datos de una API. Tabajamos con el framework Vite y con el código SCSS/SASS.

En el proyecto se ha hecho una pequeña maquetación en el HTML y en SCC, para poder poner en práctica añadir los elementos des del JS. 
Se ha trabajado con addEventListener, para escuchar los eventos "click"; se ha usado bucles for of

**Partials**
HTML: se ha hecho un partial para cada sección.
CSS: sólo hay un partial porque no hay mucho estilo.
JS: se ha hecho un partial para todas las variables, para hacer la petición de información a la API, para guardar la información en el localStorage y para las diferentes acciones, intentando tener el mínimo de codigo en cada partial. 

**Interacciones**

**Botones:**
- **Buscar:** se ha escuchado el evento en el botón de buscar, comprovando si el input tiene contenido o no. Si está vacio, sale un mensage; si está lleno, sale la lista con las series que coinciden con el valor del input. Se ha hecho con una función clásica.
- **Reset:** se ha escuchado el evento en el botón de reset. Al hacer click, se borra la información guardada en el localStorage, la página se carga y vuelve a como estaba al principio. Se ha hecho con una función arrow.

**Listas:**
- **Lista de resultados:** aparece cuando abrimos la página. Cuando haces una búsqueda, te sale la lista de coincidencias. Cada busqueda, se limpia la lista y aparece la nueva. Si no hay nada en el input, no sale nada en la lista.
Para añadir los elementos a la lista, se ha hecho con una función clásica, se ha recorrido el bucle del array de la lista de series y con el DOM avanzado se ha añadido cada elemento. Se ha puesto una condición por si sale una URL que sabemos que rompe el código, salga otra imagen predefinida.
- **Lista de series favoritas:** al cargar la página tiene una clase que la oculta, solo aparece cuando añadimos series.
Se ha hecho con una función clasica, recorriendo el array de la lista de series favoritas y añadiendo cada elemento con innerHTML.

**LocalStorage:**
Se ha guardado la información de las series seleccionadas como favoritas. 
Se ha ejecutado la función de pintar la lista de series favortias, para que, al cargar la página, salga la lista con las series que ya tenemos en la lista de favoritas.

**Petición de información:**
Se ha hecho la petición de información a la API. Como el enlaze de petición varia dependiendo de lo que la usuària busque, se ha puesto la URL con una variable. 
