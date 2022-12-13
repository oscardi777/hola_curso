//for
var estudiantes =["Oscar", "Juan", "Carlos"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for (var i = 0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
//for of
var estudiantes =["Oscar", "Juan", "Carlos"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for (var llamar of estudiantes){
    saludarEstudiantes(llamar);
}