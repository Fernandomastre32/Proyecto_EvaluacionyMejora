console.log('Hola, mundo!');
require('dotenv').config();
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
module.exports = saludar;
