var estudiantes =["Oscar", "Juan", "Carlos"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

while(estudiantes.length>0){
    var llamar =estudiantes.shift();
    saludarEstudiantes(llamar);
}