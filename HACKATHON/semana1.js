/*
Ejercicio #1: Información Factura
- Definir la estructura de un objeto que almacena una factura
- Las facturas están formadas por la información de la propia empresa
(nombre de la empresa, dirección, teléfono, NIF), la información del cliente
(similar a la de la empresa), una lista de elementos (cada uno de los cuales
dispone de descripción, precio, cantidad) y otra información básica de la
factura (importe total, tipo de IVA, forma de pago)
- Una vez definidas las propiedades del objeto, añadir un método que
calcule el importe total de la factura y actualice el valor de la propiedad
correspondiente. Por último, añadir otro método que muestre por pantalla
el importe total de la factura
*/

/*
● Ejercicio #2: Añadiendo elementos a un array
- Añadir elementos a un array con Javascript push(Ciclo for)
- Crear un array de elementos que contenga nombres y posteriormente
agregar más elementos por medio del método “push”
*/

/*
Ejercicio #3: Valor futuro de una inversión
- Realice un programa para calcular el valor futuro de una inversión; la
fórmula para obtener este valor es la siguiente:
valor_futuro =valor*Math.pow (1+tasa/100,periodo)
*/
let valor = 2000;
let tasa = 2.5;
let periodo = 6;
let valor_futuro = valor * Math.pow(1 + tasa / 100, periodo);

console.log("Valor futuro de la inversión es: ", valor_futuro.toFixed(2));
