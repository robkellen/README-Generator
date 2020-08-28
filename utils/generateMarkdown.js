function generateMarkdown({
  title,
  description,
  install,
  usage,
  license,
  contributing,
  tests,
  questions,
  username,
  repo,
}) {
  // const licenseBadgeUrl =
  //   "https://img.shields.io/github/license/" + username + "/" + repo;
  // // console.log(licenseBadgeUrl);
  return `
  # ${title}
  
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
  ${description}


  ## Installation 
  ${install}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}
  
  ## Questions
  "Please email me at " + ${questions} + "with any questions about this project."

`;
}

module.exports = generateMarkdown;
