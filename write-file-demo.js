var fs = require('fs')

var data = {
    name: 'Bob'
}

fs.writeFile('write-file-data.json', JSON.stringify(data), (err) => {
    console.log('write: finished \nerror:', err)
})

// output
//
// write: finished
// error: null
