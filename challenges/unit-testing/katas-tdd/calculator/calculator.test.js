const add = require("./calculator")

describe("calculator", () => {
    test("return 0 for an empty string", () => {
        expect(add("")).toEqual(0);
    });
    test("return one number", () => {
        expect(add("5")).toEqual(5);
    });
    test("return the sum of 2 numbers", () => {
        expect(add("3,6")).toEqual(9);
    });
    test("handle an unknown amount of numbers", () => {
        expect(add("1,2,3,4,5")).toEqual(15);
    });
    test("Ignore numbers bigger than 1000", () => {
        expect(add("2,1001")).toEqual(2);
    })
    test("throws and error for negative numbers", () => {
        expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
        expect(() => add("-1,-2,-3")).toThrow("negatives not allowed: -1, -2, -3");
    })

});