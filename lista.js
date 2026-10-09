let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "leche";
listaDeSuper[2] = "pan";
listaDeSuper[3] = "huevos";
listaDeSuper[4] = "arroz";
console.log(listaDeSuper[0]);
let ultimoElemento = listaDeSuper.length - 1;
console.log(listaDeSuper[ultimoElemento]);
console.log(listaDeSuper);


let listaDeSuper = [];
listaDeSuper[0] = "sal";
listaDeSuper[1] = "leche";
listaDeSuper[2] = "pan";
listaDeSuper.push("arroz");
listaDeSuper.push("fideos");
listaDeSuper.unshift("azucar");
listaDeSuper.unshift("aceite");
console.log(listaDeSuper.length);
let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.pop();
console.log(listaDeSuper.length);


let listaDeSuper = ["Sal", "Leche", "Arroz"];
function logItems(arreglo) {
    arreglo.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
    });
}

let comando = "";

while (comando !== "salir") {
    comando = prompt(
        '¿Qué querés hacer? Escribí: nuevo, listar, borrar o salir'
    );

    if (comando === null) {
        break;
    }

    comando = comando.toLowerCase();

    if (comando === "nuevo") {
        let producto = prompt("¿Qué producto querés agregar?");

        if (producto !== null && producto.trim() !== "") {
            listaDeSuper.push(producto);
            console.log("Producto agregado: " + producto);
        }

    } else if (comando === "listar") {
        logItems(listaDeSuper);

    } else if (comando === "borrar") {
        logItems(listaDeSuper);

        let indice = Number(prompt("Ingresá el índice del producto que querés borrar:"));

        if (
            Number.isInteger(indice) &&
            indice >= 0 &&
            indice < listaDeSuper.length
        ) {
            let eliminado = listaDeSuper.splice(indice, 1);
            console.log("Producto eliminado: " + eliminado[0]);
        } else {
            console.log("Índice inválido.");
        }

    } else if (comando === "salir") {
        console.log("¡Hasta luego!");

    } else {
        console.log("Comando inválido. Escribí nuevo, listar, borrar o salir.");
    }
}