
const findFirstRepeated = require("./reto01.js")

test('findFirstRepeated retorna el primer numero repetido del ejemplo 1', () => {
    const giftIds = [2, 1, 3, 5, 3, 2];
    const result = findFirstRepeated(giftIds);
    expect(result).toBe(3);
});

test('findFirstRepeated retorna -1 porque no hay ningun número repetido', () => {
    const giftIds2 = [1, 2, 3, 4];
    const result = findFirstRepeated(giftIds2);
    expect(result).toBe(-1);
});

test('findFirstRepeated retorna el primer numero repetido del ejemplo 3', () => {
    const giftIds3 = [5, 1, 5, 1];
    const result = findFirstRepeated(giftIds3);
    expect(result).toBe(5);
});

