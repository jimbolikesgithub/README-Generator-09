
// 1.
// Adding the inquirer npm; make sure to run 'npm i'
const inquirer = require('inquirer');
// Allows the code to interact with the file system
const fs = require('fs');
 

const makeREADME = (answers) =>
`# ${answers.Title}
[License](https://img.shields.io/badge/License-${answers.License}-green.svg)](https://www.gnu.org/licenses/license-recommendations.html)

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
If you wish to reach out, please use the provided information below! <br/>
    - [Github](https://github.com/${answers.Github}) <br/>
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
            choices: ['GNU', 'WordPress', 'Apache', 'OpenBSD']
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

        // fs.writeFile('README.md', READMEContent, (err) => 
        //     err ? console.log(err) : console.log('Daijobu!')
        // );

        // answers.License prints whichever choice was chosen (I chose GNU, so it logged 'GNU')
        console.log(answers.License)

        const choiceLinks = {
            // [GNU, WordPress , Appache, OpenBSD]
            array: ['https://www.gnu.org/licenses/license-recommendations.html', 'https://wordpress.org/about/license/', 'https://www.apache.org/licenses/', 'https://www.openbsd.org/policy.html']
        }

        // Object Destructuring
        const { array } = choiceLinks
        // Logs the entire array of links
        console.log(array);

        const pushArrayLink = (link) => {
            // console.log(link.array[2])
            if (answers.License === 'GNU') {
                console.log(`This is GNU: ${link.array[0]}`)
            } else if (answers.License === 'WordPress') {
                console.log(`This is WordPress: ${link.array[1]}`)
            } else if (answers.License === 'Apache') {
                console.log(`This is Apache: ${link.array[2]}`)
            } else {
                console.log(`This is OpenBSD: ${link.array[3]}`)
            }
            return link;
        }
        // Returning each array index, for ex...
        // console.log(link.array[1]) will return 'https://wordpress.org/about/license/' (but without the strings)
        pushArrayLink(choiceLinks)
    });
