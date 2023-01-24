// Declaracion de Arrays y objetos
let tiposDeAlfombra = []

const objetoEventCarpet = {
    nombre: "Event Carpet",
    precio: 25,
    descuentoStandar:10/100,
    cantidadMaxima: 2000,
    color: ["Blanco","Negro","Rojo", "Azul", "Rosa", "Amarillo", "Naranja", "Verde", "Gris", "Marron", "Violeta"],
    calcularPrecio: (colorAlfombra, mtrsDeCarpet) => {
        precioEventCarpet = mtrsDeCarpet * objetoEventCarpet.precio
        alert("El costo por la alfombra de color " + colorAlfombra + " es de: $" + precioEventCarpet)
        return precioEventCarpet
    }
}

const objetoPlushCarpet = {
    nombre: "Plush Carpet",
    precio: 40,
    descuentoStandar:10/100,
    cantidadMaxima: 2000,
    color: ["Blanco","Negro","Rojo", "Azul", "Rosa", "Amarillo", "Naranja", "Verde", "Gris", "Marron", "Violeta"],
    calcularPrecio: (colorAlfombra,mtrsDeCarpet) => {
        precioPlushCarpet = mtrsDeCarpet * objetoPlushCarpet.precio
        alert("El costo por la alfombra de color " + colorAlfombra + " es de: $" + precioPlushCarpet)
        return precioPlushCarpet
    }
}

const objetoDanceFloor = {
    nombre: "Dance Floor",
    precio: 50,
    descuentoStandar:10/100,
    cantidadMaxima: 250,
    color: ["Blanco","Negro"],
    calcularPrecio: (colorDanceFloor, mtrsDeDanceFloor) => {
        precioDanceFloor = mtrsDeDanceFloor * objetoDanceFloor.precio
        alert ("El costo por el dance floor de color " + colorDanceFloor + " es de: $" + precioDanceFloor)
        return precioDanceFloor
    } 
}

tiposDeAlfombra.push(objetoEventCarpet, objetoPlushCarpet, objetoDanceFloor)
let listaDeTiposDeAlfombra = tiposDeAlfombra.map(tiposDeAlfombra => tiposDeAlfombra.nombre)

//Inicializacion de variables y funciones a utilizar
let costo = 0
let costoPlush = 0
let costoDanceFloor = 0
let costoTotalEventCarpets = 0
let costoTotalPlushCarpets = 0
let costoTotalDanceFloor = 0
const suma = (a,b) => a + b 

//Alfombras del tipo Event Carpet

let eventCarpet = prompt("Desea cotizar alfombras del tipo Event Carpets?").toLowerCase()

if (eventCarpet == "si") {
    
    let cantidadDeColores;
    do {
        cantidadDeColores = parseInt(prompt("Ingrese la cantidad de colores que desea (1-11)",0))
    } while (isNaN(cantidadDeColores) || cantidadDeColores < 1 || cantidadDeColores > 11);

    for (let i = 0; i < cantidadDeColores; i++) {
    
    let colorAlfombrai = prompt("Ingrese el color deseado: " + objetoEventCarpet.color).toLowerCase();
    let mtrsDeCarpeti;
    do {
        mtrsDeCarpeti = parseInt(prompt("Ingrese la cantidad de metros cuadrados deseado (1-2000)"));        
    } while (isNaN(mtrsDeCarpeti) || mtrsDeCarpeti < 1 || mtrsDeCarpeti > 2000);

   // costo = parseInt(calculoDePrecioEventCarpets(colorAlfombrai,mtrsDeCarpeti))
    costo = parseInt(objetoEventCarpet.calcularPrecio(colorAlfombrai,mtrsDeCarpeti))
    costoTotalEventCarpets = suma(costoTotalEventCarpets,costo)
    }

    alert("El costo total por las Event Carpets es de: $" + costoTotalEventCarpets)
}


//Alfombras del tipo Plush Carpet

let plushCarpet = prompt("Desea cotizar alfombras del tipo Plush Carpets?").toLowerCase()

if (plushCarpet == "si") {
      
    let cantidadDeColoresPlush;
    do {
        cantidadDeColoresPlush = parseInt(prompt("Ingrese la cantidad de colores que desea (1-11)",0))
    } while (isNaN(cantidadDeColoresPlush) || cantidadDeColoresPlush < 1 || cantidadDeColoresPlush > 11);

    for (let i = 0; i < cantidadDeColoresPlush; i++) {
    
    let colorAlfombraPlushi = prompt("Ingrese el color deseado: " + objetoPlushCarpet.color).toLowerCase();
    let mtrsDeCarpetPlushi;
    do {
        mtrsDeCarpetPlushi = parseInt(prompt("Ingrese la cantidad de metros cuadrados deseado (1-2000)"));        
    } while (isNaN(mtrsDeCarpetPlushi) || mtrsDeCarpetPlushi < 1 || mtrsDeCarpetPlushi > 2000);

    costoPlush = parseInt(objetoPlushCarpet.calcularPrecio(colorAlfombraPlushi,mtrsDeCarpetPlushi))
    costoTotalPlushCarpets = suma(costoTotalPlushCarpets,costoPlush)
    }

    alert("El costo total por las Plush Carpets es de: $" + costoTotalPlushCarpets)
};


//Dance Floor

let danceFloor = prompt("Desea cotizar alquiler de Dance Floor?").toLowerCase()

if (danceFloor == "si") {
        
    let cantidadDeColoresDanceFloor;
    do {
        cantidadDeColoresDanceFloor = parseInt(prompt("Ingrese la cantidad de colores que desea (1-2)",0))
    } while (isNaN(cantidadDeColoresDanceFloor) || cantidadDeColoresDanceFloor < 1 || cantidadDeColoresDanceFloor > 2);

    for (let i = 0; i < cantidadDeColoresDanceFloor; i++) {
    
    let colorDanceFloori = prompt("Ingrese el color deseado: " + objetoDanceFloor.color).toLowerCase();
    let mtrsDeDanceFloori;
    do {
        mtrsDeDanceFloori = parseInt(prompt("Ingrese la cantidad de metros cuadrados deseado (1-250)"));        
    } while (isNaN(mtrsDeDanceFloori) || mtrsDeDanceFloori < 1 || mtrsDeDanceFloori > 250);

    costoDanceFloor = parseInt(objetoDanceFloor.calcularPrecio(colorDanceFloori,mtrsDeDanceFloori))
    costoTotalDanceFloor = suma(costoTotalDanceFloor,costoDanceFloor)
    }

    alert("El costo total por el Dance Floor es de: $" + costoTotalDanceFloor)
};

// Descuentos
const DescuentoGeneral = 10/100 //en porcentaje
let descuento = 0
let costoPreImpuestos = suma(suma(costoTotalEventCarpets,costoTotalPlushCarpets),costoTotalDanceFloor)

if (costoPreImpuestos > 3000) {
    descuento = costoPreImpuestos * DescuentoGeneral
}

// Calculos finales para el presupuesto
const SumarIVA = (neto) => neto * 1.21
let costoFinal = SumarIVA(costoPreImpuestos) - descuento

if (eventCarpet != "si" && plushCarpet != "si" && danceFloor != "si") {
    alert('Usted no ha seleccionado ningún tipo de alfombra para cotizar.')
} else if (descuento > 0) {
    alert (`Por la cantidad solicitada se le ha otorgado un descuento del 10% sobre el subtotal antes de impuestos!`)
    alert('El costo total de su presupuesto es de $'+ costoFinal)
    alert(`Gracias por confiar en AuCarpet!`)
} else {
    alert('El costo total de su presupuesto incluyendo impuestos es de $'+ costoFinal)
    alert(`Gracias por confiar en AuCarpet!`)
}

