# ⛄ <span style="color: yellow">Reto #03</span> 😏 El elfo travieso

En el taller de Santa, **un elfo travieso** ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación *original* y la secuencia modificada *modified* que puede incluir un paso extra o faltar un paso.

Tu tarea es **escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación**. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

## 🎁 <span style="color: yellow">Ejemplos</span>

```
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'
```

```
const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'
```

```
const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```


---

## ✅ Mi solución

- <img src="https://skillicons.dev/icons?i=js" width="10px" alt="JS" /> **Código JS**

```js
function findNaughtyStep(original, modified) {

    const maxLength = Math.max(original.length, modified.length);

    for (let i = 0; i < maxLength; i++) {

        if (original[i] !== modified[i]) {
            if (!original.includes(modified[i])) {
                return modified[i]

            } else if (!modified.includes(original[i])) {
                return original[i]
            }
        }

    }
    return ""
}
```

- <img src="https://skillicons.dev/icons?i=jest" width="12px" alt="Testing con Jest" /> **Testing Jest**
    - **Para ejecutar este test, en consola, escribe: ```npm run test:reto03```**
```js
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
```
