let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}
