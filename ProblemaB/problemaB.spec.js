import { sortWordsByUniqueLetters } from './index.js';
describe("sortWordsByUniqueLetters", () => {
  test("Debería reorganizar palabras basado en letras únicas", () => {
    expect(sortWordsByUniqueLetters("hola mundo feliz")).toBe("hola mundo feliz");
  });

  test("Debería manejar palabras con el mismo número de letras únicas manteniendo el orden", () => {
    expect(sortWordsByUniqueLetters("a aa aaa aaaa")).toBe("a aa aaa aaaa");
  });

  test("Debería devolver un string vacío si la entrada está vacía", () => {
    expect(sortWordsByUniqueLetters("")).toBe("");
  });

  test("Debería manejar palabras únicas", () => {
    expect(sortWordsByUniqueLetters("javascript es genial")).toBe("es genial javascript");
  });

  test("Debería manejar una única palabra en el string", () => {
    expect(sortWordsByUniqueLetters("palabra")).toBe("palabra");
  });

  test("Debería manejar espacios en blanco al inicio o al final del string", () => {
    expect(sortWordsByUniqueLetters("   hola mundo   ")).toBe("hola mundo");
  });

  // Tests adicionales
  test("Debería ordenar 'manzana pera kiwi banana uva' basado en letras únicas", () => {
    expect(sortWordsByUniqueLetters("manzana pera kiwi banana uva")).toBe("kiwi banana uva manzana pera");
  });

  test("Debería ordenar 'abc ab aa aaa a' manteniendo palabras con letras únicas en orden", () => {
    expect(sortWordsByUniqueLetters("abc ab aa aaa a")).toBe("aa aaa a ab abc");
  });

  test("Debería ordenar 'sol luna estrella planeta' basado en letras únicas", () => {
    expect(sortWordsByUniqueLetters("sol luna estrella planeta")).toBe("sol luna estrella planeta");
  });

  test("Debería ordenar 'aaa bb c' basado en letras únicas", () => {
    expect(sortWordsByUniqueLetters("aaa bb c")).toBe("aaa bb c");
  });

  test("Debería manejar palabras con las mismas letras únicas en 'xyz abc def'", () => {
    expect(sortWordsByUniqueLetters("xyz abc def")).toBe("xyz abc def");
  });

  test("Debería ordenar 'todo el mundo quiere comer pollo'", () => {
    expect(sortWordsByUniqueLetters("todo el mundo quiere comer pollo")).toBe("el todo pollo mundo quiere comer");
  });
});