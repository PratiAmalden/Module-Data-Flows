// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    // use Array.prototype.filter to filter out non-numbers
    const numOnly = numbers.filter(i => typeof i == "number");

    // calculate the sum
    const sum = numOnly.reduce((acc, num) => acc + num, 0);

    // calculate the average
    const average = numOnly.length ? sum / numOnly.length : 0;

    return average;
}

module.exports = average;
