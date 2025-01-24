import { findUniqueNumbers } from './index.js';

describe('findUniqueNumbers', () => {
  test('Debe devolver los números únicos en el orden original', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const expected = [1, 3, 5];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays vacíos', () => {
    const input = [];
    const expected = [];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays con un solo número', () => {
    const input = [7];
    const expected = [7];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe devolver un array vacío si no hay números únicos', () => {
    const input = [8, 8, 10, 10, 12, 12];
    const expected = [];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays donde todos los números son únicos', () => {
    const input = [9, 3, 6, 1];
    const expected = [9, 3, 6, 1];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays con números negativos', () => {
    const input = [-1, -2, -3, -2, -1, 4];
    const expected = [-3, 4];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays con ceros y otros números repetidos', () => {
    const input = [0, 1, 0, 2, 3, 3];
    const expected = [1, 2];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays con un único número repetido muchas veces', () => {
    const input = [5, 5, 5, 5];
    const expected = [];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays con números grandes', () => {
    const input = [1000000000, 1000000001, 1000000000];
    const expected = [1000000001];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });

  test('Debe manejar arrays con un mix de números únicos y repetidos desordenados', () => {
    const input = [10, 20, 20, 30, 40, 30, 50];
    const expected = [10, 40, 50];
    expect(findUniqueNumbers(input)).toEqual(expected);
  });
});
