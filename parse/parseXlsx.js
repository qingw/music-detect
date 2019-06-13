/*
    将Excel简化成json写入文件
*/

const XLSX = require('xlsx')
const fs = require('fs')
const workbook = XLSX.readFile('./taihe.xlsx')
const SheetNamesArr = workbook.SheetNames

for (let j = 0; j < SheetNamesArr.length; j++) {
    let sheet = workbook.Sheets[SheetNamesArr[j]]
    let sheetMap = []

    let i = 3
    while (sheet[`F${i}`]) {
        sheetMap.push({
            artist: sheet[`E${i}`]['v'],
            song: sheet[`F${i}`]['v']
        })
        i++
    }
    console.log(sheetMap)
    fs.writeFile(`${SheetNamesArr[j]}.json`, JSON.stringify(sheetMap), 'utf8', (err) => {
        if (err) throw err
        console.log('done')
    })
}

