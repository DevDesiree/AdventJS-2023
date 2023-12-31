const findNaughtyStep = require("./reto03.js");

describe("findNaughtyStep Function", () => {
    test('Compara los strings y devuelve el primer caracter diferente, en este caso a "e"', () => {
        const original = 'abcd';
        const modified = 'abcde';
        const result = findNaughtyStep(original, modified);
        const toBe = "e";
        expect(result).toStrictEqual(toBe);
    });

    test('Compara los strings y devuelve el primer caracter diferente, en este caso a "f"', () => {
        const original = 'stepfor';
        const modified = 'stepor';
        const result = findNaughtyStep(original, modified);
        const toBe = "f";
        expect(result).toStrictEqual(toBe);
    });

    test('Compara los strings y devuelve un string vacío ya que todos los caracteres son iguales"', () => {
        const original = 'abcde';
        const modified = 'abcde';
        const result = findNaughtyStep(original, modified);
        const toBe = "";
        expect(result).toStrictEqual(toBe);
    });
});