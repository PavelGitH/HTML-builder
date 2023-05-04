const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, error => {
  if (error) throw error;
});

fs.readdir(path.join(__dirname, 'files-copy'), function (error, files) {
  if (error) throw error;
  for (let file of files) {
    fs.unlink(path.join(__dirname, 'files-copy', file),  error => {
      if (error) throw error;
    });
  }
})

fs.readdir(path.join(__dirname, 'files'), function (error, files) {
  if (error) throw error;
  for (let file of files) {
    fs.copyFile(String(path.join(__dirname, 'files', file)), String(path.join(__dirname, 'files-copy', file)), error => {
      if (error) throw error;
    });
  }
})
