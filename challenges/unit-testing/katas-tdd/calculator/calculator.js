function add (numbers){
    if (!numbers.trim()) {
        return 0;
    }
    const numArray = numbers.split(",") // split numbers
    .map(Number) // convert to array of integers
    .filter((num) => num <= 1000); // Exclude numbers > 1000

    const negativeNum = numArray.filter((num) => num < 0); // Find negative numbers

    if (negativeNum.length > 0){
        throw new Error(`negatives not allowed: ${negativeNum.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log(add("3,6"));
console.log(add("3"));
console.log(add("1001, 1"));


module.exports = add;