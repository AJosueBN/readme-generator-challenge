const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
 {
 type: 'input',
 message: 'What is your GitHub username?',
 name: 'github',
 }, 
 { 
 type: 'input',
 message: 'What is your email address?',
 name: 'email',
 },
 {
 type: 'input',
 message: "What is your project's name",
 name: 'title',
 },
 {
 type: 'input',
 message: "Write a description of the project",
 name: 'description',
 },
 {
 type: 'list',
 message: "Would you like a license to be within your project?",
 name: 'license',
 choices: ['MIT','APACHE 2.0','GNU 3.0','BSD.3','N/A'],
 },
 {
 type: 'input',
 message: "What command needs to run to install dependencies?",
 name: 'installation',
 default: 'npm install',
 },
 {
 type: 'input',
 message: "What command needs to run to run test?",
 name: 'test',
 default: 'npm test',
 },
 {
type: 'input',
message: "What does the user need to know about using the app?",
name: 'usage',
 },
 {
 type: 'input',
 message: "Has anyone else contributed to the project?",
 name: 'contribution',
 },
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(path.join(__dirname,'/example/',fileName),data, function(err){
    if(err) throw err;
    console.log('Check for file')
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('README.md' , generateMarkdown(answers)))
}

// Function call to initialize app
init();
