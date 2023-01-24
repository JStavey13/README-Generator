// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

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
    message: 'how to contribure:',
    name: 'contribut'},


    {type: 'input',
    message: 'license used:',
    name: 'license'}
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();