const{Router} = require( 'express');

const routes=new Router(); 

routes.get('/home', (req, res) =>{
    res.send({ message: 'Connect with success!' })
})

module.exports=routes