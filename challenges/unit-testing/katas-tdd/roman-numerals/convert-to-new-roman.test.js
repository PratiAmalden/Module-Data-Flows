let convertToNewRoman = require("./convert-to-new-roman");

describe("convertToNewRoman", () => {
  test("returns I if passed 1 as an argument", function () {
    // Arrange
    const num = 1;
    // Act
    const result = convertToNewRoman(num);
    // Assert
    expect(result).toBe("I")
  });
  test("returns IV if passed 4 as an argument", function () {
  // Arrange
  const num = 4;
  // Act
  const result = convertToNewRoman(num);
  // Assert
  expect(result).toBe("IV");
  });
  test("returns IX if passed 9 as an argument", function () {
  // Arrange
  const num = 9;
  // Act
  const result = convertToNewRoman(num);
  // Assert
  expect(result).toBe("IX");
  });
  test("returns XIV if passed 14 as an argument", function () {
  // Arrange
  const num = 14;
  // Act
  const result = convertToNewRoman(num);
  // Assert
  expect(result).toBe("XIV");
  });
  test("returns IX if passed 9 as an argument", function () {
  // Arrange
  const num = 9;
  // Act
  const result = convertToNewRoman(num);
  // Assert
  expect(result).toBe("IX");
  });
  test("returns XLIV if passed 44 as an argument", function () {
  // Arrange
  const num = 44;
  // Act
  const result = convertToNewRoman(num);
  // Assert
  expect(result).toBe("XLIV");
  });
  test("returns CDXLIV if passed 444 as an argument", function () {
  // Arrange
  const num = 444;
  // Act
  const result = convertToNewRoman(num);
  // Assert
  expect(result).toBe("CDXLIV");
  });
});