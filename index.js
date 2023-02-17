// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    
   {type: 'input',
    message: 'app title:',
    name: 'title'},
   
   
    {type: 'input',
    message: 'app description:', 
    name: 'description'},
    
    
    {type: 'input',
    message: 'how to install the app:', 
    name: 'installation'},
    
    
    {type: 'input',
    message: 'how to report issues:', 
    name: 'issues'},
    
    
    {type: 'input',
    message: 'how to contribute:',
    name: 'contribute'},


    {type: 'list',
    message: 'license used:',
    name: 'license',
    choices: [
        'MIT',
        'none',
    ]

}
    
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.Console(err) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
   
    .then((answers) => {
    // console.log(answers)
    const pageTemplate = generateMarkdown(answers) 
    // console.log(pageTemplate)
    writeToFile("./utils/README.md", pageTemplate)
});
};

// Function call to initialize app
init();
