const Manager = require('../lib/Manager');
// test constructer

describe("Manager class", () => {
	it("it should create an object with manager value pairs.", () => {
		// arrange
		const manager = new Manager("marla", 33, "marla@gmail.com", "777-888-4455 x6547");
		// assert
		expect(manager).toEqual({
			name: "marla",
			id: 33,
			email: "marla@gmail.com",
			officeNumber: "777-888-4455 x6547",
		})
	})
});