const connect = require('@databases/sqlite');
const {sql} = require('@databases/sqlite');
const DBSOURCE = "./dao/ssc.db"

const db = connect(DBSOURCE);

  async function prepare() {
    await db.query(sql`CREATE TABLE IF NOT EXISTS std(id INTEGER PRIMARY KEY AUTOINCREMENT,rga text NOT NULL,name text NOT NULL,course text,situation text ,createdIn CURRENT_TIMESTAMP);`);
  }

  const prepared = prepare();

  async function set(rga, name,course,situation,createdIn) {
    await prepared;
    await db.query(sql`INSERT INTO std(rga,name,course,situation,createdIn) VALUES (${rga},${name},${course},${situation},${createdIn});`);
  }

  async function get(offset=20){
    await prepared;
    const results = await db.query(sql`SELECT * FROM std;`);
    let limit = 20;
    if(offset>limit){
      limit=offset;
    }
    if (results.length) {
      const result = [];
      results.map((el,i)=>{
        if(i<offset)
          result[i]=el;
      })
      return result;
    } else {
      return undefined;
    }
  }

  async function run() {
    set('2018.1902.060-6','Gilson Santos','TADS','Ativo','09:02:04');
    set('2019.1902.060-6','Jeferson Lima','TADS','Ativo','18:02:04');
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

module.exports = {
  db,
  set,
  get,
  run
};