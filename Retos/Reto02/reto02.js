
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

module.exports = manufacture
