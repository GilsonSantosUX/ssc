require('dotenv').config()
const{Router, response} = require( 'express');
const student = require('../models/student');
const db = require("../dao/db");

const routes=new Router(); 

routes.get('/',(req,res)=>{
    const data = req.query;
    res.send({params:data});
})

routes.get('/home', (req, res) =>{
    res.send({ message: 'Hello world!' });
})

routes.get('/insert', (req, res) =>{
    db.run();
    res.send({ message: 'Banco populado!' });
})

routes.get('/std',(req,res)=>{
    const { offset } = req.query;
    let data = db.get(offset);
    data.then(data=>{res.json(data);}).catch(err=>console.error(err));
})

module.exports=routes