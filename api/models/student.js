const db = require("../dao/db");

async function getAll(){
    // return await db.DAO();
    return null;
}

async function getQuantity(offset){
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

    return await data;
}

module.exports = {
    getAll,
    getQuantity
}

db.run("SELECT tbl SET name = $name WHERE id = $id", {
    $id: 2,
    $name: "bar"
});