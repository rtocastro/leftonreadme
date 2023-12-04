// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}


  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}

## Description

${data.description}


## Table of Contents (optional)

 ${data.contents}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#Contributions)
- [Tests](#tests)
- [Questions](#Questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contributions

${data.contributing}

## Tests

## Questions

Made by http://www.github.com/${data.githubuser}

If you have any questions or comments please e-mail ${data.mail}

`;
}

  module.exports = generateMarkdown;
