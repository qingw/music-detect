const axios = require('axios')
const fs = require('fs')
let count = 0

fs.readFile('./parse/索氧.json', 'utf8', function (err, data) {
    if (err) throw err
    const infoArr = JSON.parse(data)
    // console.log(infoArr)
    infoArr.forEach((el, index) => {
        // if (index >= 110000 && index < 120000) {
            detect(el['artist'], el['song'])
        // }
    })
})

function detect(artist, song) {
    // try {
    axios.get(`https://songsearch.kugou.com/song_search_v2?appid=1058&keyword=${song}`)
        .then(res => {
            if (res.data.data && res.data.data.lists.length > 0) {
                const list = res.data.data.lists
                for (let i = 0; i < 100; i++) {
                    if (list[i] && list[i]['SongName'].indexOf(song) !== -1 && list[i]['SingerName'].indexOf(artist) !== -1) {
                        console.log(`${++count} - ${artist} - ${song}`)
                        fs.writeFileSync('kawa_out.txt', `${artist} - ${song}\n`, {
                            flag: 'a'
                        })
                    }
                }

            }
        })
        .catch(function (error) {
            // console.log(error);
        })
}


