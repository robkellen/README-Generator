// prompt user for info to be generated in README
const inquirer = require("inquirer");

function userPrompts() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username",
    },
    {
      type: "input",
      message: "Enter the name of your GitHub repository for this project?",
      name: "repo",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions for your project?",
      name: "install",
    },
    {
      type: "input",
      message: "Please provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "list",
      message:
        "Please choose the type of license you would like for your project:",
      choices: ["MIT", "Apache", "GPLv2"],
      name: "userLicense",
    },
    {
      type: "input",
      message:
        "Please provide guidelines for how other developers can contribute to your project.",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Please provide examples of tests to run in your application, and instructions on how to run them.",
      name: "tests",
    },
    {
      type: "input",
      message:
        "Please provide your email address to be contacted about questions regarding your app.",
      name: "email",
    },
  ]);
  //
}
// const getLicense = function (username, userLicense) {
//   let mitLicense = `MIT License

//   Copyright (c) 2020 ${username}

//   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

//   let apacheLicense = `Copyright 2020 ${username}

//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at $[
//       "http://www.apache.org/licenses/LICENSE-2.0"
//     ]("http://www.apache.org/licenses/LICENSE-2.0")

//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.`;

//   let apacheBadge =
//     "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

//   let mitBadge =
//     "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   if (userLicense === "MIT") {
//     userLicense = mitLicense;
//   } else if (userLicense === "Apache") {
//     userLicense = apacheLicense;
//   }
//   if (userLicense === "MIT") {
//     licenseBadgeUrl = mitBadge;
//   } else if (userLicense === "Apache") {
//     licenseBadgeUrl = apacheBadge;
//   }
// };

// getLicense();

module.exports = userPrompts;
