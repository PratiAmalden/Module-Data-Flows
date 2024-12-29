let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];

  // Act
  const result = removeVowelsFromWords(
    input.map((word) =>
    word.split("")
    .filter((char) => !"aeiouAEIOU".includes(char))
    .join("")
    )
  );


  // Assert
  expect(result).toEqual(expected); // Use toEqual for array comparison
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
