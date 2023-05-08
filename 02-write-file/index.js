const fs = require('fs');
const path = require('path');
const process = require('process');
const input = process.stdin;
const output = process.stdout;
const readline = require('readline');
const rl = readline.createInterface({input, output});

fs.appendFile(path.join(__dirname, 'text.txt'), '', () => {
  console.log('Please, write text');
});

rl.on('line', (line) => {
  if(line == 'exit') {
    rl.close();
  }
  fs.appendFile(path.join(__dirname, 'text.txt'), line, () => {});
});

rl.on('close', () => {
  console.log(' Thanks! Goodbye!');
});
