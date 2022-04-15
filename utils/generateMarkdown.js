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
            if (link.License === 'GNU') {
                console.log(`This is GNU: ${link.array[0]}`)
            } else if (link.License === 'WordPress') {
                console.log(`This is WordPress: ${link.array[1]}`)
            } else if (link.License === 'Apache') {
                console.log(`This is Apache: ${link.array[2]}`)
            } else {
                console.log(`This is OpenBSD: ${link.array[3]}`)
            }
            return link;
            
        }
        
        // // Returning each array index, for ex...
        // // console.log(link.array[1]) will return 'https://wordpress.org/about/license/' (but without the strings)
        // pushArrayLink(choiceLinks)

module.exports = pushArrayLink(choiceLinks)


// INSTRUCTIONS
// ------------
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `; 
// } 

// module.exports = generateMarkdown;