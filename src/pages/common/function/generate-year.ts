function generateYears(startYear: number) {
    const currentYear = new Date().getFullYear();
    let years = [];
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
}

export default generateYears;