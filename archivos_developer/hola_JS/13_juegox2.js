var op1="piedra";
var op2="papel";
var op3="tijera";


var resultado = function (user, cpu){
    if(user!=cpu){
        switch (true){
            case user===op1&&cpu===op3:
                console.log("User Gana");
                break;
            case user===op2&&cpu===op1:
                console.log("User Gana");
                break;
            case user===op3&&cpu===op2:
                console.log("User Gana");
                break;
            case cpu===op1&&user===op3:
                console.log("Cpu Gana");
                break;
            case cpu===op2&&user===op1:
                console.log("Cpu Gana");
                break;
            case cpu===op3&&user===op2:
                console.log("Cpu Gana");
                break;
            default:
                console.log("Que haceis");
        } 
    }else{
        console.log("Empate")
    }
}