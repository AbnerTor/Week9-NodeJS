// TODO: Include packages needed for this application
const inquire = require('inquirer')
const fs = require('fs');
const { type } = require('os');
const Choices = require('inquirer/lib/objects/choices');
const { prompt } = require('inquirer');
// let generateMarkdown = require('generateMarkdown')
// TODO: Create an array of questions for user input
// const questions = [
//     'What is the name of your project?',
//     'Give some information about the repository.',
//     'How do you install this program?',
//     'How do you use this program?',
//     'Give an example of how this works.',
//     'Would you like to add a license to this project?',
//     'What is you Github username?',
//     'What is your email?',

// ];

function promptUser() {
    return inquire.prompt([

        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },

        {
            type: 'input',
            name: 'creatorName',
            message: 'What is your name?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },

        {
            type: 'input',
            name: 'ghUsername',
            message: 'What is your github Username?'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Could you give a description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this program?'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Instructions for how to use?'
        },

        {
            type: 'input',
            name: 'contributions',
            message: 'How does someone contribute to this repo?'
        },

        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [
                'MIT License', 'GNU General Public License v3.0', 'ISC License', 'None',
            ]
        },


    ]).then((response) => {
        let markDownData = makeREADME(response)
        fs.writeFileSync("./generatedFile/readme.md", markDownData)
    })
}

function renderLicenseBadge(license) {
    if (license === 'MIT License') {
        return  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GNU General Public License v3.0') {
        return  `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if (license === 'ISC License') {
        return  `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }
    else if (license === 'None') {
        return  "";
    }
}

//needs description, table of contents, installation, usage, license, contributing, tests and questions

function makeREADME(responses) {
    const { projectName, creatorName, email, ghUsername, description, installation, usage, contributions, license } = responses;

    return `## ${projectName}
Made by ${creatorName}

Contact me by email at: ${email}

Or check out my github: ${ghUsername}



## Table of contents 

[Description](#Description)

[Installation](#Installations)

[Usage](#Usage)

[Contributions](#Contributions)

[Licenses](#License) 



## Description

${description}


## Installations

Down below are the dependencies that need to be installed for this readme:

${installation} 




## Usage 

${usage}



## Contributions
${contributions}



## License

This project has a ${license}. 
${renderLicenseBadge(license)}



This has been my Home Work 9 assignement, feel free to contact me. 

`
}


promptUser();



// TODO: Create a function to write README file





// // TODO: Create a function to initialize app
// function init() { }
