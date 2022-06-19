var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[2]);

// Metodo mutar(cambiar) contenido
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
var masFrutas = frutas.push("Uvas")
frutas

// Metodo para eliminar elemento del array
var ultimo = frutas.pop("Uvas");
frutas

// Metodo unshift, agrega el nuevo elemento al inicio
var nuevaLongitud = frutas.unshift("Jicama");

// Metodo shift, elimina el elemnto al inicio
var borrarFruta = frutas.shift ("Jicama");

// Metodo para conocer la posicion del elemnto en el array
var posicion = frutas.indexOf("Cereza");
posicion