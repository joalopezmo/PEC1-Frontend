- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC1-Frontend.git
- Descripcion de lo realizado:

** EJERCICIO 2 - PRACTICAS GUIADAS **

Se siguieron con los ejemplos tal cual fueron planteados por los videos.

FORM VALIDATOR.

Se crean los archivos html, css y js.
De acuerdo con los requerimientos se agregaron los campos de añadir comprobaciones para la edad y la url, mediante dos funciones añadidas a traves de javascript. En este caso investigar la verificacion del URL en stackoverflow me ayudo mucho para la expresion regular a emplear.

EXCHANGE RATE CALCULATOR

Se crearon los archivos planteados dentro del ejemplo del video. En este ejercicio de empleo la API en su 6 version, por lo cual lo unico que diferia del ejemplo que se siguien fue el parametro 'rates' del objeto JSON que el fetch llama asincronamente. Se agregaron tambien al codigo JS lineas dentro del fetch para plantear el mensaje de error cuando se presente uno, y se agregaron las lineas del llamado de las funciones planteadas para mostrar el logo de estado de espera en la consulta al API. Las lineas de creacion de este logo, tanto HTML como CSS, se basaron modificaciones de ciertas ejercicios planteados de forma similar que mediante el foro de la asignatura se mencionaron, como crear el logo a doble linea con animacion de 10 como maximo. Por ultimo para evitar el ingreso de numeros negativos se agregaron al codigo HTML propiedades tales como, min y oninput para el cumplimiento del requerimiento del ejercicio.

MOVIE SEAT BOOKING

Se realizo los archivos de acuerdo al ejemplo que se planteo en el ejercicio del video. Esta actividad fue un poco mas compleja por el hecho de la modificacion de los tag options de las peliculas seleccionadas, puesto que el planteamiento de la seccion desplegable y su implementacion con el llamado asincrono fetch se habia desarrollado de forma similar al ejercicio anterior. Se creo una funcion selectionCurrency(), aqui se hace la llamada al API, y se plantean los options a ser creados mediante los metodos value e innerText. Los estados de los valores iniciales se dejaron fijos. Igualmente se creo un listener al desplegable creado al click para actualizar los campos. Creo que ejercicio se puede plantear en menos lineas de codigo, sin embargo, en este caso se dio prioridad a dar solucion correcta al requerimiento y no al codigo consiso.