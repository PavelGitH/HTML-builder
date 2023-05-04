const fs = require('fs');
const path = require('path');
const storage = fs.createWriteStream(path.join(__dirname, 'storage.txt'));
const { stdin, stdout, exit } = process;

function sayGoodbye() {
  stdout.write('Goodbye!');
  exit();
}

stdout.write('Enter text:');

process.on('SIGINT', sayGoodbye);

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    sayGoodbye();
  }
  storage.write(data);
});