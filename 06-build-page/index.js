const fs = require('fs');
const path = require('path');
const styles = path.join(__dirname, 'styles')
const indexNew = path.join(__dirname, 'project-dist', 'index.html');
const styleNew = path.join(__dirname, 'project-dist', 'style.css');

fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, error => {
  if (error) throw error;
});

fs.open(indexNew, 'w', (err) => {
  if (err) throw err;
});

fs.open(styleNew, 'w', (err) => {
  if (err) throw err;
});

fs.truncate(indexNew, err => {
  if (err) throw err;
});

fs.truncate(styleNew, err => {
  if (err) throw err;
});

fs.copyFile(path.join(__dirname, 'template.html'), indexNew, error => {
  if (error) throw error;
});