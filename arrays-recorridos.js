// Metodo filter
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2000 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
});

articulosFiltrados


// Metodo map
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2000 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});

nombreArticulos


// Metodo find
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2000 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop"
});

encuentraArticulo


// Metodo forEach
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2000 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});


// Metodo some
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2000 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});

articulosBaratos