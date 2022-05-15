require('dotenv').config()
const{Router, response} = require( 'express');
const student = require('../models/student');
const db = require("../dao/db");

console.log(process.env);

const routes=new Router(); 

routes.get('/home', (req, res) =>{
    res.send({ message: 'Hello world!' });
})

routes.get('/',(req,res)=>{
    const data = req.query;
    res.send({params:data});
})

routes.get('/student',(req,res)=>{
    const { offset } = req.query;
    if(offset != undefined || offset != null ){
        res.send({message:'params offset'});
    }else{
        const select = "SELECT * FROM student;";
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
            res.status(400).json({"error":err.message});
            return;
            }
            res.json({
                "message":"success",
                "data":rows
            })
        });
    }
})

module.exports=routes