const dash = require('dashdash');
const fetch = require('node-fetch');
const fs = require('fs')

const options = {
    allowUnknown: true,
    options: [{
        names: ['output', 'o'],
        type: 'string',
        help: 'file in which to store the fetched content'
    }],
};

const parser = dash.createParser(options);

// const opts = parser.parse(options);
// const output = opts.output
// const url = opts._args[0];
// console.log(output, url);
//console.log(opts.output, opts._args[0]) -> output.txt https://appacademy.io
fetch('https://artii.herokuapp.com/make?text=curl++this')
    .then(response => response.text()) //'the page we are requesting is currently sending back plain text' -- do we need .json()
    .then(body => console.log(body))
    .catch((reason) => {
        console.log('rejected because', reason);
    });