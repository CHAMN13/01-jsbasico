// Valida que lo que este declarado es verdadero
if (true) {
  console.log("Hola");
}

// Si no pasa la validacion, continua con el siguiente paso
if (false) {
  console.log("Hola");
} else {
  console.log("soy falso")
}

// Valida que lo declarado sea verdadero, agrega una segunda validacion y si no cumple sigue el proceso
var edad = 18;

if ( edad === 18) {
  console.log("Sera tu primera votacion");
} else if ( edad > 18 ) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("No puedes votar");
}

// Ternario
condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";
console.log(resultado);


// Reto
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if (user === op1 && cpu === op3){
            console.log("el usuario GANO con " + op1);
        } else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2);
        } else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3);
        } else{
            console.log("La CPU Gano!!")
        }
    } else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3)