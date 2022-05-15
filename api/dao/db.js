const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "./dao/ssc.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message)
      throw err;
    } else {
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE Student (
              id INT NOT NULL AUTO_INCREMENT,
              rga VARCHAR(15) NOT NULL,
              name VARCHAR(255) NOT NULL,
              course VARCHAR(255),
              situation VARCHAR(8),
              createdIn TIME(hh:mm:ss),
              PRIMARY KEY (id)
          );`,
      (err) => {
          if (err) {
            console.log('Table already created');
            // Table already created
          }else{
              // Table just created, creating some rows
              console.log(insert);
              let insert = 'INSERT INTO Student (rga,name,course,situation,createdIn) VALUES (?,?,?,?.?);';
              console.log(insert);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
              db.run(insert, ['2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04']);
          }
      });
    }
  })

module.exports = db;