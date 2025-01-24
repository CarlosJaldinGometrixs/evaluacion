import { divisionSimple } from "./index.js";

describe("divisionSimple", () => {
  test("Debería dividir correctamente números positivos", () => {
    expect(divisionSimple(10, 2)).toBe(5);
    expect(divisionSimple(9, 3)).toBe(3);
  });

  test("Debería dividir correctamente números negativos", () => {
    expect(divisionSimple(-10, 2)).toBe(-5);
    expect(divisionSimple(10, -2)).toBe(-5);
    expect(divisionSimple(-10, -2)).toBe(5);
  });

  test("Debería manejar divisiones con resultados decimales", () => {
    expect(divisionSimple(7, 2)).toBeCloseTo(3.5); // División con decimales
    expect(divisionSimple(1, 3)).toBeCloseTo(0.333, 3); // Resultado aproximado
  });

  test("Debería lanzar un error si el divisor es 0", () => {
    expect(() => divisionSimple(10, 0)).toThrow("No se puede dividir por 0");
    expect(() => divisionSimple(-10, 0)).toThrow("No se puede dividir por 0");
  });

  test("Debería devolver 0 si el dividendo es 0", () => {
    expect(divisionSimple(0, 5)).toBe(0);
    expect(divisionSimple(0, -3)).toBe(0);
  });

  test("Debería dividir correctamente números flotantes", () => {
    expect(divisionSimple(4.5, 1.5)).toBe(3);
    expect(divisionSimple(-4.5, 1.5)).toBe(-3);
  });
});
