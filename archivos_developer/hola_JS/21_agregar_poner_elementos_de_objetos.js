//agregar .push
var numarray = [1,2,3,4,5]

function hola (){
    numarray.push(6,7);
    console.log (numarray);
}

hola ();

//tambien string

var textarray = ["hola", "jaja", "oscar"];

function adios (){
    textarray.push("Diaz", "Carlos");
    console.log(textarray);
}

adios ();

//eliminar elementos .shift  .pop

var cadena = [1,2,3,4];

console.log(cadena);

var sincadanea = cadena.shift();

console.log(cadena);
//elimino el primer elemento

var jajas = ["oscar", "Juan", "carlos"]

console.log(jajas);

var ja= jajas.pop();

console.log(jajas);
//elimino el ultimo elemento

