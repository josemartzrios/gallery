'use strict'
// Accedo al dom para editar los panels 
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

// Recorro cada panel en panels con forEach
// Agrego en la función callback el evento de click
// Agregó la función de togleOpen para abrir los paneles
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
