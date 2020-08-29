function generateMarkdown({
  title,
  description,
  install,
  usage,
  contributing,
  tests,
  userLicense,
  licenseBadgeUrl,
  email,
}) {
  return `
  # ${title}

  ![license badge](https://img.shields.io/badge/license-${userLicense}-green)
  
  ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)
  ##  
  
  ## Description
  ${description}


  ## Installation 
  ${install}

  ## Usage
  ${usage}

  ## License
  ${userLicense}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}
  
  ## Questions
  "Please email me at " + ${email} + "with any questions about this project."

`;
}

module.exports = generateMarkdown;
