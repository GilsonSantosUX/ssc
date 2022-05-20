const sqlite3 = require('sqlite3');
const db = require("./db");

function DAO(sql, params = []){
    return new Promise((resolve, reject) => {
        db.all(sql, params, function (err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
}

module.exports = {
  DAO
}

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//       console.error(db);
//       throw err;
//     } else {
//       console.log('Connected to the SQLite database.');
//       db.run("CREATE TABLE IF NOT EXISTS std(id INTEGER PRIMARY KEY AUTOINCREMENT,rga text NOT NULL,name text NOT NULL,course text,situation text ,createdIn CURRENT_TIMESTAMP)",
//       (err)=>{
//           if (err) {
//             console.log('Table already created');
//             // Table already created
//           }else{
//               console.log('Table just created, creating some rows');
//               // Table just created, creating some rows
//               let insert = 'INSERT INTO std(rga,name,course,situation,createdIn) VALUES (?,?,?,?,?);';
//               db.run(insert,['2018.1902.060-6','Gilson Santos','TADS','Ativo','09:02:04']);
//           }
//       });
//     }
//   })

  // function insert(db){
  //   let insert = 'INSERT INTO std(rga,name,course,situation,createdIn) VALUES (?,?,?,?,?);';
  //     db.run(insert,['2018.1902.060-6','Gilson Santos','TADS','Ativo','09:02:04']);
  // }