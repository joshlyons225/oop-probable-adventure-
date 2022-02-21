// function to classify employees to intern card

// function to classify employees to engineer card

// function to classify employees to manager card

// function to generate html layout
function generateLayout(section) {
    return`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

 
        <link rel="stylesheet" href="/dist/style.css" />
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
                <div id="intern-main" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <h3 class="card-header bg-dark text-light text-center d-flex align-items-center">Interns, Y'all</h3>
                        <p id="intern-content" class="text-center text-dark p-4 card-content">
                        ${section.name}, 
                        ${section.title}
                        <br>
                        Employee # ${section.id}
                        <br>
                        [${section.github}](https://github.com/${section.github})
                        <br>
                        [${section.email}](mailto:${section.email})
                        </p>
                    </div>
                </div>
                <div id="engineer-main" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <h3 class="card-header bg-dark text-light text-center d-flex align-items-center">Enginerds</h3>
                        <p id="engineer-content" class="text-center text-dark p-4 card-content"></p>
                    </div>
                </div>
                <div id="manager-main" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <h3 class="card-header bg-dark text-light text-center d-flex align-items-center">Manager Overlords</h3>
                        <p id="manager-content" class="text-center text-dark p-4 card-content"></p>
                    </div>
                    </div>
                </div>
            </div>
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