const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('show all movies inside the db')
})

router.get('/:id', (req, res) => {
    res.send(`show single movies${req.params.id}`)
})

module.exports = router