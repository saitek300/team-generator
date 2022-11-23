const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("getName", () => {
        it("should return employee name", () => {

            const employed = new Employee('milo', '1', 'test@gmail.com')
            const result = 'milo'
            expect(result).toEqual(employed.getName());
        });
    });

    describe("getId", () => {
        it("should return employee Id", () => {

            const employed = new Employee('milo', '1', 'test@gmail.com')
            const result = '1'
            expect(result).toEqual(employed.getId());
        });
    });

    describe("getEmail", () => {
        it("should return employee Email", () => {

            const employed = new Employee('milo', '1', 'test@gmail.com')
            const result = 'test@gmail.com'
            expect(result).toEqual(employed.getEmail());
        });
    });

    describe("getRole", () => {
        it("should return employee Role", () => {

            const employed = new Employee('milo', '1', 'test@gmail.com')
            const result = 'Employee'
            expect(result).toEqual(employed.getRole());
        });
    });
})
