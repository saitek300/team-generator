const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
//const generateMyTeam = require('./generateMyTeam');

let Team = []

const teamMembers = {
    Manager: [{
        type: "input",
        message: "What is the manager's name? ",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's id? ",
        name: "managerId"
    },

    {
        type: "input",
        message: "What is the manager's email? ",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number? ",
        name: "officeNumber"

    }
    ],


    Engineer: [{
        type: "input",
        message: "What is the engineer's name? ",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's id? ",
        name: "engineerId"
    },

    {
        type: "input",
        message: "What is the engineer's email? ",
        name: "engineerEmail"
    }, {

        type: "input",
        message: "What is the engineer's Github username? ",
        name: "Github"
    }
    ],

    Intern: [{
        type: "input",
        message: "What is the intern's name? ",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's id? ",
        name: "internId"
    },

    {
        type: "input",
        message: "What is the intern's email? ",
        name: "internEmail"
    }, {
        type: "input",
        message: "What is the intern's school? ",
        name: "school"
    }

    ]
}



function init() {

    inquirer.prompt(addNew).then(answer => {
        if (answer.addMember === "yes") {
            addRole();
        } else {

        }
    })
};

const addNew = {
    type: `list`,
    message: `would you like to add an employee?`,
    name: `addMember`,
    choices: ["yes", "no"]
}

function addRole() {
    inquirer.prompt({
        type: 'list',
        message: 'what role would you like to assign this employee?',
        name: 'addrole',
        choices: ['manager', 'engineer', 'intern']
    })
        .then(answer => {
            if (answer.addrole === "manager") {
                inquirer.prompt(teamMembers.Manager)
                    .then(managerData => {
                        const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber)

                        Team.push(manager)
                        console.log(Team)
                    })

            } else if (answer.addrole === "engineer") {
                inquirer.prompt(teamMembers.Engineer)
                    .then(engineerData => {
                        const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.Github)

                        Team.push(engineer)
                        console.log(Team)
                    })
            } else if (answer.addrole === "intern") {
                inquirer.prompt(teamMembers.Intern)
                    .then(internData => {
                        const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.school)

                        Team.push(intern)
                        console.log(Team)
                    })
            }

        })

}
init()