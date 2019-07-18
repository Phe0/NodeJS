const https = require('https')

const url = `https://api.darksky.net/forecast/62cb1ea59e56ff751cda4343a286560b/40,-75?units=si`

const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()