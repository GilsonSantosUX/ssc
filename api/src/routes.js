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
routes.get('/alunos',(req,res)=>{
    res.set(headers);
    let data;
    if(req.query?.name != undefined) data = db.getAluno(req.query);
    else data = db.get(req.query);
    data.then(data=>{res.status(200).json(data);}).catch(err=>console.error(err));
})

routes.get('/alunos/search',(req,res)=>{
    res.set(headers);
    let data = db.getAluno(req.query);
    data.then(data=>{res.status(200).json(data);}).catch(err=>console.error(err));
})

// GET API
// URL_BASE/std/12
// Return row equals id db
routes.get('/alunos/:id',(req,res)=>{
    res.set(headers);
    let response = db.getId(req.params);
    response.then(data=>res.status(200).json(data)).catch(err=>console.log(err));
});

// POST API
// BASE_URL/insert?rga=2020202000&name=gilsonsantos&course=tdas&situation=ativo&
// BASE_URL/insert?rga=2018.1902.060-6&name=Gilson%20Santos&course=TADS&situation=Ativo
// Return row equals id db
routes.post('/alunos/insert', (req, res) =>{
    res.set(headers);
    // let response = db.postInsert(req.query);
    let response = db.insertAluno(req.body);
    response.then(data=>{
        console.log(data);
        res.json(data);
    }).catch(err=>console.log(err));
})

routes.delete('/alunos/delete/:id',(req,res)=>{
    let response = db.deleteAluno(req.params);
});

module.exports=routes;