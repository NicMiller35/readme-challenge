// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let badgeUrl;
  switch (license) {
    case 'MIT':
      badgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'GNU GPLv3':
      badgeUrl = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'Apache 2.0':
      badgeUrl = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
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
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  let licenseUrl;
  switch (license) {
    case 'MIT':
      licenseUrl = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU GPLv3':
      licenseUrl = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache 2.0':
      licenseUrl = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 3-Clause':
      licenseUrl = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      licenseUrl = '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;

renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();