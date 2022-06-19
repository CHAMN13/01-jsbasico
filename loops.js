// Ciclos de tareas repetititpas hasta que se rompa, con i
var estudientes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for( var i = 0; i < estudientes.length; i++){
  saludarEstudiantes(estudientes[i])
}

// Con for of
var estudientes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudientes){
  saludarEstudiantes(estudiante);
}

// Con while
var estudientes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

while(estudientes.length > 0){
  console.log(estudientes);
  var estudiante = estudientes.shift();
  saludarEstudiantes(estudiante);
}