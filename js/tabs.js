/* ----------- Objeto con las propiedades - Tabs lista de precios ----------- */

const listaDePrecios = {
    encabezado: document.getElementById('encabezado').firstElementChild,
    contenido: document.getElementById('contenido').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado li a'),
    li_encabezado: document.querySelectorAll('#encabezado li'),
    divs_contenido: document.querySelectorAll('#contenido > div'),
    contenido_activo: null,
}

/* ----------- Objeto con los metodos - Tabs lista de precios ----------- */

const metTab = {

    inicio: function () {
    listaDePrecios.encabezado.className = "active";
    listaDePrecios.contenido.className = "active";

    for (let i = 0; i < listaDePrecios.enlaces_encabezado.length; i++) {
        const element = listaDePrecios.enlaces_encabezado[i].addEventListener("click", metTab.eventoTabs);  
    }
    },

    eventoTabs: function (e) {
        e.preventDefault();

        for (let i = 0; i < listaDePrecios.li_encabezado.length; i++) {
            listaDePrecios.li_encabezado[i].className = '';
        }
        for (let i = 0; i < listaDePrecios.divs_contenido.length; i++) {
            listaDePrecios.divs_contenido[i].className = '';
        }

        this.parentElement.className = 'active';
        listaDePrecios.contenido_activo = this.getAttribute('href');
        document.querySelector(listaDePrecios.contenido_activo).className = 'active';
        document.querySelector(listaDePrecios.contenido_activo).style.opacity = 0;
        setTimeout(function () {
            document.querySelector(listaDePrecios.contenido_activo).style.opacity = 1;
        },100)
    }
}

metTab.inicio();


