const Manager = require('../lib/manager');
const manager = new Manager('matt', '648523', 'mrroberts@gmail.com', '11');

test('test is we can get the values for the manager object', () => {
	expect(manager.name).toBe('matt');
	expect(manager.id).toBe('648523');
	expect(manager.email).toBe('mrroberts@gmail.com');
	expect(manager.officeNumber).toBe('11');
});

decribe('manager', () => {
	it("returns manager name", () => {
		expect(manager.getName()).toBe('matt');
	});
});

decribe('id', () => {
	it("returns manager id", () => {
		expect(manager.getId()).toBe('648523');
	});
});

decribe('email', () => {
	it("returns manager email", () => {
		expect(manager.getEmail()).toBe('mrroberts@gmail.com');
	});
});

decribe('office number', () => {
	it("returns manager office number", () => {
		expect(manager.getOfficeNumber()).toBe('11');
	});
});

describe('gets role of manager', () => {
	it("returns the managers role", () => {
		expect(manager.getRole()).toBe('Manager');
	});
});