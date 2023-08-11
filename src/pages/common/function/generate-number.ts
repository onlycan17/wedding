function generateNumbers(n: number) {
    return Array.from({length: n}, (_, i) => i + 1);
}

export default generateNumbers;