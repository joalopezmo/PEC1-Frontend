- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya

** ejercicio 1 - preguntas teoricas ***

**PARTE UNO/La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.**

    ---- ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

        ** R/  Utilizar HTML semantico implica un diseño mas limpio en el codigo que se emplea en la pagina. La semantica no tiene que ver con la visualidad y presentacion, si no, con la estructura, el orden y el significado de cada etiqueta.
        Asi pues, las ventajas de usar HTML semantico aportan distintas ventajas, tales como:

        -Accesibilidad: Esta propiedad permiten lectura de contenido de acuerdo a la estructura del codigo realizado para usuarios con dificultades visuales. Cursor accesible, tamaño de fuentes, contraste de colores, el uso del atributo <href>, entre otros.

        -Reusabilidad: El orden y la correcta separacion de elementos permite que una pagina sea rediseñada, solamente con cambiar el codigo CSS, permitiendo la escalabilidad de cualquier proyecto.

        -Pocisionamiento en buscadores: Una de las caracteristicas mas importantes del uso del HTML semantico es el uso del posicionamiento en buscadores; ya que los distintos algoritmos de busqueda puntuan los sitios web a traves de sus etiquetas semanticas y analisis del marcado.**

    ---- Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

        ** R/ -DOM: Document Object Model, es un interfaz de programacion de aplicaciones que conecta la pagina web con scripts o lenguajes de programacion mediante la representacion de la estructura del documento en la memoria. EL DOM representa un documento utilizando una logica de arbol, donde cada rama termina en un nodo y cada nodo contiene un elemento del DOM. Este metodo de acceso permite una programacion mas limpia donde se puede cambiar la estructura documental, estilos o contenido.

        -Background Fetch API: este API provee metodos para administrar las descargas que tal vez puedan llevar un tiempo en estar listas, tales como videos, archivos de audio y piezas de software.

        -Console API: Provee la visualizacion de la funcionalidad logica y permite a los desarrolladores realizar tareas de debugg, como mensajes de debugg, valores de variables, entre otros.**

    ---- Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

        ** R/ Las media queries permiten modificar elementos de la pagina web o en funcion del tipo de dispositivo o caracteristica y parametros definidos.**

    ---- Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).

        ** R/
        -Superconjunto de javascript: Typescript es un lenguaje creado encima de javascript, por lo que todo codigo javascript es valido en typescript y de la misma manera todo codigo typescript se comportara en su ejecucion similar al codigo javascript, manteniendo sus caracteristicas sin alterar; ademas de admitir bibliotecas de javascript.

        -Compilacion a Javascript: Typescript por si solo no se ejecuta en dispositivos o navegadores, sino que debe ser compilado antes de su ejecucion.

        -Lenguaje tipado: Typescript trabaja con datos estaticos encima de javascript, este tipo de datos solo sirven en el desarrollo como forma de debugging, ya que una vez compilado son removidos.

        -Evolucion del lenguaje: Typescript no depende de la estandarizacion de javascript. De hecho fue desarollado por Microsoft en 2012, y le ofrece soporte constantemente, aportando caracteristicas propias de otros lenguajes o innovaciones modernas.**

**PARTE DOS/El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas**

    ---- Cita al menos 2 de estos preprocesadores.
        ** R/ Less y Sass **

    ---- Cita al menos 4 ventajas que ofrecen estos preprocesadores.
     ** R/ 
        - Se pueden utilizar variables para aplicar estilos a un elemento HTML, lo que facilita el mantenimiento de las hojas de estilo
        - Se reduce el codigo CSS repetitivo mediante la reutilizacion de las variables.
        - La compilacion del pseudocodigo CSS asegura la compatibilidad de los distintos navegadores actuales.
        - Los preprocesadores permiten operar, anidar, utilizar funciones, namespaces y mixins que simplifican significativamente la escritura del codigo CSS.**

    ---- Explica brevemente en qué consisten los sourcemaps.
        ** R/
        Los sourcemaps son unos archivos que guia, o "mapea" del estado transformado al estado original del codigo del script que se encuentra descargado en el navegador al acceder a una pagina web determinada. Este mapeo permite mostrarle a desarrollador el codigo original en la herramienta de debugger y trabajar directamente en el.**

    ---- Explica qué es un transpilador.
        ** R/
        Un transpilador es un programa compilador que permite traducir de un codigo entre 2 lenguajes que se encuentran en el mismo nivel de abstraccion. Compilacion permite traducir codigo de un lenguaje dado a otro lenguaje. Si bien no todos los compiladores son transpiladores, todos los transpiladores si compilan. Un ejemplo basico de transpilacion puede ser cuando se traduce codigo typescript a javascript, ya que ambos lenguajes provienen del mismo nivel de abstraccion, siendo uno, una variacion del otro.**

**PARTE TRES/El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos**


    ---- Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
        ** R/
        Sistemas de control de versiones: Git y Perforce.

        Heramientas de gestion de modulos: Yarn y npm.**

    ---- Cita y explica al menos 3 comandos de Git.

        ** R/
        - git init: Crear un nuevo repositorio en la direccion indicada.

        - git status: Verifica el estado de los archivos del repositorio.

        - git commit: Confirma los cambios de manera definitiva, lo que permite que estos cambios se guarden permanentemente en el repositorio.**

    ---- Cita y explica brevemente las características más definitorias de WebPack.
        ** R/
        Webpack es un gestor de paquetes de modulos, principalmente de javascript que permite gestion de dependencias y permite principalmente trabajar los proyectos de desarollo de aplicaciones web mediante una gestion de modulos separados. Webpack toma los modulos y dependencia y genera activos estaticos que representen estos modulos. De la misma forma permite la eliminacion de recursos no utilizados para llevar a produccion solo aquello que el proyecto utilice, tambien permite la modularizacion de javascript compatibilizando estos con los navegadores actuales.

