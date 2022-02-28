const createTeam = (team) => {
	console.log("Team: ", team);

    // create manager card
	const managerCard = (manager) => {
		return `
        <div id="manager-main" class="col-12 col-md-6 col-xl-4 mb-4">
        <div class="card">
            <h3 class="card-header bg-dark text-light text-center d-flex align-items-center">Manager Overlord<i class="fa fa-black-tie p-2"></i></h3>
            <p id="manager-content" class="text-center text-dark p-4 card-content">
            ${manager.getName()}
            <br>
            Employee # ${manager.getId()}
            <br>
            <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            <br>
            Office # ${manager.getOffice()}
            </p>
        </div>
        </div>
	`;
	};

    // create engineer card
	const engineerCard = (engineer) => {
		return `
        <div id="engineer-main" class="col-12 col-md-6 col-xl-4 mb-4">
        <div class="card">
            <h3 class="card-header bg-dark text-light text-center d-flex align-items-center">Enginerd<i class="fa fa-diamond p-2"></i></h3>
            <p id="engineer-content" class="text-center text-dark p-4 card-content">
            ${engineer.getName()}
            <br>
            Employee # ${engineer.getId()}
            <br>
            <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            <br>
            GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
            </p>
        </div>
        </div>
	`;
	};

    //create intern card
	const internCard = (intern) => {
		return `
        <div id="intern-main" class="col-12 col-md-6 col-xl-4 mb-4">
        <div class="card">
            <h3 class="card-header bg-dark text-light text-center d-flex align-items-center">Intern, Y'all<i class="fa fa-bed p-2"></i></h3>
            <p id="intern-content" class="text-center text-dark p-4 card-content">
            ${intern.getName()}
            <br>
            Employee # ${intern.getId()}
            <br>
            <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            <br>
            ${intern.getSchool()}
            </p>
        </div>
        </div>
	`;
	};

	const html = [];

	// Manager
	html.push(
		team
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => managerCard(manager))
	);

	// Engineer
	html.push(
		team
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => engineerCard(engineer))
			.join("")
	);

	// Intern
	html.push(
		team
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => internCard(intern))
			.join("")
	);
	return html.join("");
};

const generateLayout = (team) => {
	return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <title>Employee Roster Generator</title>
    </head>

    <body>   
        <header>
            <div class="mx-auto text-center py-4">
                <h1 class="bg-danger text-light align-items-center py-2">Employee Staffing Roster</h1>
            </div>
        </header>

        <main class="col-9 d-flex flex-column container-fluid">
        <div class="row justify-content-center">
    
        ${createTeam(team)}

        </main>

        <footer class="bg-transparent mt-auto d-small-flex">
        <h4 class="text-center"><i class="fa fa-angellist p-2"></i>Made with pride by <a href="https://github.com/joshlyons225/oop-probable-adventure-">Josh Lyons</a>
        <br>
        &copy 2022 Rad Company, Inc.<i class="fa fa-beer p-2"></i>
        </h4>
        </footer>

    </body>

    </html>
    `;
};

module.exports = generateLayout;