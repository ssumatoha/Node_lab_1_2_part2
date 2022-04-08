const { parse } = require("../address-parser");

describe('Address parser', () => {
    test('should parse correctly', () => {
        expect(
            parse(
                "I want to oreder: 3 books to address: " +
                "112 street city here is my payment info: card"
            )
        ).toEqual({
            order: "3 books",
            address: "112 street city",
            payment: "cardnumber",
        });
    })
})