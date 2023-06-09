// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license != "N/A") {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
else return ''
}

// Function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if(license != "N/A") {
  return `https://choosealicense.com/licenses/${license}`
}
else return ''
}

// Function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if(license != "N/A") {
    return `The license used for this project is the ${license} license`
  }
  else return ''
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Contribution](#contribution)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  To install the Node Package Manager(npm), enter the following command:
  ${data.installation}
  ## Usage
  Additional info before using the app:
  ${data.usage}
  ## Test
  To test run in the terminal, enter the command:
  ${data.test}
  ## Contribution 
  ${data.contribution}
  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  If you have any info about this project, prompt me through these details:
  
  GitHub: https://github.com/${data.github}
  Email: ${data.email}

`;
}

// Gets data from this file and imports it into the index.js file
module.exports = generateMarkdown;
