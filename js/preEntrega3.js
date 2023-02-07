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


/* ----------- Cotizador ----------- */

let productos = [
    {   
        id:1,
        nombre: "Velour Carpet",
        precio: 25,
        cantidad: 1,
    },
    {
        id:2,
        nombre: "Plush Carpet",
        precio: 35,
        cantidad: 1,
    },
    {
        id:3,
        nombre: "Artificial Turf",
        precio: 35,
        cantidad: 1,
    },
    {
        id:4,
        nombre: "Dance Floor",
        precio: 40,
        cantidad: 1,
    },
    {
        id:5,
        nombre: "Bollards",
        precio: 10,
        cantidad: 1,
    },
    {
        id:6,
        nombre: "A4 Sign Holders",
        precio: 12,
        cantidad: 1,
    },
    {
        id:7,
        nombre: "A3 Sign Holders",
        precio: 12,
        cantidad: 1,
    },
    {
        id:8,
        nombre: "Media Wall",
        precio: 50,
        cantidad: 1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenidoCotizador = document.getElementById("contenidoCotizador");
const botonCarrito = document.getElementById("botonCarrito");
const containerCarrito = document.getElementById("containerCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");

productos.forEach((product) => {

    let content = document.createElement("div");
    content.className = "productoCotizador"
    content.innerHTML = `
        <h3> ${product.nombre}</h3>
        <p>$ ${product.precio}</p>
    `;
    contenidoCotizador.append(content);

    let botonComprar = document.createElement("button");
    botonComprar.className = "botonAgregarAlCarrito"
    botonComprar.innerText = "Agregar al carrito";
    contenidoCotizador.append(botonComprar);

    botonComprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            })
        } else {
            carrito.push({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
        };

        carritoCounter();
        armarCarrito();
        guardarCarrito();
    })
});

const armarCarrito = () => {

    containerCarrito.innerHTML = "";
    containerCarrito.style.display = "flex";
    let contentCarrito = document.createElement("div");
    contentCarrito.className = "contentCarrito"
    contentCarrito.innerHTML = `
        <h2 class="tituloCarrito"> Carrito:</h3>
    `;
    containerCarrito.append(contentCarrito);

    const exitCarrito = document.createElement("p");
    exitCarrito.innerText= "X";
    exitCarrito.className = "botonExitCarrito";
    exitCarrito.addEventListener("click", () => {
        containerCarrito.style.display = "none";
    })

    containerCarrito.append(exitCarrito);

    carrito.forEach(product => {
        let containerItemsCarrito = document.createElement("div");
        containerItemsCarrito.className = "ContainerItemsCarrito";
        containerItemsCarrito.innerHTML = `
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
            <p>${product.cantidad}</p>
            <p>Subtotal: ${product.cantidad * product.precio}</p>
        `;

        containerCarrito.append(containerItemsCarrito);

        let eliminar = document.createElement("span");
        eliminar.innerText = "✖";
        eliminar.className = "botonEliminarItemCarrito";
        containerItemsCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarItem);
    });

    const totalCarrito = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    let totalDelCarrito = document.createElement("div");
        totalDelCarrito.className = "totalDelCarrito";
        totalDelCarrito.innerHTML = `
            <h3>El total es de $ </h3>
            <p>$${totalCarrito}</p>
        `;
    containerCarrito.append(totalDelCarrito);   

};

botonCarrito.addEventListener("click", armarCarrito);

const eliminarItem = () => {
    const foundItem = carrito.find((element) => element.nombre);
    carrito = carrito.filter((nuevoCarrito) => {
        return nuevoCarrito !== foundItem;
    })
    carritoCounter();
    armarCarrito();
    guardarCarrito();
};

const carritoCounter = () => {

    const carritoLenght = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLenght));

    cantidadCarrito.innerText = `(`+ JSON.parse(localStorage.getItem("carritoLength")) + `)`;

}

carritoCounter();

/* ----------- Storage del carrito ----------- */

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
};

JSON.parse(localStorage.getItem("carrito"));