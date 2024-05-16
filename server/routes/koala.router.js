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
    let queryText = `SELECT * FROM "koala" ORDER BY "name";`

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
koalaRouter.post('/', (req, res)=>{
    let newKoala = req.body
    console.log('Adding koala', newKoala)

    let queryText = `
    INSERT INTO "koala" ("name", "favorite_color", "age", "ready_for_transfer", "notes")
    VALUES ($1, $2, $3, $4, $5);
    `
    pool.query(queryText, [newKoala])
        .then((result)=>{
            res.sendStatus(201)
        })
        .catch((err)=>{
            console.error('Error adding koala', err)
            res.sendStatus(500)
        })
})

// PUT
koalaRouter.put('/ready/:id', (req, res)=>{
    let koalaId = req.params.id
    let isReady = req.body.isReady

    let queryText = ''

    if (isReady === true){
        queryText = `
        UPDATE "koala" SET "ready_for_transfer"=true
        WHERE "id"=$1;
        `;
    } else {
        res.sendStatus(500)
        console.error('Trouble marking as ready')
    }

    pool.query(queryText, [koalaId])
        .then(()=>{
            res.sendStatus(204)
        })
        .catch((err)=>{
            console.log(`Error making query ${queryText}`, err)
            res.send(500)
        })
})

// DELETE

koalaRouter.delete('/:id', (req,res)=>{
    console.log("req params", req.params)

    let koalaId = req.params.id
    let queryText = `
    DELETE FROM "koala" WHERE "id"=$1;
    `
    pool.query(queryText, [koalaId])
        .then(()=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            console.error(`Error making query ${queryText}`, err)
            res.sendStatus(500)
        })
})

module.exports = koalaRouter;