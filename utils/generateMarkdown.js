// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license != 'N/A') {
  return `(https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage] (#usage)
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
  ## Questions
  If you have any info about this project, prompt me through my details:
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
