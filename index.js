const inquirer = require("inquirer");
var fs = require("fs");

const generateHTML = ({ name, title, id, email, github, officenum, school }) =>
  `<!DOCTYPE html>
  <html lang="en">
	<head>
	  <meta charset="UTF-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <!-- google fonts -->
	  <link rel="preconnect" href="https://fonts.googleapis.com" />
	  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	  <link
		href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Josefin+Sans:wght@400;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Balinese:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
		rel="stylesheet"
	  />
  
	  <!-- bootstrap -->
	  <link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
		crossorigin="anonymous"
	  />
	  <!-- css style sheet -->
	  <link rel="stylesheet" href="./assets/style.css" />
	  <title>Team Profile Generator</title>
	</head>
	<body>
	  <header class="team-header">My Team</header>
	  <div class="card" style="width: 18rem">
		<div class="card-body">
		  <div class="card-header">
			<h1 class="name">${name}</h1>
			<h3 class="title icon mb-2 text-muted">${title}</h3>
		  </div>
		  <p class="id-number">ID: ${id}</p>
		  <p class="email">Email: ${email}</p>
		  <p class="github">GitHub: ${github}</p>
		  <p class="office-number">Office #: ${officenum}</p>
		  <p class="school">School: ${school}</p>
		</div>
	  </div>
	  <script src="./assets/index.js"></script>
	</body>
  </html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team managers name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your team managers title?",
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
      name: "officenum",
      message: "What is your office number?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "school",
      message: "What is the name of the school you are attending?",
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
