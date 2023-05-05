const fs = require('fs');
const path = require('path');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
const styles = path.join(__dirname, 'styles');

fs.open(bundle, 'w', (err) => {
  if (err) throw err;
});

fs.truncate(bundle, err => {
  if (err) throw err;
});

fs.readdir(styles, function (error, files) {
  const arr = [];
  if (error) throw error;
  for (let file of files) {
    if (path.extname(file) === '.css') {
      const fileCSS = path.join(__dirname, 'styles', file);
      fs.readFile(fileCSS, "utf8", function (error, data) {
        if (error) throw error;
        arr.push(data);
        fs.writeFile(bundle, arr.join(''), function (error) {
          if (error) throw error;
        });
      });
    }
  }
})




// node 05-merge-styles