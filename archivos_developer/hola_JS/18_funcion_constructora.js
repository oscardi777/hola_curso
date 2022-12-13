function auto (Coche, Marca, Clase, Modelo){
    this.coche = Coche;
    this.marca = Marca;
    this.clase = Clase;
    this.modelo = Modelo;
}
for (var i=0;i<31;i++){
    var autonuevo = new auto(`Coche N ${i}`, "Mazda", 2, 2020);
    console.log(autonuevo)

}