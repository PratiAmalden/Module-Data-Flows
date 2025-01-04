const verify = require("./password-verifier");

describe("password verify", () => {
    test("Return 'Password rejected' If the password is less than 8 characters", () => {
    expect(verify("1234567")).toBe('Password rejected');
    });
    test("Return 'Password rejected' if the password is null", () => {
        expect(verify(null)).toBe('Password rejected');
    });
    test("Return 'Password rejected' if the password doesn't have at least 1 uppercase letter", () => {
        expect(verify("a1234567")).toBe('Password rejected');
    });
    test("Return 'Password rejected' if the password doesn't have at least 1 number", () => {
        expect(verify("Aaaaaaaa")).toBe('Password rejected');
    });
    test("Return 'Password accepted' if conditions are met", () => {
        expect(verify("Al123456a"))
    })
    
});