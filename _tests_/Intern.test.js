const Intern = require('../lib/Intern');
// just class

describe("Intern class", () => {
	it("it should create an object with intern value pairs.", () => {
		// arrange
		const intern = new Intern("becca", 44, "becca@gmail.com", "Denver University");
		// assert
		expect(intern).toEqual({
			name: "becca",
			id: 44,
			email: "becca@gmail.com",
			school: "Denver University",
		})
	})
});