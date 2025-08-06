
const connection = require('../database/conection');

exports.getReviewsByMovieId = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addReview = (req, res) => {
    const movie_id = req.params.id;
    console.log(req.body);
    const { name, text, vote } = req.body;


    if (!name || !text) return res.status(400).json({ error: "user e text obbligatori" });

    const sql = "INSERT INTO reviews (movie_id, name, text, vote) VALUES (?, ?, ?, ?)";
    connection.query(sql, [movie_id, name, text, vote], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ id: result.insertId, movie_id, name, text, vote });
    });
};
