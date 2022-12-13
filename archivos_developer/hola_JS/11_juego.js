var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var resultado = function (user, cpu){
    if (user !=cpu){
        if (user===op1 && cpu===3){
            console.log("User Gana");
        }else if (user===op2 && cpu===op1){
            console.log("User Gana");
        }else if (user===op3 && cpu===op2){
            console.log("User Gana");
        }
    }else{
        console.log("Empate")
    }
}