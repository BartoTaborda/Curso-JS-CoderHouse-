(function () {

/* ----------- Cotizador ----------- */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenidoCotizador = document.getElementById("contenidoCotizador");
const botonCarrito = document.getElementById("botonCarrito");
const containerCarrito = document.getElementById("containerCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const getProducts = async () => {
    const response = await fetch("../productos.json");
    const products = await response.json();

    products.forEach((product) => {

        let content = document.createElement("div");
        content.className = "productoCotizador"
        content.innerHTML = `
            <h3> ${product.nombre}</h3>
            <p>$ ${product.precio}</p>
        `;
        contenidoCotizador.append(content);
    
        let inputQuantity = document.createElement("input");
        inputQuantity.className = "inputCantidad";
        inputQuantity.min = 0;
        inputQuantity.max = 10000;
        inputQuantity.type = "number";
        inputQuantity.placeholder = "mtrs2";
        inputQuantity.step = 1;
        contenidoCotizador.append(inputQuantity);
    
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
                      inputQuantity.value = prod.cantidad;
                    }
                })
            } else {
                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: inputQuantity.value,
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
            <h2 class="tituloCarrito"> Carrito</h3>
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
                <div class="containerCantidadCarrito">
                    <span class="restar"> - </span>
                    <p>${product.cantidad}</p>
                    <span class="sumar"> + </span>
                </div>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <span class="botonEliminarItemCarrito"> ❌ </span>
            `;
    
            containerCarrito.append(containerItemsCarrito);
    
           // let restar = containerItemsCarrito.querySelector(".restar");
            // let sumar = containerItemsCarrito.querySelector(".sumar");

            let restar = containerItemsCarrito.querySelector(".containerCantidadCarrito").firstElementChild;
            let sumar = containerItemsCarrito.querySelector(".containerCantidadCarrito").lastElementChild;

            restar.addEventListener("click", () => {
                if (product.cantidad > 1) {
                    product.cantidad--;
                    armarCarrito();
                    guardarCarrito()
                }
            })
    
            sumar.addEventListener("click", () => {
                product.cantidad++;
                armarCarrito();
                guardarCarrito()
            })
    
    
            let eliminar = containerItemsCarrito.querySelector(".botonEliminarItemCarrito");
            eliminar.addEventListener("click", () => {
                eliminarItem(product.id);
            })
    
        });
    
        const totalCarrito = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        let totalDelCarrito = document.createElement("div");
            totalDelCarrito.className = "totalDelCarrito";
            totalDelCarrito.innerHTML = `
                <h3>El total es de  </h3>
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
}
getProducts();



/* ----------- Storage del carrito ----------- */

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
};

JSON.parse(localStorage.getItem("carrito"));


}());
