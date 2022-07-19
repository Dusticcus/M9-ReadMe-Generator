// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
var answerLicenseType;


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {


// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {


// }



// TODO: Create a function to generate markdown for README
function writeReadme(answers) {
  if(answers.license === "MIT") {
    answerLicenseType = "[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)";
  } else if (answers.license === "Creative Commons") {
    answerLicenseType = " [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    answerLicenseType = "";
  }

  return `
# App Name: <br/>
## License: ${answerLicenseType}<br/>
## Description: 
  - ${answers.description}<br/>
## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contributing)
- [Tests](#tests)
- [Contact](#contact)
## Insallation: 
  - ${answers.installation}<br/> 
## Use: 
  - ${answers.usage}<br/>
## Contribute: 
  - ${answers.contributing}<br/>
## Tests: 
  - ${answers.tests}<br/>
## Contact: 
  - ${answers.contact}`
}

// module.exports is an object we use to store variables or methods
module.exports = writeReadme;