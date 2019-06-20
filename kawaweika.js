const axios = require('axios')
const fs = require('fs')
let count = 0

fs.readFile('./parse/亚神.json', 'utf8', function (err, data) {
    if (err) throw err
    const infoArr = JSON.parse(data)
    // console.log(infoArr)
    infoArr.forEach((el, index) => {
        if (index >= 110000 && index < 120000) {
            detect(el['artist'], el['song'])
        }
    })
})

async function detect(artist, song) {
    try {
        let res = await axios.get(`https://songsearch.kugou.com/song_search_v2?appid=1058&keyword=${song}`)
        if (res.data.data && res.data.data.list.length > 0) {
            const list = res.data.data.lists
            for (let i = 0; i < 100; i++) {
                if (list[i] && list[i]['SongName'].indexOf(song) !== -1 && list[i]['SingerName'].indexOf(artist) !== -1) {
                    console.log(`${artist} - ${song}`)
                    // return `${artist} - ${song}`
                }
            }

        }
    } catch (e) {
        // console.log(e)
    }
    
}


