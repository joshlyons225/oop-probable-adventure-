// globals
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateLayout = require('./src/pageLayout');

// creates master employees array
const employees = [];

// question array to generate manager info
const mgrQuestionsArray = (mgrData) => {
    return inquirer
        .prompt([
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
            ])
            .then((data) => {
                const manager = new Manager(
                    data.mgrName,
                    data.mgrId,
                    data.mgrEmail,
                    data.mgrOffice
                );
                employees.push(manager);
            });
};

// question array to generate general employee class info
const employeeQuestions = () => {
    return inquirer
        .prompt([
                {
                    type: "list",
                    name: "empType",
                    message: "What type of employee would you like to add?",
                    choices: ["Engineer", "Intern", "None"],
                },
                {
                    type: "input",
                    name: "empName",
                    message: "What is your employee's name? (Required)",
                    validate: (empName) => {
                        if (empName) {
                            return true;
                        } else {
                            console.log("You must enter your employee's name. Try again.");
                            return false;
                        }
                    },
                    when: ({ empType }) => {
                        if (empType !== "None") {
                            return true;
                        } else {
                            return false;
                        }
                    }   
                },
                {
                    type: "input",
                    name: "empId",
                    message: "What is your employee's ID? (Required)",
                    validate: (empId) => {
                        if (empId) {
                            return true;
                        } else {
                            console.log("You must enter your employee's ID. Try again.");
                            return false;
                        }
                    },
                    when: ({ empType }) => {
                        if (empType !== "None") {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "empEmail",
                    message: "What is your employee's email address? (Required)",
                    validate: (empEmail) => {
                        if (empEmail) {
                            return true;
                        } else {
                            console.log("You must enter employee's email address. Try again.");
                            return false;
                        }
                    },
                    when: ({ empType }) => {
                        if (empType !== "None") {
                            return true;
                        } else {
                            return false;
                        }
                    } 
                },
                {
                    type: "input",
                    name: "egrGit",
                    message: "What is your engineer's GitHub username? (Required)",
                    validate: (egrGit) => {
                        if (egrGit) {
                            return true;
                        } else {
                            console.log("You must enter engineer's GitHub username. Try again.");
                            return false;
                        }
                    },
                    when: ({ empType }) => {
                        if (empType === "Engineer") {
                            return true;
                        } else {
                            return false;
                        }
                    } 
                },
                {
                    type: "input",
                    name: "intSchool",
                    message: "What is your intern's school? (Required)",
                    validate: (intSchool) => {
                        if (intSchool) {
                            return true;
                        } else {
                            console.log("You must enter intern's school. Try again.");
                            return false;
                        }
                    },
                    when: ({ empType }) => {
                        if (empType === "Intern") {
                            return true;
                        } else {
                            return false;
                        }
                    } 
                }
            
        ])
// function to push newly created engineer to employees array
.then(data => {
    const engineer = new Engineer (
        data.egrName, data.egrId, data.egrEmail, data.egrGithub
    )
    console.log(engineer);
    employees.push(engineer);
    console.log(employees);
})
};

// question array to add intern
const internQuestionsArray = [
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

// function to push newly created intern to employees array
const internQuestions = () => {
    return inquirer.prompt(internQuestionsArray)
    .then(data => {
        const intern = new Intern (
            data.intName, data.intId, data.intEmail, data.intSchool
        )
        console.log(intern);
        employees.push(intern);
        console.log(employees);
    })
}

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
          console.log("HTML generated! Check it out in the dist directory!");
        }
        resolve({
          ok: true,
          message: "HTML generated! Check it out in the dist directory!",
        });
      });
    });
}

// function to set employee type
const employeeType = () => {
    return inquirer.prompt(
    {
        type: "list",
        name: "empType",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "None"]
    })
    .then(data => {
        return data.empType
    })
    .then(data => {
        do {
            if (data === "Engineer") {
            console.log(`
    ==============
    ENGINEER INFO   
    ==============
            `);
                return engQuestions();
            } else if (data === "Intern") {
                console.log(`
    ============
    INTERN INFO   
    ============
                `);
                return internQuestions();
            }
        }
        while (data !== "None")
    });
}

// function to initialize app
console.log(`
    ==================
    TEAM MANAGER INFO   
    ==================
`);
mgrQuestions()
    .then(employeeType)
    .then(employeeType)
    .then(employeeType)
    .then((pageLayout) => {
        return generateLayout(pageLayout);
    })
    .then((createHTML) => {
      return writeToFile("./dist/index.html", createHTML);
});