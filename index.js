// Adding the inquirer npm; make sure to run 'npm i'
const inquirer = require('inquirer');
// Allows the code to interact with the file system
const fs = require('fs');

// -------------------------------------------------------------------------------------------------------------------------------------------
const pushArrayLink = (license) => {
    // Empty string for each link (commented out the way I did before down at the bottom)
    let link = ''
    // IF the choice is equal to the strings bellow...
    if (license === 'GNU') {
        // ...console log them, AND...
        console.log(`This is GNU: https://www.gnu.org/licenses/license-recommendations.html`)
        // ...print them by returning the link strings
        link = 'https://www.gnu.org/licenses/license-recommendations.html'
    } else if (license === 'WordPress') {
        console.log(`This is WordPress: https://wordpress.org/about/license/`)
        link = 'https://wordpress.org/about/license/'
    } else if (license === 'Apache') {
        console.log(`This is Apache: https://www.apache.org/licenses/`)
        link = 'https://www.apache.org/licenses/'
    } else {
        console.log(`This is OpenBSD: https://www.openbsd.org/policy.html`)
        link = 'https://www.openbsd.org/policy.html'
    }
    // Return link strings
    return link ;
}

const makeREADME = (answers) => {
// linkContainer holds the function pushArrayLink which allows it to be used via a template literal, so that...
// ...when a choice is clicked (GNU, Apache, etc)...
// ...the link is appended to the empty parentheses
 linkContainer = pushArrayLink(answers.License)
 return`
# ${answers.Title}
[![License](https://img.shields.io/badge/License-${answers.License}-green.svg)](${linkContainer})

## Description <a name='description'></a>
${answers.Description}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#test)
7. [Questions](#questions)
8. [Video Link](#video-link)


## Installation <a name='installation'></a>
${answers.Installation}

## Usage <a name='usage'></a>
${answers.Usage}

## Liscence <a name='license'></a>
${answers.License}

## Contributing <a name='contributing'></a>
${answers.Contributing}

## Test <a name='test'></a>
${answers.Test}

## Questions <a name='questions'></a>
If you wish to reach out, please use the provided information below! <br/>
    - [Github](https://github.com/${answers.Github}) <br/>
    - Email: ${answers.Email}

## Video Link <a name='video-link'></a>
    - [Video]()

---
`;
}
// -------------------------------------------------------------------------------------------------------------------------------------------
const promptUser = () => {
return inquirer 
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
            name: 'Test',
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
}
// REFACTORED ^^
// -------------------------------------------------------------------------------------------------------------------------------------------
const init = () => {
    // Calling promptUser function
    promptUser()
    .then((answers) => {
        const READMEContent = makeREADME(answers);

        fs.writeFile('README.md', READMEContent, (err) => 
            err ? console.log(err) : console.log('Daijobu!')
        );

        // answers.License prints whichever choice was chosen (I chose GNU, so it logged 'GNU')
        console.log(answers.License)
// REFACTORED ^^
// -------------------------------------------------------------------------------------------------------------------------------------------
    // const choiceLinks = {
    //     // [GNU, WordPress , Appache, OpenBSD]
    //     array: ['https://www.gnu.org/licenses/license-recommendations.html', 'https://wordpress.org/about/license/', 'https://www.apache.org/licenses/', 'https://www.openbsd.org/policy.html']
    // }

    // // Object Destructuring
    // const { array } = choiceLinks
    // // Logs the entire array of links
    // console.log(array);

    // const pushArrayLink = (link) => {
    //     // console.log(link.array[2])
    //     if (answers.License === 'GNU') {
    //         console.log(`This is GNU: ${link.array[0]}`)
    //     } else if (answers.License === 'WordPress') {
    //         console.log(`This is WordPress: ${link.array[1]}`)
    //     } else if (answers.License === 'Apache') {
    //         console.log(`This is Apache: ${link.array[2]}`)
    //     } else {
    //         console.log(`This is OpenBSD: ${link.array[3]}`)
    //     }
    //     return link;
    // }
    // // // Returning each array index, for ex...
    // // // console.log(link.array[1]) will return 'https://wordpress.org/about/license/' (but without the strings)
    // pushArrayLink(choiceLinks)
})};

// Calling init() function
init()

// Note: Everytime you run 'node index.js', it will automatically refactor the file you've previously created (if you haven't yet made a new file, it will create one for you, thanks to fs.writeFile)