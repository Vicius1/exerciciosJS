let A = 5, B = 5, C = 5;

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
} else {
  console.log("Não forma triângulo");
}
