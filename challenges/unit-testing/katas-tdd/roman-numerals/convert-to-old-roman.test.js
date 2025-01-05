let convertToOldRoman = require("./convert-to-old-roman");

describe("convertToOldRoman", () => {
  test("returns I if passed 1 as an argument", function () {
  // Arrange
  const num = 1;
  // Act
  const result = convertToOldRoman(num);
  // Assert
  expect(result).toBe("I");
  });
  test("returns V if passed 5 as an argument", function () {
  // Arrange
  const num = 5;
  // Act
  const result = convertToOldRoman(num);
  // Assert
  expect(result).toBe("V");
  });
  test("returns III if passed 3 as an argument", function () {
  // Arrange
  const num = 3;
  // Act
  const result = convertToOldRoman(num);
  // Assert
  expect(result).toBe("III");
  });
  test("returns VI if passed 6 as an argument", function () {
  // Arrange
  const num = 6;
  // Act
  const result = convertToOldRoman(num);
  // Assert
  expect(result).toBe("VI");
  });
  test("returns XXXIII if passed 33 as an argument", function () {
  // Arrange
  const num = 33;
  // Act
  const result = convertToOldRoman(num);
  // Assert
  expect(result).toBe("XXXIII");
  });
  test("returns MCXI if passed 1111 as an argument", function () {
  // Arrange
  const num = 1111;
  // Act
  const result = convertToOldRoman(num);
  // Assert
  expect(result).toBe("MCXI");
  });
})

