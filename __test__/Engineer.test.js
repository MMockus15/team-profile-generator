const Engineer = require('./lib/Engineer');
const engineer = new Engineer('matt', '648523', 'mrroberts@gmail.com', 'MMRoberts87');

test('test is we can get the values for the engineer object', () => {
	expect(engineer.name).toBe('matt');
	expect(engineer.id).toBe('648523');
	expect(engineer.email).toBe('mrroberts@gmail.com');
	expect(engineer.github).toBe('MMRoberts87');
});

decribe('engineer', () => {
	it("returns engineer name", () => {
		expect(engineer.getName()).toBe('matt');
	});
});

decribe('id', () => {
	it("returns engineer id", () => {
		expect(engineer.getId()).toBe('648523');
	});
});

decribe('email', () => {
	it("returns engineer email", () => {
		expect(engineer.getEmail()).toBe('mrroberts@gmail.com');
	});
});

describe('gets role of engineer', () => {
	it("returns the engineers role", () => {
		expect(engineer.getRole()).toBe('Engineer');
	});
});

