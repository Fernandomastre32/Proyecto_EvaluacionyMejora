console.log('Hola, mundo!');
require('dotenv').config();
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
module.exports = saludar;


function sumar(a, b) {
    return a + b;
}
module.exports = { saludar, sumar };
