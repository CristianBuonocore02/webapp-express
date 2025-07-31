const express = require('express')
const app = express()
const PORT = process.env.PORT
const movieRouter = require('./routers/movies')


app.use('/api/movies', movieRouter)

app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('welcome to my app')
})

