const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'project-dist'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file) == '.css')
        fs.unlink(path.join(__dirname, 'project-dist', file));
    });
  }
});
fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file) == '.css') {
        fs.readFile(path.join(__dirname, 'styles', file), (err, data) => {
          if (err)
            console.log(err);
          else {
            fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, () => { });
          }
        });
      }
    });
  }
});