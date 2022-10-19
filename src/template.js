const generateHTML = (team) => {
	console.log(team);
	// function to create manager card
	const createManager = (manager) => {
		return `<div class="card" style="width: 18rem">
		<div class="card-body">
		  <div class="card-header">
			<h1 class="name">${manager.getName()}</h1>
			<i class="fa-solid fa-mug-hot m-2"></i>
			<h3 class="title icon mb-2 text-muted">${manager.getRole()}</h3>
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
			<i class="fa-solid fa-glasses m-2"></i>
			<h3 class="title getRole icon mb-2 text-muted">
			  ${engineer.getRole()}
			</h3>
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
			<i class="fa-solid fa-glasses m-2"></i>
			<h3 class="title getRole icon mb-2 text-muted">
			  ${intern.getRole()}
			</h3>
		  </div>
		  <p class="id-number">ID#: ${engineer.getId()}</p>
		  <p class="email">Email: ${engineer.getEmail()}</p>
		  <p class="school">School: ${intern.getSchool()}</p>
		</div>
	  </div>`;
	};
	
	
}


  module.exports = generateHTML