const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("getRole", () => {
        it("should return engineer Role", () => {

            const employed = new Engineer('milo', '1', 'test@gmail.com','saitek300')
            const result = 'Engineer'
            expect(result).toEqual(employed.getRole());
        });
    });
    describe("getGithub", () => {
        it("should return Github name", () => {

            const employed = new Engineer('milo', '1', 'test@gmail.com','saitek300')
            const result = 'saitek300'
            expect(result).toEqual(employed.getGithub());
        });
    });
})