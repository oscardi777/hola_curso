var miAuto = {
    Marca: "Mazda",
    Clase: 3,
    modelo: 2022,
    detallesdelauto: function(){
        console.log(`Su Auto es ${this.Marca} ${this.Clase} ${this.modelo}`);
    }
}

miAuto.detallesdelauto();
//Su Auto es Mazda 3 2022

miAuto
//{Marca: 'Mazda', Clase: 3, modelo: 2022}

miAuto.Marca
//'Mazda'

miAuto.modelo
//2022

