function convertToOldRoman(n) {
    // Create a mapping of old roman numerals to their values
    const romanNumeral = [
        ["M", 1000],
        ["D", 500],
        ["C", 100],
        ["L", 50],
        ["X", 10],
        ["V", 5],
        ["I", 1],
    ];
    
    let result = "";

    // loop through each numeral in romanNumeral
    for (const [symbol, value] of romanNumeral){
        // how many times value fits the n
        const count = Math.floor(n / value);

        // add the numeral "count" times to the result
        result += symbol.repeat(count);

        // update n to the reminder after using the symbol
        n %= value;

        /* another way:
        while (n >= value) {
            result += symbol;
            n -= value;
        } */
    }

    return result;
}

module.exports = convertToOldRoman;
