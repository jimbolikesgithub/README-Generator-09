
// const choiceLinks = {
//   // [GNU, WordPress , Appache, OpenBSD]
//   array: ['https://www.gnu.org/licenses/license-recommendations.html', 'https://wordpress.org/about/license/', 'https://www.apache.org/licenses/', 'https://www.openbsd.org/policy.html']
// }

// // Object Destructuring
// const { array } = choiceLinks
// // Logs the entire array of links
// console.log(array);


// const pushArrayLink = (link) => {
//   // console.log(link.array[2])
//   if (answers.License === 'GNU') {
//       console.log(`This is GNU: ${link.array[0]}`)
//   } else if (answers.License === 'WordPress') {
//       console.log(`This is WordPress: ${link.array[1]}`)
//   } else if (answers.License === 'Apache') {
//       console.log(`This is Apache: ${link.array[2]}`)
//   } else {
//       console.log(`This is OpenBSD: ${link.array[3]}`)
//   }
//   return link;
// }
// Returning each array index, for ex...
// console.log(link.array[1]) will return 'https://wordpress.org/about/license/' (but without the strings)


// function generateMarkdown(link) {
//   return link.array;
// }

module.exports = pushArrayLink(choiceLinks)