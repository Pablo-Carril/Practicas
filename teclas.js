
// MANEJO DE EVENTOS DE TECLADO

var parrafo1 = document.getElementById("teclas1");
var parrafo2 = document.getElementById("teclas2");
var parrafo3 = document.getElementById("teclas3");


window.addEventListener('load', function() {            // ejemplo de evento que marca el fin de la carga. No hace falta para el focus.
    console.log('La página ha terminado de cargarse');  // No funciona desde Visual Studio Code, pero sí desde afuera. no sé porqué.
    parrafo1.focus();       // ponemos el foco en parrafo1.  buscar un mejor contenedor jaja
   // parrafo1.classList.add("resaltado");  // le agregamos una clase css, en este caso un borde resaltado
});

window.addEventListener('keydown', (evento) => {      //Capturamos (escuchamos) los eventos de teclado
    tecla = evento.code;                        // Pasamos a una variable AUXILIAR, Si no NO FUNCIONA! NO podemos imprimir directamente event.code
    parrafo1.textContent = "evento.Code: " + tecla;                     
    parrafo2.textContent = "evento.Key: " + evento.key;            
    parrafo3.textContent = "keycode: " + evento.keyCode;    // .KeyCode está en DESUSO. si bien funciona, lo marca como Deprecated (obsoleto);

    if (tecla == "KeyW") console.log("Arriba");    // ejemplo de uso. siempre conviene .key
})

// function teclas(ev) {               // ejemplo de llamada a una función externa (poco práctico)
//    console.log("presionada: ");
//    var tecli = ev.key;
//    console.log(tecli)
//    }
// window.addEventListener('keyup', (e) => teclas(e));


// EJEMPLO real Para un Juego:

//window.addEventListener('keydown', (event) => {   // al PRESIONAR teclas...
//    switch (event.key) {
//     case 'd': console.log ('moviendo a la derecha'); tecla.d.presionada = true; break     //jugador.velocidad.x = 1; break    
//     case 'a': console.log ('moviendo a la izquierda'); tecla.a.presionada = true; break    //jugador.velocidad.x = -1; break 
//     case 'w': console.log ('moviendo hacia arriba'); jugador.velocidad.y = -15; break     // SALTA!
//     case 's': console.log ('moviendo hacia abajo'); break
//   }
//  } );