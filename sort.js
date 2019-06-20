const fs = require('fs')
let count = 0

fs.readFile('./kawa_out.txt', 'utf8', function (err, data) {
    if (err) throw err
    const s = new Set()
    let arr = data.split('\n')
    arr.forEach(el => {
        s.add(el)
    })
    console.log(s.size)
    let outArr = Array.from(s)
    outArr.sort()
    console.log(outArr)
    fs.writeFileSync('./kawa_out_sort.txt', outArr.join('\n'))
})


