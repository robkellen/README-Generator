const inquirer = require("inquirer");
const fs = require("fs");
const userPrompts = require("./utils/userPrompts");
const generateMarkdown = require("./utils/generateMarkdown")


// const writeFileAsync = util.promisify(fs.writeFile);



// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", JSON.stringify(data, null, 2), function(err){
    console.log("Done");
  })
}

// function to initialize program
async function init() {
  let data = await userPrompts();
  let md = generateMarkdown(data);
  writeToFile("testFile", md);

}

// function call to initialize program

init();
