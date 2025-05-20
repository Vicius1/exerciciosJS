let entradas = [5.5, 6.0, 8.5, 0];
let soma = 0, contador = 0;

for (let i = 0; i < entradas.length; i++) {
  if (entradas[i] === 0) break;
  soma += entradas[i];
  contador++;
}

let media = contador > 0 ? soma / contador : 0;
console.log("Média:", media.toFixed(2));
