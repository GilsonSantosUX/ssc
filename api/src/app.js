const express = require('express')
const routes = require('./routes');

const app = express();

app.use(routes);

module.exports = app;

// window.document.mousedown(function(event) {
//     switch (event.which) {
//         case 1:
//             alert('Left Mouse button pressed.');
//             break;
//         case 2:
//             alert('Middle Mouse button pressed.');
//             break;
//         case 3:
//             alert('Right Mouse button pressed.');
//             break;
//         default:
//             alert('You have a strange Mouse!');
//     }
// });

// app.get('/',(req,res)=>{
//     res.send('Hello World! teste');
// })


// docker run -p 3000:3000 -d gillo/dockernode
// docker build -t gillo/dockernode .

// mysql --user=root --password
// ALTER USER 'username' IDENTIFIED WITH mysql_native_password BY 'password';