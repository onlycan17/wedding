function getRandomFiveDigitNumber() {
    return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
}

export default getRandomFiveDigitNumber;