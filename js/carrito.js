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
    exitCarrito.innerText= "❎";
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
            <span class="botonEliminarItemCarrito"> ❌ </span>
        `;

        containerCarrito.append(containerItemsCarrito);


        let eliminar = containerItemsCarrito.querySelector(".botonEliminarItemCarrito");
        eliminar.addEventListener("click", () => {
            eliminarItem(product.id);
        })

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

const eliminarItem = (id) => {
    const foundItem = carrito.find((element) => element.id === id);
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
