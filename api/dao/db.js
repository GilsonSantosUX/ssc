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
    const data = await db.query(sql`INSERT INTO std(rga,name,course,situation,createdIn) VALUES (${rga},${name},${course},${situation},${createdIn});`);
    return data;
  }

  async function get({offset=0,limit=20}){
    await prepared;
    const results = await db.query(sql`SELECT * FROM std LIMIT ${limit} OFFSET ${offset};`);
      return results;
  }

  async function getId({id}){
    await prepared;
    const results = await db.query(sql`SELECT * FROM std WHERE id = ${id};`);
      return results;
  }

  async function  getAluno({name}){
    await prepared;
    const results = await db.query(sql`SELECT * FROM std WHERE name LIKE ${name} ;`);
      return results;
  }


  async function insertAluno({rga,name,course}) {
    await prepared;
    const date = new Date().toISOString();
    const situation = "Ativo";
    const data = await set(rga,name,course,situation,date);
    return data;
  }

  async function deleteAluno({id}) {
    await prepared;
    await db.query(sql`DELETE FROM std WHERE id = ${id};`);
    return true;
  }

module.exports = {
  db,
  get,
  getAluno,
  getId,
  insertAluno,
  deleteAluno,

};