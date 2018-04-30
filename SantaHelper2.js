const fs = require('fs');
fs.readFile('input.txt', (err, data) => {
    // Timer start
    console.time('challenge');
    if (err) {
        console.log('error');
    }
    let instructions = data.toString('utf8');
    
    let floor = 0;
    for(let position=0; position < instructions.length; position++) {
        if (floor <0) {
            console.log(position);
            break;
        }
        else {
            if(instructions.charCodeAt(position) === 40) {
                floor++;
            }
            else {
                floor--;
            }
        }
    }
    // Timer stop
    console.timeEnd('challenge');
});


