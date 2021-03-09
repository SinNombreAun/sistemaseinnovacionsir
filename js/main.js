const fila = document.querySelector('.contenedor-carrusel');
const fotos = document.querySelectorAll('.modulo');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ----- agregar evento para el scroll flecha derecha -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

// ----- agregar evento para el scroll flecha izquierda -----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});
// ----- paginacion -----
//const numeroPaginas = Math.ceil(fotos.lengt / 5);
//for(let i = 0; i < numeroPaginas; i++){
    //const indicador = document.createElement('button');
    
    //if(i === 0){
        //indicador.classList.add('activo');
    //}

    //document.querySelector('.indicadores').appensChild(indicador);
    //indicador.addEventListener('click', (e) => {
        //fila.scrollLeft = i * fila.offsetWidth;

        //document.querySelector('.indicadores .activo') .classList.remove('activo');
        //e.target.classList.add('activo');
    //});
//}

// --------- agregamos hover para que las imagenes se eleven cada que pasen sobre ella ----------
fotos.forEach((foto) => {
    foto.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            fotos.forEach(foto => foto.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

// eliminar clase hover de todo el carrusel para que las imagenes regresen a su pocision
fila.addEventListener('mouseleave',() => {
    fotos.forEach(foto => foto.classList.remove('hover'));
});
