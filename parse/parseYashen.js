/*
    将Excel简化成json写入文件
    亚神
*/

const XLSX = require('xlsx')
const fs = require('fs')
const workbook = XLSX.readFile('../all.xlsx')
const SheetNamesArr = workbook.SheetNames

console.log(SheetNamesArr)

let sheetIndex = 11

let sheet = workbook.Sheets[SheetNamesArr[sheetIndex]]
let sheetMap = []

let i = 2
while (sheet[`C${i}`]) {
    console.log(i)
    console.log(sheet[`D${i}`])
    sheetMap.push({
        artist: sheet[`D${i}`]['v'],
        song: sheet[`C${i}`]['v']
    })
    i++
}
console.log(sheetMap)
fs.writeFile(`${SheetNamesArr[sheetIndex]}.json`, JSON.stringify(sheetMap), 'utf8', (err) => {
    if (err) throw err
    console.log('done')
})

