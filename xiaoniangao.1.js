const axios = require('axios')
const fs = require('fs')
const async = require('async')
let count = 0

fs.readFile('./parse/亚神2.json', 'utf8', function (err, data) {
    if (err) throw err
    const infoArr = JSON.parse(data)
    infoArr.forEach((el, index) => {
        detect(el['artist'], el['song'])
    })
    async.map()
})

async function detect(artist, song) {
    let res = await axios.post('https://api.xiaoniangao.cn/plp/searchall', {
        "token": "39bc56ad2cf446f28e94aa3c1df31951",
        "txt": song,
        "offset": 0,
        "limit": 30,
        "code_ver": "5.8.20",
        "uid": "5277c4ec-4ee1-473a-8929-41d817d57eca",
        "proj": "in"
    })
    if (res.data.data && res.data.data.list.length > 0) {
        const list = res.data.data.list
        for (let i = 0; i < 100; i++) {
            if (list[i] && list[i]['music']['name'].indexOf(song) !== -1 && list[i]['music']['singer'].indexOf(artist) !== -1) {
                console.log(`${artist} - ${song}`)
                // return `${artist} - ${song}`
            }
        }
        
    }
}

