const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter a title for the README",
    name: "title",
  },
  {
    //  Description
    type: "input",
    message: "Please provide a short description of your project.",
    name: "description",
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
    //Tests
    type: "input",
    message: "Please provide what tests you used?",
    name: "tests",
  },
  {
    //Licenses
    type: "list",
    message: "please choose the licesnses used.",
    choices: ["MIT", "none"],
    name: "license",
  },
  {
    type: "content",
    message: "Please enter your email address.",
    name: "email",
  },
  {
    type: "content",
    message: "What is your github handle (@):",
    name: "github",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    console.log("Success!");
  });
}
// Function call to initialize app
init();
