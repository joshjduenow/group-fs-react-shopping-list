const express = require('express');
const router = express.Router();
const pool = require('./modules/pool.js'); // Might mess up

// Setup a GET route to get all the guest from the database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM "shopping" ORDER BY "name";`;
    pool.query(sqlText)
        .then((result) => {
            console.log('Got stuff back from the database', result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


// Setup a POST route to add a new guest to the database
router.post('/', (req, res) => {
    const list = req.body;
    const sqlText = `INSERT INTO "shopping" ("name", "quantity", "unit")
                     VALUES ($1, $2, $3)`;
                     console.log(req.body);
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [list.item, list.quantity, list.unit])
        .then((result) => {
            console.log(`Added shopping item to the database`, list);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;