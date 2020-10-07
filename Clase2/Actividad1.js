//Actividad 1
//Creacion de objetos(Literal, contructor y clases) ,
//crear un objeto que contenga al menos 3 tipos de datos.
console.log("---Ejercicio 1 ---");
const personas = {
  nombre: "Gustavo",
  apellido: "Maldonado",
  universidad: "UAP",
};

console.log(personas);

let objectAlmacnen = Object.create(Object.prototype, {
  almacen: {
    Empresa: "Tisi Sac",
    Encargado: "Romel Mandamiento",
    Sede: "Lima",
  },
});
console.log(objectAlmacnen.almacen);
//Actividad 2
//Agrega Valores a los objectos creados anteriormente
console.log("---Ejercicio 2 ---");
personas.correo = "gamtt1994@SpeechGrammarList.com";
console.log(personas);

//Actividad 3
//Manipula los objectos y muestralos en una lista(Utilizando looping 'for')
console.log("---Ejercicio 3 ---");
const persona = {
  nombre: "Gustavo",
  apellido: "Maldonado",
  universidad: "UAP",
};

for (let key in persona) {
  console.log(persona[key]);
}

//Actividad4
//Crea una lista de supermercado utilizando la creación de objetos
//(por ejemplo: frutas:{item: 'pera', stock: 250, precio: true})
console.log("---Ejercicio 4 ---");
function ListaMercado(name, stock, precio, currency) {
  this.name = name;
  this.stock = stock;
  this.precio = precio;
  this.currency = currency;
}

let lista1 = new ListaMercado("Manzana", 25, 12.5, "S/");
let lista2 = new ListaMercado("Pera", 25, 12.5, "S/");
console.log(lista1);
console.log(lista2);

//Actividad5
//Crear una factura utilizando la lista del supermercado(total, subtotal e igv)
console.log("---Ejercicio 5 ---");
function factura(nombre, subtotal, igv, total) {
  this.nombre = nombre;
  this.subtotal = subtotal;
  this.igv = igv;
  this.total = total;
}

let subtotal = lista1["precio"] + lista2["precio"];
let igv = subtotal * 0.18;
let total = subtotal + igv;

let factura1 = new factura("Gustavo", subtotal, igv, total);
console.log(factura1);
