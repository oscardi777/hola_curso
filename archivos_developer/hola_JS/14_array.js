var frutas=["manzana", "platano", "cereza", "fresa"];

console.log(frutas);

console.log(frutas.length);
//4

console.log(frutas[0]);
//manzana

console.log(frutas[2]);
//cereza

var Frutas=["manzana", "platano", "cereza", "fresa"];

var masFrutas=Frutas.push("Uvas");
//se agregara un elemento al final del objeto

var f = Frutas.pop("Uvas");
//se elimina el objeto del final

var nuevaLongitud = Frutas.unshift("pera");
//se agrega el elemento al incio del objeto

var borrarinicio = Frutas.shift("pera");
//se elimina el elemento del inicio SIEMPRE

var posicion = Frutas.indexOf("platano");
posicion
//1

