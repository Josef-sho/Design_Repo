/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

const qr = require('qr-image');
const fs = require('fs');
let inquirer;

import('inquirer').then((module) => {
    inquirer = module.default;

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'url',
                message: 'Please enter a URL:',
            },
        ])
        .then((answers) => {
            console.log(answers.url);
            fs.writeFile("message.txt", answers.url, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            let qr_svg = qr.image(answers.url, { type: 'svg' });
            qr_svg.pipe(fs.createWriteStream('qr.svg'));
            console.log('QR code saved as qr.svg');
            
        });
});