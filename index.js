const frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // "Manzana"
console.log(frutas[1]); // "Banana"
frutas.push("Mango");
console.log(frutas); // ["Manzana", "Banana", "Naranja", "Mango"]
frutas.pop();
console.log(frutas); // ["Manzana", "Banana", "Naranja"]
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  