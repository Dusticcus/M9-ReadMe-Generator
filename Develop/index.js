// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('file-system');
const writeReadme = require('./generateMarkdown');



// // TODO: Create a function to initialize app
function init() {
// // TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Provide the name of your App:',
    name: 'appName',
},{
    type: 'input',
    message: 'Provide a description of your application:',
    name: 'description',
},
{
    type: 'list',
    message: 'What kind of license does this application have?',
    choices: ['MIT', 'Creative Commons'],
    name: 'license',
},
{
    type: 'input',
    message: 'Desribe how to install the app:',
    name: 'installation',
},
{
    type: 'input',
    message: 'Describe how to use the app:',
    name: 'usage',
},
{
    type: 'input',
    message: 'How can you or others contribute?',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Testing Information:',
    name: 'tests',
},
{
    type: 'input',
    message: 'Provide your Github Account name:',
    name: 'githubAccount',
},
{
    type: 'input',
    message: 'Provide your email address to be contacted through:',
    name: 'contact',
}];

inquirer
    .prompt([
        /* Pass your questions in here */
        ...questions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        // TODO: Create a function to write README file
        fs.writeFile('./readme.md', writeReadme(answers), (err) =>
            err ? console.log(err) : console.log('Success!')
        )
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

// // Function call to initialize app
init();

