require('dotenv').config()
const{Router, response} = require( 'express');
const student = require('../models/student');
const db = require("../dao/db");

const routes = new Router();

const headers = {
    "Content-Type":"application/json"
  };

// GET API sample
// URL_BASE/std/
// Return rows started offset indice 0 and limit default 20
routes.get('/', (req, res) =>{
    res.set(headers);
    let data = db.get(req.query);
    data.then(data=>{res.status(200).json(data);}).catch(err=>console.error(err));
})

// GET API
// URL_BASE/std?offset=20
// Return rows started offset indice 20
// GET API
// URL_BASE/std?offset=20&limit=5
// Return rows started offset indice 20 and limit rows 5
routes.get('/std',(req,res)=>{
    res.set(headers);
    let data = db.get(req.query);
    data.then(data=>{res.status(200).json(data);}).catch(err=>console.error(err));
})

// GET API
// URL_BASE/std/12
// Return row equals id db
routes.get('/std/:id',(req,res)=>{
    res.set(headers);
    let response = db.getId(req.params);
    response.then(data=>res.status(200).json(data)).catch(err=>console.log(err));
});

// POST API
// URL_BASE/insert?rga=2020202000&name=gilsonsantos&course=tdas&situation=ativo&
// Return row equals id db
routes.get('/insert', (req, res) =>{
    // res.set(headers);
    res.set(headers);
    //const {rga,name,course,situation} = req.params;
    let response = db.postInsert(req.params);
    response.then(data=>data==200? res.send({ message: 'Banco populado!' }): res.send({ message: 'Erro params!' })).catch(err=>console.log(err));
})

module.exports=routes;