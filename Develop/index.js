
// 1.
// Adding the inquirer npm; make sure to run 'npm i'
const inquirer = require('inquirer');
// Allows the code to interact with the file system
const fs = require('fs');


const makeREADME = (answers) =>
`# ${answers.Title}

[License](https://img.shields.io/badge/License-${answers.License}-green.svg)](https://opensource.org/licenses/BSD-3-Clause)

## Description
${answers.Description}

## Table of Contents
// CREATE IT MANUALLY HERE
    -- CLICKABLE LINKS (GOES TO DIF SECTIONS OF README) --
// CREATE IT MANUALLY HERE
## Installation
${answers.Installation}

## Usage
${answers.Usage}

## Liscence
${answers.License}

## Contributing
${answers.Contributing}

## Test
${answers.Test}

## Questions
If you wish to reach out, please use the provided information below!
    - [Github](https://github.com/${answers.Github})
    - [Email]: ${answers.Email}

## Video Link 
    - [Video]()

---
`;


inquirer 
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What do you want your title to be?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Write a description:'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Give some installation instructions:'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Give some usage information:'
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please choose a liscence:',
            choices: ['GNU', 'WordPress', 'Apache', 'Cloud Native Computing Foundationr']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'List some contribution guidelines:'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'List some test instructions:'
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Please enter your full Github username:'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Please enter your full email:'
        },
    ])
    .then((answers) => {
        const READMEContent = makeREADME(answers);

        fs.writeFile('README.md', READMEContent, (err) => 
            err ? console.log(err) : console.log('Daijobu!')
        );
    });
