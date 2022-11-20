const inquirer = require('inquirer');
const fs = require('fs');
const generateMyTeam = require('./generateMyTeam');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: `what is your employee's name?`,
    },
    {
        type:'input',
        name:'email',
        message:`what is your employee's email address?`,
    },
    {
        type:'input',
        name:'ID',
        message:`what is the employee's ID?`,
    },
    {
        type: 'list',
        name: 'Role',
        message: `what is the role of the employee?`,
        choices: [`Manager`,`Engineer`,`Intern`],
    },
    

];

// funtion for generating the html
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            console.log("an error has occured")
        } else {
            console.log("success")
        }
    })
}

// input function for html template
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("My-Team.html", generateMyTeam(data));
        })

}


init();
