// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//format these correctly for markdown
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let badgeUrl;
  switch (license) {
    case 'MIT':
      badgeUrl = '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'GNU GPLv3':
      badgeUrl = '![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'Apache 2.0':
      badgeUrl = '![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'BSD 3-Clause':
      badgeUrl = '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)';
      break;
    default:
      badgeUrl = '';
  } 
  return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// clickable url
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  let licenseUrl;
  switch (license) {
    case 'MIT':
      licenseUrl = '<https://opensource.org/licenses/MIT>';
      break;
    case 'GNU GPLv3':
      licenseUrl = '<https://www.gnu.org/licenses/gpl-3.0>';
      break;
    case 'Apache 2.0':
      licenseUrl = '<https://opensource.org/licenses/Apache-2.0>';
      break;
    case 'BSD 3-Clause':
      licenseUrl = '<https://opensource.org/licenses/BSD-3-Clause>';
      break;
    default:
      licenseUrl = '';
  }
  return licenseUrl;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else 
  return `## License
This is licensed under ${renderLicenseLink(license)}`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title }
${renderLicenseBadge(data.license)}
# Description
${data.description}
## Table of Contents
- Insallation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contributing}
## Tests
${data.tests}
${renderLicenseSection(data.license)}
## Questions
If you have questions you can reach me at my GitHub or email below.
${data.github}
${data.email}
`;
}

export default generateMarkdown;

