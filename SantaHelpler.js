const fs = require('fs');
fs.readFile('input.txt', (err, data) => {
  // Timer start
  console.time('challenge');
  if (err) {
    console.log('error');
  }
  var string = data.toString('utf8');
  var floor = string.length;
  var up = string.match(/[(]/g).length;
  floor = up - (floor - up);
  console.log('The right floor is', floor);
  // Timer stop
  console.timeEnd('challenge');
});

