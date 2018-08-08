var fs = require('fs')
var data = require('./file-system-data.json')

console.log(data.name)

fs.readFile('file-system-data.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data)
    console.log(data.name)
})
