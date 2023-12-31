
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


module.exports = findNaughtyStep
