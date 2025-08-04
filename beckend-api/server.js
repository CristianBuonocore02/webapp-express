const express = require('express')
const app = express()
const PORT = process.env.PORT
const movieRouter = require('./routers/movies')
const cors = require("cors");

app.use(express.static('public'))

// consenti l'accesso solo al sito che ha questo indirizzo
app.use(cors({
    origin: "http://localhost:5173"
}));

// consente l'accesso a qualsiasi sito in qualsiasi momento
// app.use(cors());

app.use('/api/movies', movieRouter)

app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('welcome to my app')
})

