const manufacture = require("./reto02.js");

describe("Manufacture Function", () => {
    test('Devuelve ["tren", "oso"] porque sus caracteres se encuentran en la palabra "tronesa"', () => {
        const gifts = ['tren', 'oso', 'pelota'];
        const materials = 'tronesa';
        const result = manufacture(gifts, materials);
        const toBe = ["tren", "oso"];
        expect(result).toStrictEqual(toBe);
    });

    test('Devuelve ["puzzle"] porque sus caracteres se encuentran en la palabra "jlepuz"', () => {
        const gifts = ['juego', 'puzzle'];
        const materials = 'jlepuz';
        const result = manufacture(gifts, materials);
        const toBe = ["puzzle"];
        expect(result).toStrictEqual(toBe);
    });

    test('Devuelve [] porque sus caracteres NO se encuentran en la palabra "psli"', () => {
        const gifts = ['libro', 'ps5'];
        const materials = 'psli';
        const result = manufacture(gifts, materials);
        const toBe = [];
        expect(result).toStrictEqual(toBe);
    });
});
