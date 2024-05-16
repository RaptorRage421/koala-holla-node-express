const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg')


// DB CONNECTION
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'koala_holla'
})

// GET
koalaRouter.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "koalas" ORDER BY "name";`

    pool.query(queryText)
        .then((result)=>{
            res.send(result.rows)
        })
        .catch((err)=>{
            console.error('Error getting koalas', err)
            res.sendStatus(500)
        })
})

// POST
koalaRouter.post('/', ()=>{

})

// PUT
koalaRouter.post('/', ()=>{

})

// DELETE

module.exports = koalaRouter;