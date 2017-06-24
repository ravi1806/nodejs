console.log('starting app');

const fs = require('fs'); //Fetch all mnethods of fs module into const fs
const os = require('os'); //Fetches the os module
const demo = require('./demo');
const _ = require('lodash'); //This will first look into core and after not finding it there, it will look in the package.json

const user = os.userInfo();
console.log(user);

console.log(_.isString(true));
console.log(_.isString('Ravi'));

var filteredArray = _.uniq(['Ravi',1,3,'Ravi',1,3,4,4,5,5,6,6,6]); //This wil filter out the duplicates.
console.log(filteredArray);
// console.log(module);
// console.log(demo.addFunction(3,5));

//fs.appendFile('greetings.txt', 'Hello Hi World', (err)=> {

// fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err)=> {
//
//   if(err) {
//     console.log("Couldn't write");
//   }
// });
