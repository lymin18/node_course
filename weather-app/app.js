const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5af0121a21c0f68c142afcd62d0fa805&query=37.8267,-122.4233&units=m'

request({ url: url, json: true }, (error, respone) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else {
        current = respone.body.current
        console.log(current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degrees out. It feels like ' + current.feelslike + ' degrees out.')
    }
})

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibHltaW4wMCIsImEiOiJja2NrYWh0Z3MxOGh1MnhvMHhoZHB3Z2Q3In0.ROKlknt3JPSZ96ZtHlpKgg&limit=1'

// request({url: url, json: true}, (error, respone) => {
//     console.log(respone.body.features[0].center[0] + ' , ' + respone.body.features[0].center[1])
// }
// )
