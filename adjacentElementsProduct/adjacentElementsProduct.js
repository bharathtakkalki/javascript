function adjacentElementsProduct(inputArray) {
    let largest = 0
    for (let i = 0; i < inputArray.length; i++) {
        let newProduct = inputArray[i] * inputArray[i+1]
        largest = largest < newProduct ? newProduct : largest
    }
    return largest
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));