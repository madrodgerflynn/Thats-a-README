// TODO: Include packages needed for this application

//Installed package.json & package-lock.json

// TODO: Create an array of questions for user input
const questions = [
  {
    //  Description
    type: "input",
    message: "Please provide a short description of your project.",
    name: "description",
  },
  {
    // ToC
    type: "checkbox",
    message: "Would you like your README to include a table of contents?",
    choices: ["yes", "no"],
    name: "tOc",
  },
  {
    //Installation
    type: "input",
    message: "Please provide any steps needed to install your project. ",
    name: "install",
  },
  {
    // Usage
    type: "input",
    message: "Please provide any instructions for use.",
    name: "usage",
  },
  {
    // Contributors
    type: "input",
    message: "Please provide any contributors that were used.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Please provide ",
    name: "description",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
