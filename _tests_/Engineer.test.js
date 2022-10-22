const Engineer = require('../lib/Engineer');
// class and getgitHub

describe("Engineer class", () => {
	it("it should create an object with engineer value pairs.", () => {
		// arrange
		const engineer = new Engineer("lauren", 66, "lauren@gmail.com", "laurenisthebest");
		// assert
		expect(engineer).toEqual({
			name: "lauren",
			id: 66,
			email: "lauren@gmail.com",
			github: "laurenisthebest",
		})
	})
});

describe("getGithub()", () => {
	it("it should return engineers GitHub.", () => {
		// arrange
		const engineer = new Engineer("lauren", 66, "lauren@gmail.com", "laurenisthebest");
		// assert
		expect(engineer.getGithub()).toEqual(
			`<a href="https://github.com/laurenisthebest" target="_blank">laurenisthebest<a>`
		)
	})
});