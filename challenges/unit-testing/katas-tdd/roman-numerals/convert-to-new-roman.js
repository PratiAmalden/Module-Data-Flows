function convertToNewRoman(n) {
    const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  for (const [symbol, value] of romanNumerals) {
    const count = Math.floor(n / value);

    result += symbol.repeat(count);
    n %= value;
  }
  return result;
}

console.log(`num = 19: ${convertToNewRoman(19)}`)
console.log(`num = 44: ${convertToNewRoman(44)}`)
console.log(`num = 444: ${convertToNewRoman(444)}`)



module.exports = convertToNewRoman;
