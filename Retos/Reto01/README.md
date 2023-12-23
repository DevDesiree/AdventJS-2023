# ⛄ <span style="color: yellow">Reto #01</span> 🎁 ¡Primer regalo repetido!

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, **algunos números se han asignado a más de un juguete.**

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve `-1`.

## 🎁 <span style="color: yellow">Ejemplos</span>

```
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
```

```
const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número
```

```
const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```

### ¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.

---

## ✅ Mi solución

- <img src="https://skillicons.dev/icons?i=js" width="10px" alt="JS" /> **Código JS**

```
function findFirstRepeated(giftIds) {
    let newArray = []

    for (let i = 0; i < giftIds.length; i++) {

        if (newArray.includes(giftIds[i])) {
            return giftIds[i]
        } else {
            newArray.push(giftIds[i])
        }
    }
    return -1
}

```

- <img src="https://skillicons.dev/icons?i=jest" width="12px" alt="Testing con Jest" /> **Testing Jest**

```
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
```
