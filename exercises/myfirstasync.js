var fs = require('fs');

var x = fs.readFile(process.argv[2], (err, stuff) => {
  let things = stuff.toString().split('\n').length - 1;
    console.log(things);
});
