
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
    const { user, text } = req.body;

    if (!user || !text) return res.status(400).json({ error: "user e text obbligatori" });

    const sql = "INSERT INTO reviews (movie_id, user, text) VALUES (?, ?, ?)";
    connection.query(sql, [movie_id, user, text], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ id: result.insertId, movie_id, user, text });
    });
};
