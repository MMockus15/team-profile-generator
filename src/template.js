const generateHTML = (team) => {
	console.log(team);
	return   `<!DOCTYPE html>
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
	  <h1>Hello</h1>
	  </body>
	</html>`
}


  module.exports = generateHTML