
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

module.exports = findFirstRepeated
