const Intern = require('./lib/Intern');
const intern = new Intern('matt', '648523', 'mrroberts@gmail.com', 'Denver University');

test('test is we can get the values for the intern object', () => {
	expect(intern.name).toBe('matt');
	expect(intern.id).toBe('648523');
	expect(intern.email).toBe('mrroberts@gmail.com');
	expect(intern.school).toBe('MMRoberts87');
});

decribe('intern', () => {
	it("returns intern name", () => {
		expect(intern.getName()).toBe('matt');
	});
});

decribe('id', () => {
	it("returns intern id", () => {
		expect(intern.getId()).toBe('648523');
	});
});

decribe('email', () => {
	it("returns intern email", () => {
		expect(intern.getEmail()).toBe('mrroberts@gmail.com');
	});
});

decribe('school', () => {
	it("returns interns school", () => {
		expect(intern.getSchool()).toBe('Denver University');
	});
});

describe('gets role of employee', () => {
	it("returns the employees role", () => {
		expect(intern.getRole()).toBe('Intern');
	});
});