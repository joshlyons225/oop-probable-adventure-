

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
            <div class="mx-auto text-center">
            </div>
        </header>

        <main class="col-9 d-flex flex-column container-fluid">
            <div class="row justify-content-center p-4">
                <button id="jokeGenBtn" class="btn btn-block btn-generate btn-style card">Generate Joke</button>
            </div>
            <div class="row justify-content-center">
                <div id="joke-main" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <h3 class="card-header bg-dark text-light d-flex align-items-center">Dadz Joke</h3>
                        <p id="dad-joke" class="text-center text-dark p-4 card-content"></p>
                    </div>
                </div>
                <div id="yoda-lang" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <h3 class="card-header bg-dark text-light d-flex align-items-center">Yoda'd Joke</h3>
                        <p id="yoda-joke" class="text-center text-dark p-4 card-content"></p>
                    </div>
                </div>
                <div id="favorites" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <h3 class="card-header bg-dark text-light d-flex align-items-center">Favorite Yoda'd Jokes</h3>
                        <p id="favorite-joke" class="text-center text-dark p-4 card-content"></p>
                    </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="bg-transparent mt-auto d-small-flex">
            <h4 class="text-center"><i class="fa fa-asl-interpreting p-2"></i>Made with pride by <a href="https://github.com/joshlyons225/oop-probable-adventure-">Josh</a>
            <br>
            &copy 2022 Rad Company, Inc.<i class="fa fa-blind p-2"></i>
            </h4>
        </footer>
    </body>
    </html>
    `;
};

module.exports = generateLayout;