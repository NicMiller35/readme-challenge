// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkDown from '/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: [  'MIT',
                    'GNU GPLv3',
                    'Apache 2.0',
                    'BSD 3-Clause', 
                    'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('/generated/ReadMe', generateMarkDown(data), (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('ReadMe file successfully generated!');}
    });
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((answers) => {
    const markdown = generateMarkDown(answers);
    writeToFile('README.md', markdown);
})
.catch((error) => {
console.error('Please fill out required inputs to display a README', error)
});
}

// Function call to initialize app
init();
