//filtrar
var articulos = [
    { nombre: "Bicicleta", Costo: 100 },
    { nombre: "Tv", Costo: 500 },
    { nombre: "Libro", Costo: 50 },
    { nombre: "Celular", Costo: 250 },
    { nombre: "Laptop", Costo: 400 },
    { nombre: "Teclado", Costo: 75 },
    { nombre: "Audifonos", Costo: 60 },
];

//filtrar
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.Costo<=500
});

articulosFiltrados
//articulos <=500

//map
var articulosmapeados = articulos.map(function(articulo){
    return articulo.nombre 
});
//todos los datos por la categoria de nombre
