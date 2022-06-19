// Implicita
var a = 4 + "7";

var b = 4 * "7";

typeof b


// Explicita, metodo String - Numero
var a = 20;
var b = a + "";

console.log(b);

typeof b;

var c = String(a);
typeof c;
console.log(c);

var d = Number(c);
typeof d;