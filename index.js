// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please provide a short description of your project.",
        name: "description",
    }
    {
        type: "checkbox",
        message: "Would you like your README to include a table of contents?",
        choices: ["yes", "no"],
        name: "tOc",
    }
    {
        type: "input",
        message: "Please provide any steps needed to install your project. ",
        name: "install",
    }
    {
        type: "input",
        message: "Please provide any instructions for use.",
        name: "usage",
    }
    {
        type: "checkbox",
        message: "Please check the contribitors used in your project",
        choices: ["Bootstrap", "Google Fonts", "GitHub"],
        name: "description",
    }
    {
        type: "input",
        message: "Please provide a short description of your project",
        name: "description",
    }
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
