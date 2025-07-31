const connection = require('../database/conection')

const index = (req, res) => {
    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Errore nella query:', err.message);
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        console.log('Dati ricevuti dal DB:', result); // in console
        res.json(result); //inviata a Postman
    });
};


const show = (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM movies WHERE id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                error: true,
                message: `Nessun film trovato con ID ${id}`
            });
        }
        const movie = result[0]
        res.json(result[0]);
    });
};



module.exports = {
    index,
    show
}