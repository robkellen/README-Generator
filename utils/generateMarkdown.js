// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## ${data.tableofcontents}

  ## ${data.license}


`;
}

module.exports = generateMarkdown;
