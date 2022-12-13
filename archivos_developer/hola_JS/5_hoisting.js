//hosting no es igual a hoistin
//si llamo una variable que no estaba declarada = hoisting
console.log(miNombre);

var miNombre = "Oscar";
// ahora

var Hola="Juan";
console.log(Hola);

heyi();

function heyi(){
    console.log("Hola " + holaaa);
}

var holaaa="jaja"
//las funciones se pueden llamar antes de declarar lo que no pasa con las variables, pero se ve feo
