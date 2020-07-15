const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())
data.name = 'Lily'
data.age = '20'
fs.writeFileSync('1-json.json', JSON.stringify(data))