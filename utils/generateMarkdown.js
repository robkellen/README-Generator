function generateMarkdown(data) {
  const licenseBadgeUrl = "https://img.shields.io/github/license/" + data.username + "/" + data.repo;
  console.log(licenseBadgeUrl);
  return `
  # ${data.title}
  ${licenseBadgeUrl}
  
  ## Table of Contents
    * [Description] (#description)
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (#questions)
  ##  
  
  ## Description
  ${data.description}


  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  "Please email me at " + ${data.questions} + "with any questions about this project."

`;
}

module.exports = generateMarkdown;

