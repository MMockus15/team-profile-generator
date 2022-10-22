const Employee = require('../lib/Employee');


describe("Employee class", () => {
	it("it should create an object with employee value pairs.", () => {
		// arrange
		const employee = new Employee("matt", 88, "matt@gmail.com");
		// assert
		expect(employee).toEqual({
			name: "matt",
			id: 88,
			email: "matt@gmail.com",
		})
	})
});

describe("getEmail ()", () => {
	it("it should return employees email.", () => {
		// arrange
		const employee = new Employee("matt", 88, "matt@gmail.com");
		// assert
		expect(employee.getEmail()).toEqual(
		`<a href="mailto:matt@gmail.com">matt@gmail.com</a>`
		)
	})
});



