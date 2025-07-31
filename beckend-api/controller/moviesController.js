

const index = (req, res) => {
    res.send('show all movies inside the db')
}

const show = (req, res) => {
    res.send(`show single movies${req.params.id}`)
}


module.exports = {
    index,
    show
}