const express = require('express')
const app = express()
const PORT = process.env.PORT
const connect = require('./database/conection')

app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('welcome to my app')
})

app.get('/movies', (req, res) => {
    res.send('show all movies inside the db')
})

app.get('/movies/:id', (req, res) => {
    res.send(`show single movies${req.params.id}`)
})
