const Intern = require('../lib/Intern')

describe( "Intern", () => {
    describe("getRole", () => {
        it("should return Intern Role", () => {

            const employed = new Intern('milo', '1', 'test@gmail.com', 'UCD')
            const result = 'Intern'
            expect(result).toEqual(employed.getRole());
        });
    });
    describe("getSchool", ()=> {
        it('should return the name of their school', () => {

            const employed = new Intern('milo', '1', 'test@gmail.com', 'UCD')
            const result = "UCD"
            expect(result).toEqual(employed.getSchool());
        });
    });
})