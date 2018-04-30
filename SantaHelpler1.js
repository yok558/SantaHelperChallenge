const fs = require('fs');
fs.readFile('input.txt', (err, data) => {
  // Timer start
  console.time('challenge');
  if (err) {
    console.log('error');
  }
  const instructions = data.toString('utf8');
  let floor = instructions.length;
  let up = instructions.match(/[(]/g).length;
  floor = up - (floor - up);
  console.log('The right floor is', floor);
  // Timer stop
  console.timeEnd('challenge');
});

