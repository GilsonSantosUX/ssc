const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

function getConnection(){
    try{
        if(!isset(self.pdo)){
            self.pdo = new PDO("sqlite:dao/cartuning.sqlite","","",array(
                 PDO.ATTR_PERSISTENT = true
             )); // Selecionar tipo de linguagem do banco
            self.pdo.setAttribute(PDO.ATTR_ERRMODE, PDO.ERRMODE_EXCEPTION);
        }
        return self.pdo;
    }catch(e){
        console.log("Error in openhrsedb "+e);
    }
    // self usando como se fosse o this para o contexto de um static

}

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS Student (id INTEGER PRIMARY KEY,name TEXT NOT NULL,rga BLOB NOT NULL,course TEXT NOT NULL,situation TEXT NOT NULL,created_in NUMERIC NOT NULL)");

    const stmt = db.prepare("INSERT INTO id VALUES (Gilson Santos)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});


function userAll(){
    connect = self.getConnection();
    sql = connect.prepare('SELECT * FROM `User`;');
    sql.execute();
    data = sql.fetchAll();
    return data;
}

function inflateDB(){
    connect = self.getConnection();
    // Inflate Product
    sqlProduct = 'INSERT INTO Product(`title`,`descrition`,`imgBanner`,`idCategoria`,`idImgsGallery`,`price`) VALUES(:title,:descrition,:imgBanner,:idCategoria,:idImgsGallery,:price);';
    sql = connect.prepare(sqlProduct);
    sql.bindValue(':title',"Opala SS");
    sql.bindValue(':descrition',"Descrição do Opala SS");
    sql.bindValue(':imgBanner','assets/img-products/car-opala-principal.jpg');
    sql.bindValue(':idCategoria',1);
    sql.bindValue(':idImgsGallery',0);
    sql.bindValue(':price',1500.00);
    sql.execute();
}


db.close();