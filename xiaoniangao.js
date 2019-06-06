const axios = require('axios')

axios.post('https://api.xiaoniangao.cn/plp/searchall', {
    "txt": "林俊杰",
    "offset": 0,
    "limit": 50,
    "token": "551a07468884ee39a00f87df2d7a507c",
    "uid": "832daf83-1c2d-4966-a325-78b06b397069",
    "proj": "ma",
    "wx_ver": "7.0.4",
    "code_ver": "1.13.0"
}).then(res => {
    const list = res.data.data.list
    console.log(list)
})
