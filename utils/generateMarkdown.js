// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== 'none') {
  return `## License
This project is licensed under ${license}`
}
else {
  return ""
}
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## description
   ${data.description}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## How to install the app
  ${data.installation}

  ## How to report issues
  ${data.issues}

  ## How to contribute
  ${data.contribute}
`;
}

module.exports = generateMarkdown;
