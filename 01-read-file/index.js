const fs = require('fs');
const path = require('path');
const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});
stream.on('readable', () => {
  const text = stream.read();
  console.log(text);
  stream.destroy();
});
