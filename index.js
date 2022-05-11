const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World! teste');
})

app.listen(PORT,HOST);

// docker run -p 3000:3000 -d gillo/dockernode
// docker build -t gillo/dockernode .

// mysql --user=root --password
// ALTER USER 'username' IDENTIFIED WITH mysql_native_password BY 'password';