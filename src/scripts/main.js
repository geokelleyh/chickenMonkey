for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 7 === 0 && currentNumber % 5 ===0) {
        console.log(currentNumber, "is = ChickenMonkey") // all multipes of 7 and 2 should appear
    }
    else if (currentNumber % 7 === 0) {
        console.log(currentNumber, "is = Monkey") // all multipes of 7 should appear
    }
    else if (currentNumber % 5 === 0) {
        console.log(currentNumber, "is = Chicken") // all even numbers should appear
    }
    else console.log(currentNumber)
}

