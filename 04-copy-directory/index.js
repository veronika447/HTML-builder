const fs = require('fs');
const path = require('path');
const copyDir = () => {
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, () => { });
  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), () => { });
      });
    }
  });
};

copyDir();

