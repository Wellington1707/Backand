const { calcularMediaAluno } = require("../src/calcularMediaAluno");

test("Deve calcular a média usando a1 e a3 quando esta combinação é a melhor", () => {
  expect(calcularMediaAluno(6, 4, 8)).toBeCloseTo(7.2);
});

test("Deve lançar erro se a1 ou a2 forem negativos", () => {
  expect(() => calcularMediaAluno(-1, 2, 3)).toThrow();
  expect(() => calcularMediaAluno(1, -2, 3)).toThrow();
});

test("Deve lançar erro se a3 for negativo", () => {
  expect(() => calcularMediaAluno(5, 6, -3)).toThrow("Nota a3 nao pode ser negativa");
});

test("Deve calcular a média base quando a3 não é informada", () => {
  expect(calcularMediaAluno(6, 8)).toBeCloseTo(7.2);
});

test("Deve calcular a média usando a1 e a3 quando esta combinação é a melhor", () => {
  expect(calcularMediaAluno(6, 4, 8)).toBeCloseTo(7.2);
});

test("Deve calcular a média usando a3 e a2 quando esta combinação é a melhor", () => {
  expect(calcularMediaAluno(4, 8, 10)).toBeCloseTo(9.2);
});

