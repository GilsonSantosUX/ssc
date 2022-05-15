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