function snapCrackle(maxValue) {

    let string = ""

    for (let cont = 1; cont <= maxValue; cont++) {
        if (cont % 2 == 1 && cont % 5 == 0) {
            string += "SnapCrackle" + ", "
        } else if (cont % 5 == 0) {
            string += "crackle" + ", "
        } else if (cont % 2 == 1) {
            string += "Snap" + ", "
        } else {
            string += cont + ", "
        }
    }
    return string
}
console.log((snapCrackle(15)))