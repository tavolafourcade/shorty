const express = require('express')
const cors = require('cors')
const morgan = require('morgan')    //logger
const helmet = require('helmet')    //security

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(helmet())
app.use(express.json())
app.use(express.static('./public'))

// app.get('/url/:id', (req,res) => {
//     // TODO: get a short url by id
//     res.json({
//         message: 'Shorty-app'
//     })
// })

// app.get('/:id', (req,res) => {
//     // TODO: redirect to Url
// })

// app.get('/:url', (req,res) => {
//     // TODO: create short Url
// })

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})