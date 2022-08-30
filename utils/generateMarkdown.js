function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
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

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description 

  ------------

  ${data.description}

  ## Table of Contents 

  ----------

  * [Installation](#installation) 
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation 

  ---------

  To install necessary dependencies, follow these steps:
    ${data.install}

   ## Usage

   ---------
   
   ${data.usage}


   ${renderLicenseSection(data.license)}


   ## Contributors

  --------

   ${data.contributors}

   ## Tests 

  -----------

   ${data.tests}

   ## Questions

__________________

   For any questions about this project, contact me directly at ${
     data.email
   } You can find more of my work on my Github @ [${
    data.github
  }](https://github.com/${data.github}).

  ______________________
  ## Images

  This is an area where any User images may be linked.
  
  `;
}

module.exports = generateMarkdown;
