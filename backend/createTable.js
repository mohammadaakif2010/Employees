const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" , 
    database: "books"
});
 db.connect((err)=>{
    if (err){
        console.log(err)
    }
    else{
        db.query("create table studentss(Sid int, Sname varchar(50), Class varchar(50), Percentage int, rank int)",
        (err,result)=>{
            console.log("table created")
        }
        )
    }
 })