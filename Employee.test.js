const Employee = require('./lib/Employee');
const employee = new Employee('matt', '648523', 'mrroberts@gmail.com');

test('test is we can get the values for the employee object', () => {
	expect(employee.name).toBe('matt');
	expect(employee.id).toBe('648523');
	expect(employee.email).toBe('mrroberts@gmail.com');
});

decribe('employee', () => {
	it("returns employee name", () => {
		expect(employee.getName()).toBe('matt');
	});
});

decribe('id', () => {
	it("returns employee id", () => {
		expect(employee.getId()).toBe('648523');
	});
});

decribe('email', () => {
	it("returns employee email", () => {
		expect(employee.getEmail()).toBe('mrroberts@gmail.com');
	});
});

describe('gets role of employee', () => {
	it("returns the employees role", () => {
		expect(employee.getRole()).toBe('Employee');
	});
});