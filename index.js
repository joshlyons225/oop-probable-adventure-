// globals
const fs = require('fs');
const inquirer = require('inquirer');
const generateLayout = require('./src/pageLayout');

// question array to generate manager info
const mgrQuestions = [
    {
        type: "input",
        name: "mgrName",
        message: "What is your name? (Required)",
        validate: (mgrName) => {
            if (mgrName) {
                return true;
            } else {
                console.log("You must enter your name. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "mgrId",
        message: "What is your employee ID? (Required)",
        validate: (mgrId) => {
            if (mgrId) {
                return true;
            } else {
                console.log("You must enter your ID. Try again.");
                return false;
            }
        }    
    },
    {
        type: "input",
        name: "mgrEmail",
        message: "What is your email address? (Required)",
        validate: (mgrEmail) => {
            if (mgrEmail) {
                return true;
            } else {
                console.log("You must enter your email address. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "mgrOffice",
        message: "What is your office number? (Required)",
        validate: (officeNum) => {
            if (officeNum) {
                return true;
            } else {
                console.log("You must enter your office number. Try again.");
                return false;
            }
        }
    },
];

// question array add engineer
const engQuestions = [
    {
        type: "input",
        name: "egrName",
    message: "What is your engineer's name? (Required)",
        validate: (engName) => {
            if (engName) {
                return true;
            } else {
                console.log("You must enter your engineer's name. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "egrId",
        message: "What is your engineer's employee ID? (Required)",
        validate: (egrId) => {
            if (egrId) {
                return true;
            } else {
                console.log("You must enter your engineer's ID. Try again.");
                return false;
            }
        }    
    },
    {
        type: "input",
        name: "egrEmail",
        message: "What is your engineer's email address? (Required)",
        validate: (egrEmail) => {
            if (egrEmail) {
                return true;
            } else {
                console.log("You must enter your engineer's email address. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "egrGithub",
        message: "What is your engineer's GitHub username? (Required)",
        validate: (egrGithub) => {
            if (egrGithub) {
                return true;
            } else {
                console.log("You must enter engineer's GitHub info. Try again.");
                return false;
            }
        }
    }
];

// question array to add intern
const internQuestions = [
    {
        type: "input",
        name: "intName",
    message: "What is your intern's name? (Required)",
        validate: (intName) => {
            if (intName) {
                return true;
            } else {
                console.log("You must enter your intern's name. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "intId",
        message: "What is your intern's employee ID? (Required)",
        validate: (intId) => {
            if (intId) {
                return true;
            } else {
                console.log("You must enter your intern's ID. Try again.");
                return false;
            }
        }    
    },
    {
        type: "input",
        name: "intEmail",
        message: "What is your intern's email address? (Required)",
        validate: (intEmail) => {
            if (intEmail) {
                return true;
            } else {
                console.log("You must enter your intern's email address. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "intSchool",
        message: "What is the name of your intern's school? (Required)",
        validate: (intSchool) => {
            if (intSchool) {
                return true;
            } else {
                console.log("You must enter intern's school info. Try again.");
                return false;
            }
        }
    }
];

// function to write html file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.clear();
          console.log("Something went wrong. Sad face.");
          reject(err);
          return;
        } else {
          console.clear();
          console.log("HTML generated!");
        }
        resolve({
          ok: true,
          message: "HTML generated!",
        });
      });
    });
}

// function to initialize app
function init() {
    console.clear();
    console.log(`
      ======================
      CUSTOM TEAM GENERATOR   
      ======================
      `);
    return inquirer.prompt(mgrQuestions);
}
  
// function call to initialize app
  init()
    .then((engStaff) => {
        return inquirer.prompt(engQuestions, engStaff);
    })
    .then((intStaff) => {
        return inquirer.prompt(internQuestions, intStaff);
    })
    .then((pageLayout) => {
        return generateLayout(pageLayout);
    })
    .then((createHTML) => {
      return writeToFile("./dist/index.html", createHTML);
});