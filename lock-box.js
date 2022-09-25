const prompt = require('prompt-sync')({sigint: true});

let pinCode = 4567;
let num1 = Number(prompt('Please enter the passcode to access the super secret lock-box: '));

//console.log('Please enter the passcode to access the super secret lock-box:')

if (pinCode === num1){
  console.log('Success!')
}else {
  console.log('Failure!');
}