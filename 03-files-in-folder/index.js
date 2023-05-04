const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, function (error, files) {
  if (error) {
    return console.log(error);
  }
  for (let file of files) {
    if (file.isFile()) {
      const arr = [];
      fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stats) => {
        if (error) {
          console.log(error);
        }
        else {
          arr.push(file.name.split('.').slice(0, -1).join('.'));
          arr.push(path.extname(file.name).slice(1));
          arr.push(stats.size + 'b');
          console.log(arr.join(' - '));
        }
      });
    }
  }
});
