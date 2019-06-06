const axios = require('axios')
const fs = require('fs')
let count = 15

fs.readFile('./taihe.json', 'utf8', function (err, data) {
    if (err) throw err
    const infoArr = JSON.parse(data)
    infoArr.forEach((el, index) => {
        if (index >= 1000 && index < 2000) {
            detect(el['artist'], el['song'])
        }
    })
})

async function detect(artist, song) { 
    let res = await axios.post('https://api.xiaoniangao.cn/plp/searchall', {
        "txt": song,
        "offset": 0,
        "limit": 50,
        "token": "551a07468884ee39a00f87df2d7a507c",
        "uid": "832daf83-1c2d-4966-a325-78b06b397069",
        "proj": "ma",
        "wx_ver": "7.0.4",
        "code_ver": "1.13.0"
    })
    if (res.data.data && res.data.data.list.length > 0) {
        const list = res.data.data.list
        if (list[0]['music']['name'].indexOf(song) !== -1 && list[0]['music']['singer'].indexOf(artist) !== -1) {
            console.log(`【${++count}】${artist} - ${song}`)
            // hitHaidie.push({
            //     artist,song
            // })
        }
    }
}


