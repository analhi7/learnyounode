var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // также можно использовать fs.readFile(file, 'utf8', callback)
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})