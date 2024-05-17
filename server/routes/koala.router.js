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
    let koalaArray = [newKoala.name, newKoala.age, newKoala.favorite_color, newKoala.ready_for_transfer, newKoala.notes]
    // console.log('Adding koala', koalaArray)

    let queryText = `

    INSERT INTO "koala" ("name", "age","favorite_color",  "ready_for_transfer", "notes")

    VALUES ($1, $2, $3, $4, $5);
    `
    pool.query(queryText, koalaArray)
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
    let isReady = req.body.ready_for_transfer
    // console.log("req.body", req.body)
// console.log("is ready?" , isReady)
// console.log("koala id", koalaId)
    let queryText = ''

    if (isReady === true){
        queryText = `
        UPDATE "koala" SET "ready_for_transfer"=true
        WHERE "id"=$1;
        `;
    } 
    else if(isReady === false){
        queryText = `
        UPDATE "koala" SET "ready_for_transfer"=false
        WHERE "id"=$1;
        `;
    }    
    else {
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

koalaRouter.put('/name/:id', (req, res)=>{
    let koalaId = req.params.id
    let incName = req.body.age
    console.log("req.body", req.body)
console.log("name." , incName)
console.log("koala id", koalaId)
    let queryText = ''

    
        queryText = `
        UPDATE "koala" SET "name"=$2
        WHERE "id"=$1;
        `;
    
    
    pool.query(queryText, [koalaId,incName])
        .then(()=>{
            res.sendStatus(204)
        })
        .catch((err)=>{
            console.log(`Error making query ${queryText}`, err)
            res.send(500)
        })
})

koalaRouter.put('/age/:id', (req, res)=>{
    let koalaId = req.params.id
    let incAge = req.body.age
    console.log("req.body", req.body)
console.log("age." , incAge)
console.log("koala id", koalaId)
    let queryText = ''

    
        queryText = `
        UPDATE "koala" SET "age"=$2
        WHERE "id"=$1;
        `;
    
    
    pool.query(queryText, [koalaId,incAge])
        .then(()=>{
            res.sendStatus(204)
        })
        .catch((err)=>{
            console.log(`Error making query ${queryText}`, err)
            res.send(500)
        })
})

koalaRouter.put('/color/:id', (req,res) => {
        let koalaId = req.params.id
        let incColor = req.body.favorite_color
        let queryText = ''
        queryText = `
        UPDATE "koala" SET "favorite_color" = $2
        WHERE "id"=$1;`
pool.query(queryText, [koalaId, incColor])
.then(()=>{
    res.sendStatus(204)
})
.catch((err)=>{
    console.log(`Error making query ${queryText}`, err)
    res.send(500)
})
})

koalaRouter.put('/notes/:id', (req, res)=>{
    let koalaId = req.params.id
    let incNotes = req.body.notes
    console.log("req.body", req.body)
console.log("notes." , incNotes)
console.log("koala id", koalaId)
    let queryText = ''

    
        queryText = `
        UPDATE "koala" SET "notes"=$2
        WHERE "id"=$1;
        `;
    
    
    pool.query(queryText, [koalaId,incNotes])
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