const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("getRole", () => {
        it("should return Manager Role", () => {

            const employed = new Manager('milo', '1', 'test@gmail.com','23')
            const result = 'Manager'
            expect(result).toEqual(employed.getRole());
        });
    });
    describe("getOfficeNumber", () => {
        it("should return office number", () => {

            const employed = new Manager('milo', '1', 'test@gmail.com','23')
            const result = '23'
            expect(result).toEqual(employed.getOfficeNumber());
        });
    });
})