//encuentra un elemento especifico del objeto

var articulos = [
    { nombre: "Bicicleta", Costo: 100 },
    { nombre: "Tv", Costo: 500 },
    { nombre: "Libro", Costo: 50 },
    { nombre: "Celular", Costo: 250 },
    { nombre: "Laptop", Costo: 400 },
    { nombre: "Teclado", Costo: 75 },
    { nombre: "Audifonos", Costo: 60 },
];

var articuloencontrar = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//filtra de manera mas delicada

var articulos = [
    { nombre: "Bicicleta", Costo: 100 },
    { nombre: "Tv", Costo: 500 },
    { nombre: "Libro", Costo: 50 },
    { nombre: "Celular", Costo: 250 },
    { nombre: "Laptop", Costo: 400 },
    { nombre: "Teclado", Costo: 75 },
    { nombre: "Audifonos", Costo: 60 },
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//validacion de x cosa en un objeto returnando un true or false

var articulos = [
    { nombre: "Bicicleta", Costo: 100 },
    { nombre: "Tv", Costo: 500 },
    { nombre: "Libro", Costo: 50 },
    { nombre: "Celular", Costo: 250 },
    { nombre: "Laptop", Costo: 400 },
    { nombre: "Teclado", Costo: 75 },
    { nombre: "Audifonos", Costo: 60 },
];

var articulosBaratos = articulos.some(function(articulo){
    return articulo.Costo <= 500
});