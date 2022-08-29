function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  // if (license == "Mozilla") {
  //   return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  // }
  return "";
}

// function renderLicenseLink(license) {
//   if (license !== "none") {
//     return `![License Link](https://shields.io/) `;
//   }
//   return "";
// }

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    This project is licensed under the ${license} license`;
  }
  return "";
}

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
   } You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }).



`;
}

module.exports = generateMarkdown;
