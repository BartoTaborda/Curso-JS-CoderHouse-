//Funciones que establecen el precio del producto presupuestado

function calculoDePrecioEventCarpets(colorAlfombra, mtrsDeCarpet) {
    precioEventCarpet= mtrsDeCarpet * 25
    alert("El costo por la alfombra de color " + colorAlfombra +" es de: $" + precioEventCarpet)
    return precioEventCarpet
}
function calculoDePrecioPlushCarpets(colorAlfombraPlush, mtrsDeCarpetPlush) {
    precioPlushCarpet= mtrsDeCarpetPlush * 40
    alert("El costo por la alfombra de color " + colorAlfombraPlush +" es de: $" + precioPlushCarpet)
    return precioPlushCarpet
}
function calculoDePrecioDanceFloor(colorDanceFloor, mtrsDeDanceFloor) {
    precioDanceFloor= mtrsDeDanceFloor * 50
    alert("El costo por el Dance Floor de color " + colorDanceFloor +" es de: $" + precioDanceFloor)
    return precioDanceFloor
}

//Inicializacion de variables a utilizar
let costo = 0
let costoPlush = 0
let costoDanceFloor = 0
let costoTotalEventCarpets = 0
let costoTotalPlushCarpets = 0
let costoTotalDanceFloor = 0

//Alfombras del tipo Event Carpet

let eventCarpet = prompt("Desea cotizar alfombras del tipo Event Carpets?").toLowerCase()

if (eventCarpet == "si") {
    
    let cantidadDeColores;
    do {
        cantidadDeColores = parseInt(prompt("Ingrese la cantidad de colores que desea (1-20)",0))
    } while (isNaN(cantidadDeColores) || cantidadDeColores < 1 || cantidadDeColores > 20);

    for (let i = 0; i < cantidadDeColores; i++) {
    
    let colorAlfombrai = prompt("Ingrese el color deseado:").toLowerCase();
    let mtrsDeCarpeti;
    do {
        mtrsDeCarpeti = parseInt(prompt("Ingrese la cantidad de metros cuadrados deseado (1-2000)"));        
    } while (isNaN(mtrsDeCarpeti) || mtrsDeCarpeti < 1 || mtrsDeCarpeti > 2000);

    costo = parseInt(calculoDePrecioEventCarpets(colorAlfombrai,mtrsDeCarpeti))
    costoTotalEventCarpets = costoTotalEventCarpets + costo
    }

    alert("El costo total por las Event Carpets es de: $" + costoTotalEventCarpets)
}


//Alfombras del tipo Plush Carpet

let plushCarpet = prompt("Desea cotizar alfombras del tipo Plush Carpets?").toLowerCase()

if (plushCarpet == "si") {
      
    let cantidadDeColoresPlush;
    do {
        cantidadDeColoresPlush = parseInt(prompt("Ingrese la cantidad de colores que desea (1-20)",0))
    } while (isNaN(cantidadDeColoresPlush) || cantidadDeColoresPlush < 1 || cantidadDeColoresPlush > 20);

    for (let i = 0; i < cantidadDeColoresPlush; i++) {
    
    let colorAlfombraPlushi = prompt("Ingrese el color deseado:").toLowerCase();
    let mtrsDeCarpetPlushi;
    do {
        mtrsDeCarpetPlushi = parseInt(prompt("Ingrese la cantidad de metros cuadrados deseado (1-2000)"));        
    } while (isNaN(mtrsDeCarpetPlushi) || mtrsDeCarpetPlushi < 1 || mtrsDeCarpetPlushi > 2000);

    costoPlush = parseInt(calculoDePrecioPlushCarpets(colorAlfombraPlushi,mtrsDeCarpetPlushi))
    costoTotalPlushCarpets = costoTotalPlushCarpets + costoPlush
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
    
    let colorDanceFloori = prompt("Ingrese el color deseado:").toLowerCase();
    let mtrsDeDanceFloori;
    do {
        mtrsDeDanceFloori = parseInt(prompt("Ingrese la cantidad de metros cuadrados deseado (1-250)"));        
    } while (isNaN(mtrsDeDanceFloori) || mtrsDeDanceFloori < 1 || mtrsDeDanceFloori > 250);

    costoDanceFloor = parseInt(calculoDePrecioDanceFloor(colorDanceFloori,mtrsDeDanceFloori))
    costoTotalDanceFloor = costoTotalDanceFloor + costoDanceFloor
    }

    alert("El costo total por el Dance Floor es de: $" + costoTotalDanceFloor)
};

// Descuentos

let descuento = 0
let costoPreImpuestos = costoTotalEventCarpets + costoTotalPlushCarpets + costoTotalDanceFloor

if (costoPreImpuestos > 3000) {
    descuento = costoPreImpuestos*0.10
}

// Calculos finales para el presupuesto

let costoFinal = costoPreImpuestos * 1.21 - descuento

if (eventCarpet != "si" && plushCarpet != "si" && danceFloor != "si") {
    alert("Usted no ha seleccionado ningún tipo de alfombra para cotizar.")
} else if (descuento > 0) {
    alert (`Por la cantidad solicitada se le ha otorgado un descuento del 10% sobre el subtotal antes de impuestos!`)
    alert("El costo total de su presupuesto es de $"+ costoFinal)
    alert(`Gracias por confiar en AuCarpet!`)
} else {
    alert("El costo total de su presupuesto incluyendo impuestos es de $"+ costoFinal)
    alert(`Gracias por confiar en AuCarpet!`)
}

