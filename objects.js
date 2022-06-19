var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};
miAuto
miAuto.marca
miAuto.anio


var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.anio}`)
  }
};
miAuto.detalleDelAuto();


// Funcion constructora
function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
autoNuevo

var autoNuevo2 = new auto("Tesla", "Model X", 2018)
var autoNuevo3 = new auto("Toyota", "Corolla", 2020)

autoNuevo2