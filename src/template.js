const generateHTML = (team) => {
  console.log(team);
  // function to create manager card
  const createManager = (manager) => {
    return `<div class="card" style="width: 18rem">
		<div class="card-body">
		  <div class="card-header">
			<h1 class="name">${manager.getName()}</h1>
			<div class="d-flex justify-content-center">
			<i class="fa-solid fa-mug-hot m-2"></i>
			<h3 class="title icon mb-2 text-muted">${manager.getRole()}</h3>
			</div>
		  </div>
		  <p class="id-number">ID#: ${manager.getId()}</p>
		  <p class="email">Email: ${manager.getEmail()}</p>
		  <p class="office-number">
			Office Phone: ${manager.getofficeNumber()}
		  </p>
		</div>
	  </div>`;
  };
  // function to create engineer
  const createEngineer = (engineer) => {
    return ` <div class="card" style="width: 18rem">
		<div class="card-body">
		  <div class="card-header">
			<h1 class="name">${engineer.getName()}</h1>
			<div class="d-flex justify-content-center">
			<i class="fa-solid fa-glasses m-2"></i>
			<h3 class="title getRole icon mb-2 text-muted">
			  ${engineer.getRole()}
			</h3>
			</div>
		  </div>
		  <p class="id-number">ID#: ${engineer.getId()}</p>
		  <p class="email">Email: ${engineer.getEmail()}</p>
		  <p class="github">GitHub: ${engineer.getGithub()}</p>
		</div>
	  </div>`;
  };
  // function to create intern card
  const createIntern = (intern) => {
    return `<div class="card" style="width: 18rem">
		<div class="card-body">
		  <div class="card-header">
			<h1 class="name">${intern.getName()}</h1>
			<div class="d-flex justify-content-center">
			<i class="fa-solid fa-graduation-cap m-2"></i>
			<h3 class="title getRole icon mb-2 text-muted">
			  ${intern.getRole()}
			</h3>
			</div>
		  </div>
		  <p class="id-number">ID#: ${intern.getId()}</p>
		  <p class="email">Email: ${intern.getEmail()}</p>
		  <p class="school">School: ${intern.getSchool()}</p>
		</div>
	  </div>`;
  };

  // empty arrays contains generated cards
  function generateTeamCards() {
    const htmlCardArray = [];

    // push manager cards to html card array
    htmlCardArray.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => createManager(manager))
    );

    // push engineer cards to html card array
    htmlCardArray.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => createEngineer(engineer))
    );

    // push intern cards to html card array
    htmlCardArray.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => createIntern(intern))
    );

    return htmlCardArray.join("");
  }

  return `<!DOCTYPE html>
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
		<link rel="stylesheet" href="./style.css" />
		<!-- Icons from FontAwesome -->
		<script
		src="https://kit.fontawesome.com/d706540582.js"
		crossorigin="anonymous"
		></script>
		<title>Team Profile Generator</title>
		</head>
		<body>
		<header class="team-header">My Team</header>
		<main>
		<section class="m-5 d-flex flex-wrap justify-content-around">
		${generateTeamCards(team)}
		</section>
		</main>
		<script src="./dist/index.js"></script>
		</body>
		</html>`;
};

module.exports = generateHTML;
