// globals
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateLayout = require('./src/pageLayout');

// creates master employees array
const employees = [];

// question array to generate manager info
const mgrQuestions = (mgrData) => {
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

        // push engineer info to employee array and ask if user wants to create another employee
        .then ((employeeInfo) => {
            if (employeeInfo.empType === "Engineer") {
                const engineer = new Engineer(
                    employeeInfo.empName,
                    employeeInfo.empId,
                    employeeInfo.empEmail,
                    employeeInfo.egrGit
                );
                employees.push(engineer);
                return employeeQuestions();

            // push intern info to employee array and ask if user wants to create another employee
            } else if (employeeInfo.empType === "Intern") {
                const intern = new Intern(
                    employeeInfo.empName,
                    employeeInfo.empId,
                    employeeInfo.empEmail,
                    employeeInfo.intSchool
                );
                employees.push(intern);
                return employeeQuestions();

            // write file to index.html in dist folder
            } else {
                fs.writeFileSync("./dist/index.html", generateLayout(employees));
                console.log("HTML file created! Check it out in the dist directory!")
            }
        });
};        

mgrQuestions()
    .then(employeeQuestions)