/*
    将Excel简化成json写入文件
    亚神
*/

const XLSX = require('xlsx')
const fs = require('fs')
const workbook = XLSX.readFile('../hezhong.xlsx')
const SheetNamesArr = workbook.SheetNames

console.log(SheetNamesArr)

let sheetIndex = 0

let sheet = workbook.Sheets[SheetNamesArr[sheetIndex]]
let sheetMap = []

let i = 2
while (sheet[`F${i}`]) {
    sheetMap.push({
        artist: sheet[`D${i}`]['v'],
        song: sheet[`F${i}`]['v']
    })
    i++
}
console.log(sheetMap)
fs.writeFile(`${SheetNamesArr[sheetIndex]}.json`, JSON.stringify(sheetMap), 'utf8', (err) => {
    if (err) throw err
    console.log('done')
})

