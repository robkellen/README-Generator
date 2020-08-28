const inquirer = require("inquirer");
const fs = require("fs");
const userPrompts = require("./utils/userPrompts");


// const writeFileAsync = util.promisify(fs.writeFile);

// // prompt user for questions
// function userPrompt(){
//   return inquirer.prompt([
//     {
//       message: "What is your GitHub user name?",
//       name: "username"
//     },
//     {
//       message: "What is the title of your project?",
//       name: "title"
//     },
//     {
//       message: "What is the description of your project?",
//       name: "description"
//     },
//     {
//       message: "What are the installation instructions for your project?",
//       name: "install"
//     },
//     {
//       message: "Please provide instructions and examples for use.",
//       name: "usage"
//     },
//     {
//       message: "Please provide HTML link to screenshot of deployed application.",
//       name: "screenshot"
//     },
//     {
//       message: "Please provide guidelines for how other developers can contribute to your project.",
//       name: "contributing"
//     },
//     {
//       message: "Please provide examples of tests to run in your application, and instructions on how to run them.",
//       name: "tests"
//     }
  
//   ]).then(function(data){
//     console.log(data);
//   })
// }

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
userPrompts();
init();
