# Despliegue

[Aquí](https://uo288047.github.io/sew2526/)

# Verificaciones y cosas pendientes
> [!NOTE]
> Poner el mismo nav en todos los documentos (el de piloto que modifiqué)
> Cambiar metadatos de memoria.html (están los de clasificación)
> Aumentar gap en layout-cards.css para que aprovechen mas viewport
> Cambiar el grid-column en h2 para no tener que especificar el 4, sino que ocupe el 100% del viewport

> [!WARNING]
> Fallo de estructura semántica al añadir contenido via script a meteorología.html
> Comprobaciones finales P6 (validación, accesibilidad, adaptabilidad)
> Validar el HTML dinámico de memoria HTML en varias condiciones (todas tapadas, todas destapada, alguna destapada, etc.)
> Validaciones nuevos CSS y comentar warnings

> [!CAUTION]
> Al final del proyecto: **Verificar toda la accesibilidad** (pág. 34 Seminario Accesibilidad)
> Adaptabilidad P6

# Notas P7

- **Prueba unitaria: Cronómetro** (no necesitamos utilizar nada de CSS)
    - Se utilizan objetos Temporal y Date dependiendo de cuál esté disponible (Temporal mejor que Date)
    - Si el Temporal no está disponible, se utiliza Date (la instanciación del Temporal se hará dentro de un try)
    - El método update se actualizará cada décima de segundo (para que los números corran), para esto utilizamos el método setInterval
    - setInterval(código, tiempo) donde tiempo será 100 milisegundos (1 décima de segundo). El resultado de este método se debe guardar para mostrarse.
    - El contexto se perderá a utilizar este método (perdemos el this), para solucionar esto tenemos que utilizar el bind()


- **Completar juego de memoria**
    - Añadiremos tablero bloqueado y primera carta y segunda carta en nuestro JS
    - Método para barajar (busca los hijos del main (articles) y los baraja). No es necesario sacar todas las cartas a un array y luego volver a meterlas, se puede hacerlo directamente sobre el DOM.
    - Método para deshabilitar cartas: cuando dos coinciden, se marca su data-estado a "revelada"
    - Método game over: este método se llama desde deshabilitar carta (cuando levanto dos iguales, compruebo si ya gané)
    - El resto de la lógica son comprobarPareja, cubrirCartas y voltearCarta
    - cubrirCartas, la ejecución de tapar las cartas se hará pasada un tiempo la comprobación (con setTimeOut)
    - En el constructor se establecen los atributos y se barajan las cartas (el tablero está bloqueado hasta que están barajadas)

- **Prueba de integración: Añadir el cronómetro al juego de memoria**
    - Importar primero el que script que primero se usa




