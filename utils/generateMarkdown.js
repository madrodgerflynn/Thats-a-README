// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    This project is licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation) 
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation 

  To install necessary dependencies, follow these steps:
    ${data.install}

   ## Usage
   
   ${data.usage}


   ${renderLicenseSection(data.license)}


   ## Contributors

   ${data.contributors}

   ## Tests 

   ${data.tests}

   ## Questions

   For any questions about this project, contact me directly at ${
     data.email
   } You can find more of my work at [${
    data.gitHub
  }](https://github.com/https:/github.com/madrodgerflynn${data.github}/).



`;
}

module.exports = generateMarkdown;
