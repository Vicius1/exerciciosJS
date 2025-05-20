let peso = 68; // em kg
let altura = 1.73; // em metros
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc < 24.9) {
  console.log("Peso normal");
} else if (imc < 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
