// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/template")

// node modules
const inquirer = require("inquirer");
var fs = require("fs");


const teamArray = [];


function createManager() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team managers name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
    },
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamArray.push(manager);
    createMember();
  })
}

function createMember() {
  inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Select an engineer, intern, or done bulding team.",
      choices: ['engineer', 'intern', 'build team']
    },
  ]).then(answers => {
    if(answers.choice === 'engineer') {
      createEngineer();
    } else if(answers.choice === 'intern') {
      createIntern();
    } else {
      buildTeam();
    }
  })
}

function createEngineer() {
inquirer
.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github name?",
  },
]).then(answers => {
  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  teamArray.push(engineer);
  createMember();
})
}

function createIntern() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
    {
      type: "input",
      name: "school",
      message: "What is your school?",
    },
  ]).then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamArray.push(intern);
    createMember();
  })
  }



function buildTeam() {
      fs.writeFile("index.html", generateHtml(teamArray), (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
}
createManager();
