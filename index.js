// globals
const fs = require('fs');
const inquirer = require('inquirer');

// question array to generate html page data
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (employeeName) => {
            if (employeeName) {
                return true;
            } else {
                console.log("You must enter your name. Try again.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID? (Required)",
        validate: (employeeId) => {
            if (employeeId) {
                return true;
            } else {
                console.log("You must enter your ID. Try again.");
                return false;
            }
        }    
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? (Required)",
        validate: (employeeEmail) => {
            if (employeeEmail) {
                return true;
            } else {
                console.log("You must enter your email address. Try again.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "title",
        message: "What is your employee classification? (Required)",
        choices: ["Intern", "Engineer", "Manager"],
        validate: (employeeClass) => {
            if (employeeClass) {
                return true;
            } else {
                console.log("You must enter your employee classification. Try again.");
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
    return inquirer.prompt(questions);
}
  
// function call to initialize app
  init()
    .then((createHTML) => {
      return writeToFile("./dist/index.html", createHTML);
});