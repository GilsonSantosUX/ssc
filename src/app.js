const express = require('express')
const routes = require('./routes');

const app = express();

app.use(routes);

module.exports = app;

// app.get('/',(req,res)=>{
//     res.send('Hello World! teste');
// })


// docker run -p 3000:3000 -d gillo/dockernode
// docker build -t gillo/dockernode .

// mysql --user=root --password
// ALTER USER 'username' IDENTIFIED WITH mysql_native_password BY 'password';