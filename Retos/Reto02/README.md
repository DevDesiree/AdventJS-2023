# ⛄ <span style="color: yellow">Reto #02</span> 🏭 Ponemos en marcha la fábrica

En el taller de Santa, los elfos tienen una **lista de regalos** que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una **lista de los regalos que se pueden fabricar**.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

## 🎁 <span style="color: yellow">Ejemplos</span>

```
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
```

```
const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]
```

```
const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```


---

## ✅ Mi solución

- <img src="https://skillicons.dev/icons?i=js" width="10px" alt="JS" /> **Código JS**

```js
function manufacture(gifts, materials) {

    const result = [];

    for (let i = 0; i < gifts.length; i++) {
        const gift = gifts[i];
        let canManufacture = true; 

        for (let j = 0; j < gift.length; j++) { 
            if (!materials.includes(gift[j])) {
                canManufacture = false;
                break;
            }
        }

        if (canManufacture) {
            result.push(gift);
        }
    }
    return result;
}
```

- <img src="https://skillicons.dev/icons?i=jest" width="12px" alt="Testing con Jest" /> **Testing Jest**
    - **Para ejecutar este test, en consola, escribe: ```npm run test:reto02```**
```js
describe("Manufacture Function", () => {
    test('Devuelve ["tren", "oso"] porque sus caracteres se encuentran en la    palabra "tronesa"', () => {
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
```
